import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useModal from '../../../shared/hooks/useModal';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProcessSection from '../components/ProcessSection';
import OurWorkSection from '../components/OurWorkSection';
import InsightsSection from '../components/InsightsSection';
import CareersSection from '../../careers/components/CareersSection';
import CTASection from '../components/CTASection';
import AISolutionsModal from '../../../shared/components/AISolutionsModal';

const HEADER_HEIGHT = 80;

const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

export default function HomePage() {
  const location = useLocation();
  const aiModal = useModal(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('openAiModal') === 'true') {
      aiModal.handleOpen();
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => scrollToHash(location.hash), 200);
      return () => clearTimeout(timer);
    }
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const hash = anchor.getAttribute('href');
        if (hash && hash.length > 1) {
          e.preventDefault();
          scrollToHash(hash);
          window.history.pushState(null, '', hash);
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection aiModalOpen={aiModal.open} setAiModalOpen={aiModal.handleOpen} />
      <TechnologiesSection />
      <ProcessSection />
      <OurWorkSection />
      <InsightsSection />
      <CareersSection />
      <CTASection />
      <AISolutionsModal open={aiModal.open} onClose={aiModal.handleClose} />
    </>
  );
}
