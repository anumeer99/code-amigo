import { getTransporter, NOTIFY_EMAILS, GMAIL_USER } from './_lib/mailer.js';
import { consultationRequestTemplate } from './_lib/templates.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt } = req.body || {};

  if (!fullName || !email || !phone || !projectDetails) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const transporter = getTransporter();
    const html = consultationRequestTemplate({ fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt });

    await transporter.sendMail({
      from: `"Code Amigo Website" <${GMAIL_USER}>`,
      to: NOTIFY_EMAILS.join(', '),
      replyTo: email,
      subject: 'New Consultation Request - Code Amigo',
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send email.', details: err.message });
  }
}
