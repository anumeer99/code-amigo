export const ROUTES = {
  HOME: '/',
  BLOG_DETAIL: '/blog/:slug',
  SERVICES_AI: '/services/ai-solutions/:slug',
  WEB_DEVELOPMENT: '/services/webdevelopment',
  MOBILE_DEVELOPMENT: '/services/mobiledevelopment',
  UI_UX_DESIGN: '/services/ui-ux-design',
  QA_AUTOMATION: '/services/qa-automation',
  CLOUD_DEVOPS: '/services/cloud-devops',
  CAREERS: '/careers',
  JOB_DETAIL: '/careers/:slug',
};

export const SERVICE_ROUTES = [
  { slug: 'webdevelopment', path: ROUTES.WEB_DEVELOPMENT, label: 'Web Development' },
  { slug: 'mobiledevelopment', path: ROUTES.MOBILE_DEVELOPMENT, label: 'Mobile Development' },
  { slug: 'ui-ux-design', path: ROUTES.UI_UX_DESIGN, label: 'UI/UX Design' },
  { slug: 'qa-automation', path: ROUTES.QA_AUTOMATION, label: 'QA & Automation' },
  { slug: 'cloud-devops', path: ROUTES.CLOUD_DEVOPS, label: 'Cloud & DevOps' },
];

export const AI_SERVICE_ROUTES = [
  { slug: 'ai-consulting', label: 'AI Consulting' },
  { slug: 'generative-ai-development', label: 'LLM & Generative AI' },
  { slug: 'ai-poc-mvp', label: 'AI Prototyping & MVPs' },
  { slug: 'agentic-ai-development', label: 'AI Agents & Autonomous Systems' },
  { slug: 'ai-automation', label: 'Business Process Automation' },
  { slug: 'ml-dl-development', label: 'Machine Learning & Deep Learning' },
];

export function aiServicePath(slug) {
  return `/services/ai-solutions/${slug}`;
}

export function jobPath(slug) {
  return `/careers/${slug}`;
}

export function blogPath(slug) {
  return `/blog/${slug}`;
}

export const ANCHORS = {
  HOME: '#home',
  SERVICES: '#services',
  PORTFOLIO: '#portfolio',
  BLOG: '#blog',
  CAREERS: '#careers',
  CONTACT: '#contact',
};

export const API = {
  SEND_EMAIL: '/api/send-email',
  APPLY_JOB: '/api/apply-job',
};
