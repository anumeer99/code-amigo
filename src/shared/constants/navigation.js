import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import MailIcon from '@mui/icons-material/Mail';
import { ANCHORS } from './routes';

export const NAV_ITEMS = [
  { label: 'Home', href: ANCHORS.HOME, icon: HomeIcon },
  { label: 'Services', href: ANCHORS.SERVICES, icon: BuildIcon },
  { label: 'Work', href: ANCHORS.PORTFOLIO, icon: WorkIcon },
  { label: 'Blog', href: ANCHORS.BLOG, icon: ArticleIcon },
  { label: 'Careers', href: ANCHORS.CAREERS, icon: WorkHistoryIcon },
  { label: 'Contact', href: ANCHORS.CONTACT, icon: MailIcon },
];

export const DESKTOP_NAV = NAV_ITEMS.slice(0, -1);
export const MOBILE_NAV = NAV_ITEMS;
