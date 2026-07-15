import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/PhoneIphone';
import DesignIcon from '@mui/icons-material/Brush';
import QAIcon from '@mui/icons-material/BugReport';
import AIIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/CloudQueue';
import theme from '../../../shared/theme/theme';

export const serviceDarkMap = theme.custom.serviceDarkMap;

export const homeServices = [
  {
    icon: AIIcon,
    title: 'AI Solutions',
    description: 'Custom AI agents, machine learning models, and intelligent automation that transform how your business operates and makes decisions.',
    colorKey: 'brand.purple',
    hasModal: true,
  },
  {
    icon: WebIcon,
    title: 'Web Development',
    description: 'Modern, scalable web applications built with React, Next.js, and cutting-edge technologies that deliver exceptional user experiences.',
    colorKey: 'brand.blue',
    hasLink: true,
    link: '/services/webdevelopment',
  },
  {
    icon: MobileIcon,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that engage users with smooth, intuitive interactions.',
    colorKey: 'accent.green',
    hasLink: true,
    link: '/services/mobiledevelopment',
  },
  {
    icon: DesignIcon,
    title: 'UI/UX Design',
    description: 'User-centered design that transforms complex workflows into intuitive, beautiful interfaces your customers will love.',
    colorKey: 'accent.pink',
    hasLink: true,
    link: '/services/ui-ux-design',
  },
  {
    icon: QAIcon,
    title: 'QA & Automation',
    description: 'Comprehensive testing strategies and automated quality assurance that catch bugs before your users do.',
    colorKey: 'accent.amber',
    hasLink: true,
    link: '/services/qa-automation',
  },
  {
    icon: CloudIcon,
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices that keep your applications running smoothly.',
    colorKey: 'accent.cyan',
    hasLink: true,
    link: '/services/cloud-devops',
  },
];
