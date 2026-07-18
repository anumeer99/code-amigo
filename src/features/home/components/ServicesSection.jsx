import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import SectionHeader from '../../../shared/components/SectionHeader';
import ServiceCard from '../../../shared/components/ServiceCard';
import { ROUTES } from '../../../shared/constants/routes';
import { sectionWrapperSx, gradientDividerSx } from '../../../shared/styles/sectionStyles';
import { homeServices } from '../data/homeServices';

const routeMap = {
  '/services/webdevelopment': ROUTES.WEB_DEVELOPMENT,
  '/services/mobiledevelopment': ROUTES.MOBILE_DEVELOPMENT,
  '/services/ui-ux-design': ROUTES.UI_UX_DESIGN,
  '/services/qa-automation': ROUTES.QA_AUTOMATION,
  '/services/cloud-devops': ROUTES.CLOUD_DEVOPS,
};

const services = homeServices.map((s) => ({
  ...s,
  link: s.link ? routeMap[s.link] || s.link : undefined,
}));

export default function ServicesSection({ aiModalOpen, setAiModalOpen }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { brand, bg } = theme.custom;
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-50px' });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setEntered(true), 700);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleServiceClick = (service) => {
    if (service.hasModal) {
      setAiModalOpen(true);
    } else if (service.hasLink) {
      navigate(service.link);
    }
  };

  return (
    <>
      <Box id="services" sx={{ ...sectionWrapperSx, background: bg.sections.warm }}>
        <Box sx={gradientDividerSx} />

        <Container maxWidth="xl">
          <SectionHeader
            label="Our Services"
            title="Solutions We Deliver"
            description="End-to-end software engineering services tailored to your business needs"
            color={brand.primary}
          />

          <Box ref={gridRef} sx={{ overflow: 'visible', pt: 1 }}>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                  <Grid item xs={12} sm={6} lg={4} key={service.title}>
                    <Box
                      sx={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                        transition: entered
                          ? 'none'
                          : `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
                      }}
                    >
                      <ServiceCard
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        colorKey={service.colorKey}
                        onClick={() => handleServiceClick(service)}
                      />
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
