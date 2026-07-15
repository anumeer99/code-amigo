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

function row(label, value) {
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #B0B8C5; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #fff; font-weight: 600;">${value}</td>
    </tr>`;
}

function rowNoBorder(label, value) {
  return `
    <tr>
      <td style="padding: 12px 0; color: #B0B8C5; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 12px 0; color: #fff; font-weight: 600; white-space: pre-wrap;">${value}</td>
    </tr>`;
}

function rowLink(label, href, text) {
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #B0B8C5; width: 140px; vertical-align: top;">${label}</td>
      <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #fff; font-weight: 600;"><a href="${href}" style="color: #3B82F6; text-decoration: none;">${text}</a></td>
    </tr>`;
}

function wrap(body, footerText, dateStr) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #121826; color: #fff; border-radius: 16px; overflow: hidden;">
      ${body}
      <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.04); border-radius: 12px; text-align: center;">
        <p style="color: #B0B8C5; margin: 0; font-size: 13px;">Submitted on ${dateStr} (PKT)</p>
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 20px 32px; text-align: center;">
        <p style="color: #B0B8C5; margin: 0; font-size: 12px;">${footerText}</p>
      </div>
    </div>`;
}

function consultationRequestTemplate({ fullName, email, phone, country, countryCode, budget, projectDetails, submittedAt }) {
  const dateStr = formatDate(submittedAt);
  const content = `
    <div style="background: linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%); padding: 32px; text-align: center;">
      <h1 style="color: #fff; margin: 0; font-size: 24px;">New Consultation Request</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Code Amigo Website</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        ${row('Full Name', fullName)}
        ${rowLink('Email', `mailto:${email}`, email)}
        ${row('Phone', phone)}
        ${row('Country', `${country} (${countryCode})`)}
        ${row('Budget', budget)}
        ${rowNoBorder('Project Details', projectDetails)}
      </table>
    </div>`;

  return wrap(content, 'This consultation request was submitted via the Code Amigo website contact form.', dateStr);
}

function jobApplicationTemplate({ jobTitle, fullName, email, phone, country, countryCode, address, resumeFileName, resumeFileSize, submittedAt }) {
  const dateStr = formatDate(submittedAt);
  const content = `
    <div style="background: linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%); padding: 32px; text-align: center;">
      <h1 style="color: #fff; margin: 0; font-size: 24px;">New Job Application</h1>
      <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Code Amigo Careers</p>
    </div>
    <div style="padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        ${row('Position', jobTitle)}
        ${row('Full Name', fullName)}
        ${rowLink('Email', `mailto:${email}`, email)}
        ${row('Phone', phone)}
        ${row('Country', `${country} (${countryCode})`)}
        ${row('Address', address)}
        ${row('Resume', `${resumeFileName} (${(resumeFileSize / 1024).toFixed(1)} KB)`)}
      </table>
    </div>`;

  return wrap(content, 'This application was submitted via the Code Amigo careers page.', dateStr);
}

export { consultationRequestTemplate, jobApplicationTemplate };
