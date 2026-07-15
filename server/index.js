import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { consultationRequestTemplate, jobApplicationTemplate } from './emailTemplates.js';

const app = express();
const PORT = process.env.PORT || 3001;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'a.numeer99@gmail.com';

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const APPLICATIONS_FILE = path.join(process.cwd(), 'applications.json');

function loadApplications() {
  try {
    if (fs.existsSync(APPLICATIONS_FILE)) {
      const data = fs.readFileSync(APPLICATIONS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error loading applications:', err);
  }
  return [];
}

function saveApplications(applications) {
  try {
    fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(applications, null, 2));
  } catch (err) {
    console.error('Error saving applications:', err);
  }
}

function isDuplicateApplication(applications, jobId, email, phone) {
  return applications.some(
    (app) =>
      app.jobId === jobId &&
      app.email.toLowerCase() === email.toLowerCase() &&
      app.phone === phone
  );
}

app.post('/api/send-email', async (req, res) => {
  const { fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt } = req.body;

  if (!fullName || !email || !phone || !projectDetails) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    await transporter.sendMail({
      from: `"Code Amigo Website" <${process.env.SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: 'New Consultation Request - Code Amigo Website',
      html: consultationRequestTemplate({ fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt }),
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.post('/api/apply-job', async (req, res) => {
  const {
    jobId,
    jobSlug,
    jobTitle,
    fullName,
    email,
    phone,
    country,
    countryCode,
    address,
    resumeFileName,
    resumeFileSize,
    submittedAt,
  } = req.body;

  if (!fullName || !email || !phone || !address || !resumeFileName) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const applications = loadApplications();

  if (isDuplicateApplication(applications, jobId, email, phone)) {
    return res.status(409).json({
      error: 'Duplicate application',
      duplicate: true,
      message: "You've already applied for this position using this email address and phone number. We have received your application and will contact you if your profile is shortlisted.",
    });
  }

  const newApplication = {
    id: Date.now().toString(),
    jobId,
    jobSlug,
    jobTitle,
    fullName,
    email,
    phone,
    country,
    countryCode,
    address,
    resumeFileName,
    resumeFileSize,
    submittedAt: submittedAt || new Date().toISOString(),
    status: 'pending',
  };

  applications.push(newApplication);
  saveApplications(applications);

  try {
    await transporter.sendMail({
      from: `"Code Amigo Careers" <${process.env.SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New Job Application - ${jobTitle} - Code Amigo Careers`,
      html: jobApplicationTemplate({ jobTitle, fullName, email, phone, country, countryCode, address, resumeFileName, resumeFileSize, submittedAt }),
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
