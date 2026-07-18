const API_BASE = '/api';

export async function sendEmail(payload) {
  const { fullName, email, phone, dial, country, countryCode, budget, projectDetails, submittedAt } = payload;

  const res = await fetch(`${API_BASE}/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      dial: dial || '',
      country: country || '',
      countryCode: countryCode || '',
      budget: budget || 'Not specified',
      projectDetails: projectDetails.trim(),
      submittedAt: submittedAt || new Date().toISOString(),
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    console.error('sendEmail error:', data);
    throw new Error(data?.error || 'Failed to send message. Please try again.');
  }

  return data;
}

export async function applyJob(payload) {
  const {
    jobTitle, fullName, email, phone,
    country, countryCode, address, resumeFileName,
    resumeFileSize, resumeBase64, submittedAt,
  } = payload;

  const res = await fetch(`${API_BASE}/apply-job`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jobTitle: jobTitle || '',
      fullName: fullName.trim(),
      email: email.trim(),
      phone: `${countryCode || ''} ${phone}`.trim(),
      country: country || '',
      countryCode: countryCode || '',
      address: address || '',
      resumeFileName: resumeFileName || '',
      resumeFileSize: resumeFileSize || 0,
      resumeBase64: resumeBase64 || '',
      submittedAt: submittedAt || new Date().toISOString(),
    }),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    console.error('applyJob error:', data);
    const error = new Error(data?.error || 'Failed to submit application. Please try again.');
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}
