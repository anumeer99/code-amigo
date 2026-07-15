import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import { lazy, Suspense, Component, useEffect } from 'react';
import { ROUTES } from '../shared/constants/routes';
import { ThemeProvider } from '../shared/theme/ThemeContext';
import Header from '../shared/components/Header';
import Footer from '../shared/components/Footer';

const HomePage = lazy(() => import('../features/home/pages/HomePage'));
const BlogDetailPage = lazy(() => import('../features/blogs/pages/BlogDetailPage'));
const ServicePage = lazy(() => import('../features/services/pages/ServicePage'));
const CareersPage = lazy(() => import('../features/careers/pages/CareersPage'));
const JobDetailPage = lazy(() => import('../features/careers/pages/JobDetailPage'));

function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <CircularProgress size={36} />
    </Box>
  );
}

function NotFoundPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', p: 4, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>404</Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>Page not found</Typography>
      <Button variant="contained" href={ROUTES.HOME}>Go Home</Button>
    </Box>
  );
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', p: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Something went wrong</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>Please try refreshing the page.</Typography>
          <Button variant="contained" onClick={() => window.location.reload()}>Refresh</Button>
        </Box>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />
                <Route path={ROUTES.SERVICES_AI} element={<ServicePage />} />
                <Route path={ROUTES.WEB_DEVELOPMENT} element={<ServicePage />} />
                <Route path={ROUTES.MOBILE_DEVELOPMENT} element={<ServicePage />} />
                <Route path={ROUTES.UI_UX_DESIGN} element={<ServicePage />} />
                <Route path={ROUTES.QA_AUTOMATION} element={<ServicePage />} />
                <Route path={ROUTES.CLOUD_DEVOPS} element={<ServicePage />} />
                <Route path={ROUTES.CAREERS} element={<CareersPage />} />
                <Route path={ROUTES.JOB_DETAIL} element={<JobDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
