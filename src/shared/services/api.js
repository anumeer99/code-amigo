import { API } from '../constants/routes';

export async function sendEmail(payload) {
  const res = await fetch(API.SEND_EMAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to send email');
  }

  return res.json();
}

export async function applyJob(payload) {
  const res = await fetch(API.APPLY_JOB, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.error || data.message || 'Failed to submit application');
    error.status = res.status;
    error.data = data;
    throw error;
  }

  return data;
}
