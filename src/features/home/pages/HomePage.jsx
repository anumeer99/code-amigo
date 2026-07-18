import { useEffect, useRef } from 'react';
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

function smoothScrollToHash(hash) {
  if (!hash) return false;
  const el = document.querySelector(hash);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  return true;
}

function pollForHash(hash, maxWait = 5000) {
  let cancelled = false;
  let raf;

  const tryScroll = () => {
    if (cancelled) return true;
    if (smoothScrollToHash(hash)) return true;
    return false;
  };

  if (tryScroll()) return () => { cancelled = true; };

  const start = Date.now();
  const tick = () => {
    if (tryScroll() || Date.now() - start > maxWait) return;
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}

export default function HomePage() {
  const location = useLocation();
  const aiModal = useModal(false);
  const initialHashScrolled = useRef(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('openAiModal') === 'true') {
      aiModal.handleOpen();
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location.search, location.pathname]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    return pollForHash(hash);
  }, []);

  useEffect(() => {
    if (!initialHashScrolled.current) {
      initialHashScrolled.current = true;
      return;
    }
    if (location.hash) {
      return pollForHash(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const hash = anchor.getAttribute('href');
        if (hash && hash.length > 1) {
          e.preventDefault();
          smoothScrollToHash(hash);
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
