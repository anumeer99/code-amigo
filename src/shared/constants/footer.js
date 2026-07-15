import { ROUTES, SERVICE_ROUTES } from './routes';
import { SOCIAL_LIST } from './company';

export const FOOTER_LINKS = {
  company: [
    { label: 'Careers', href: ROUTES.CAREERS },
    { label: 'Blog', href: '/#blog' },
  ],
  services: [
    ...SERVICE_ROUTES.map((s) => ({ label: s.label, path: s.path })),
    { label: 'AI Solutions', path: null },
  ],
  social: SOCIAL_LIST,
};
