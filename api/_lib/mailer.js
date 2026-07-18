import nodemailer from 'nodemailer';

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const NOTIFY_EMAILS = (process.env.NOTIFY_EMAILS || 'a.numeer99@gmail.com,m.rohanijaz@gmail.com').split(',').map(e => e.trim());

let _transporter;

export function getTransporter() {
  if (!_transporter) {
    if (!GMAIL_USER || !GMAIL_PASS) {
      throw new Error('GMAIL_USER and GMAIL_PASS environment variables are required.');
    }
    _transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_PASS },
    });
  }
  return _transporter;
}

export { NOTIFY_EMAILS, GMAIL_USER };
