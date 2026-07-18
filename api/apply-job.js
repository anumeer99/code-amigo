import { getTransporter, NOTIFY_EMAILS, GMAIL_USER } from './_lib/mailer.js';
import { jobApplicationTemplate } from './_lib/templates.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const {
    jobId, jobSlug, jobTitle, fullName, email, phone,
    country, countryCode, address, resumeFileName,
    resumeFileSize, resumeBase64, submittedAt,
  } = req.body || {};

  if (!fullName || !email || !phone || !address || !resumeFileName) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const transporter = getTransporter();
    const html = jobApplicationTemplate({ jobTitle, fullName, email, phone, country, countryCode, address, resumeFileName, resumeFileSize, submittedAt });

    const mailOptions = {
      from: `"Code Amigo Careers" <${GMAIL_USER}>`,
      to: NOTIFY_EMAILS.join(', '),
      replyTo: email,
      subject: `New Job Application - ${jobTitle} - Code Amigo`,
      html,
    };

    if (resumeBase64) {
      const binary = Buffer.from(resumeBase64, 'base64');
      mailOptions.attachments = [{ filename: resumeFileName, content: binary }];
    }

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send email.', details: err.message });
  }
}
