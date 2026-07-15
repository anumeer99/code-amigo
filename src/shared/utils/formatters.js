export function formatPhone(value) {
  return value.replace(/[^0-9]/g, '');
}

export function validateField(field, value) {
  switch (field) {
    case 'fullName':
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 3) return 'Please enter at least 3 characters.';
      return '';
    case 'email':
      if (!value.trim()) return 'Email address is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
      return '';
    case 'phone':
      if (!value.trim()) return 'Phone number is required.';
      if (!/^\d{7,15}$/.test(value.trim())) return 'Please enter a valid phone number (7-15 digits).';
      return '';
    case 'projectDetails':
      if (!value.trim()) return 'Project details are required.';
      if (value.trim().length < 20) return 'Please provide at least 20 characters.';
      if (value.trim().length > 2000) return 'Please limit your message to 2,000 characters.';
      return '';
    case 'address':
      if (!value.trim()) return 'Address is required.';
      return '';
    case 'resume':
      if (!value) return 'Please upload your resume.';
      if (value.type !== 'application/pdf') return 'Only PDF files are supported.';
      if (value.size > 3 * 1024 * 1024) return 'File size must not exceed 3 MB.';
      return '';
    default:
      return '';
  }
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}

