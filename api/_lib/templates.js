function formatDate(dateStr) {
  const date = dateStr ? new Date(dateStr) : new Date();
  return date.toLocaleString('en-US', {
    timeZone: 'Asia/Karachi',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function wrap(body, footerText, dateStr) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
      ${body}
      <div style="padding: 16px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">${footerText}</p>
        <p style="color: #9ca3af; margin: 4px 0 0; font-size: 12px;">${dateStr} (PKT)</p>
      </div>
    </div>`;
}

function infoRow(label, value) {
  return `
    <tr>
      <td style="padding: 10px 0; color: #6b7280; width: 130px; vertical-align: top; font-size: 14px;">${label}</td>
      <td style="padding: 10px 0; color: #111827; font-weight: 500; font-size: 14px;">${escapeHtml(value)}</td>
    </tr>`;
}

function infoRowLink(label, href, text) {
  return `
    <tr>
      <td style="padding: 10px 0; color: #6b7280; width: 130px; vertical-align: top; font-size: 14px;">${label}</td>
      <td style="padding: 10px 0; font-size: 14px;"><a href="${href}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${escapeHtml(text)}</a></td>
    </tr>`;
}

export function consultationRequestTemplate({ fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt, referenceId }) {
  const dateStr = formatDate(submittedAt);
  const content = `
    <div style="background: linear-gradient(135deg, #8F5C45 0%, #774A37 100%); padding: 32px 32px 28px; text-align: center;">
      <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Consultation Request</h1>
      <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Code Amigo Website</p>
    </div>
    <div style="padding: 28px 32px 8px;">
      <p style="color: #374151; margin: 0 0 16px; font-size: 14px; line-height: 1.6;">A new consultation request has been submitted. The complete consultation details are attached as a PDF.</p>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px 20px; margin-bottom: 20px;">
        <p style="color: #166534; margin: 0; font-size: 13px; font-weight: 600;">Reference ID: <span style="font-family: monospace; font-size: 14px;">${escapeHtml(referenceId)}</span></p>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        ${infoRow('Name', fullName)}
        ${infoRowLink('Email', `mailto:${email}`, email)}
        ${infoRow('Phone', phone)}
        ${infoRow('Country', `${country} (${countryCode})`)}
        ${infoRow('Budget', budget)}
      </table>
    </div>`;

  return wrap(content, 'Submitted via the Code Amigo website contact form.', dateStr);
}

export function jobApplicationTemplate({ jobTitle, fullName, email, phone, country, countryCode, address, resumeFileName, resumeFileSize, submittedAt }) {
  const dateStr = formatDate(submittedAt);
  const content = `
    <div style="background: linear-gradient(135deg, #8F5C45 0%, #774A37 100%); padding: 32px 32px 28px; text-align: center;">
      <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Job Application</h1>
      <p style="color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 14px;">Code Amigo Careers</p>
    </div>
    <div style="padding: 28px 32px 8px;">
      <table style="width: 100%; border-collapse: collapse;">
        ${infoRow('Position', jobTitle)}
        ${infoRow('Name', fullName)}
        ${infoRowLink('Email', `mailto:${email}`, email)}
        ${infoRow('Phone', phone)}
        ${infoRow('Country', `${country} (${countryCode})`)}
        ${infoRow('Address', address)}
        ${infoRow('Resume', `${resumeFileName} (${(resumeFileSize / 1024).toFixed(1)} KB)`)}
      </table>
    </div>`;

  return wrap(content, 'Submitted via the Code Amigo careers page.', dateStr);
}
