import {
  createDocument, drawHeader, drawSectionTitle, drawInfoGrid,
  drawBlockText, drawFooter, generateReferenceId, formatDatePKT, formatTimePKT,
} from './generator.js';

export function generateConsultationPDF(data) {
  const {
    fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt,
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
    { label: 'Phone Number', value: `${countryCode ? `+${countryCode}` : ''} ${phone}`.trim() },
    { label: 'Country', value: country },
    { label: 'Budget', value: budget || 'Not specified' },
  ]);

  doc.y += 8;
  drawSectionTitle(doc, 'Project Details');
  drawBlockText(doc, projectDetails);

  drawFooter(doc);

  return { doc, referenceId, fileName: `Consultation_Request_${referenceId}.pdf` };
}
