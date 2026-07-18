import {
  createDocument, drawHeader, drawSectionTitle, drawInfoGrid,
  drawBlockText, drawFooter, generateReferenceId, formatDatePKT, formatTimePKT,
} from './generator.js';

function sanitizeFileName(name) {
  if (!name || !name.trim()) return null;
  return name
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/[^a-zA-Z0-9\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF\u0980-\u09FF\u1E00-\u1EFF ']/g, '')
    .trim();
}

export function generateConsultationPDF(data) {
  const {
    fullName, email, phone, dial, country, countryCode, budget, projectDetails, submittedAt,
  } = data;

  const referenceId = generateReferenceId();
  const dateStr = formatDatePKT(submittedAt);
  const timeStr = formatTimePKT(submittedAt);

  const doc = createDocument({ title: `Consultation Request - ${referenceId}` });

  drawHeader(doc, {
    title: 'Consultation Request',
    subtitle: 'Code Amigo Website',
  });

  drawSectionTitle(doc, 'Submission Information');
  drawInfoGrid(doc, [
    { label: 'Submission Date', value: dateStr },
    { label: 'Time', value: `${timeStr} (PKT)` },
    { label: 'Reference ID', value: referenceId },
  ]);

  doc.y += 8;
  drawSectionTitle(doc, 'Client Information');
  drawInfoGrid(doc, [
    { label: 'Full Name', value: fullName },
    { label: 'Email Address', value: email },
    { label: 'Phone Number', value: phone ? `${dial || ''} ${phone}`.trim() : '—' },
    { label: 'Country', value: country },
    { label: 'Budget', value: budget || 'Not specified' },
  ]);

  doc.y += 8;
  drawSectionTitle(doc, 'Project Details');
  drawBlockText(doc, projectDetails);

  drawFooter(doc);

  const safeName = sanitizeFileName(fullName);
  const fileName = safeName ? `${safeName} Consultation Request.pdf` : 'Consultation Request.pdf';

  return { doc, referenceId, fileName };
}
