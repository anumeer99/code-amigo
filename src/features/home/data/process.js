import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const processSteps = [
  {
    number: 1,
    icon: SearchIcon,
    title: 'Discovery & Strategy',
    description: 'We analyze your business goals, user needs, and technical requirements to create a roadmap that aligns technology with your vision.',
    color: 'brand.blue',
  },
  {
    number: 2,
    icon: AccountTreeIcon,
    title: 'Architecture & Planning',
    description: 'Our architects design scalable, maintainable systems with clear technical specifications and milestone-based project plans.',
    color: 'accent.green',
  },
  {
    number: 3,
    icon: DesignServicesIcon,
    title: 'UI/UX Design',
    description: 'We craft intuitive, beautiful interfaces through user research, wireframing, prototyping, and iterative design sprints.',
    color: 'accent.pink',
  },
  {
    number: 4,
    icon: CodeIcon,
    title: 'Development',
    description: 'Agile development with clean, well-documented code. Regular demos and transparent communication keep you in the loop.',
    color: 'brand.purple',
  },
  {
    number: 5,
    icon: BugReportIcon,
    title: 'Quality Assurance',
    description: 'Rigorous testing \u2014 unit, integration, performance, and security \u2014 ensures your product works flawlessly across all scenarios.',
    color: 'accent.amber',
  },
  {
    number: 6,
    icon: RocketLaunchIcon,
    title: 'Deployment & Launch',
    description: 'Zero-downtime deployments, infrastructure optimization, and comprehensive monitoring for a smooth, reliable launch.',
    color: 'accent.cyan',
  },
  {
    number: 7,
    icon: SupportAgentIcon,
    title: 'Support & Evolution',
    description: 'Post-launch support, performance monitoring, and continuous improvements keep your product ahead of the curve.',
    color: 'accent.green',
  },
];
