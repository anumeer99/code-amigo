import { getTransporter, NOTIFY_EMAILS, GMAIL_USER } from './_lib/mailer.js';
import { consultationRequestTemplate } from './_lib/templates.js';
import { generateConsultationPDF } from './_lib/pdf/index.js';

function collectBuffer(doc) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);
    doc.end();
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt } = req.body || {};

  if (!fullName || !email || !phone || !projectDetails) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const { doc, referenceId, fileName } = generateConsultationPDF({
      fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt,
    });

    const pdfBuffer = await collectBuffer(doc);

    const transporter = getTransporter();
    const html = consultationRequestTemplate({ fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt, referenceId });

    await transporter.sendMail({
      from: `"Code Amigo Website" <${GMAIL_USER}>`,
      to: NOTIFY_EMAILS.join(', '),
      replyTo: email,
      subject: `New Consultation Request - ${referenceId} - Code Amigo`,
      html,
      attachments: [
        { filename: fileName, content: pdfBuffer, contentType: 'application/pdf' },
      ],
    });

    return res.status(200).json({ success: true, referenceId });
  } catch (err) {
    console.error('Email send error:', err);
    return res.status(500).json({ error: 'Failed to send email.', details: err.message });
  }
}
