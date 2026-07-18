import { useState, useMemo, useCallback } from 'react';
import { useParams, useLocation, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Chip, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { scrollToTop } from '../../../shared/utils/formatters';
import { getServiceBySlug, getRelatedServices, aiServices } from '../data/services';
import { fadeInUp, hoverScale } from '../../../shared/animations/animations';
import ContactModal from '../../../shared/components/ContactModal';
import ServiceCard from '../../../shared/components/ServiceCard';
import { ROUTES, aiServicePath } from '../../../shared/constants/routes';
import { minHeightPageSx, pageHeroSx, subSectionHeadingSx, radialOverlay, cardBaseSx, cardHoverSx, relatedSectionSx } from '../../../shared/styles/sectionStyles';
import { PrimaryButton } from '../../../shared/ui/Button';
import BackLink from '../../../shared/ui/BackLink';
import NumberedSteps from '../../../shared/ui/NumberedSteps';
import FAQAccordion from '../../../shared/ui/FAQAccordion';
import PageCTA from '../../../shared/ui/PageCTA';
import { CategoryChip } from '../../../shared/ui/Chip';
import { ACCENT_TOKENS, CARD_ICONS, SECTION_LABELS } from '../data/serviceConfig';

const DEFAULT_LABELS = { approach: 'Our Approach', features: 'Key Features', faqs: 'Frequently Asked Questions' };

export default function ServicePage() {
  const theme = useTheme();
  const { brand, accent: accentTokens, bg, border, radius, shadow, transition, hexToRgba } = theme.custom;
  const textPrimary = theme.custom.colors.textPrimary;
  const bgDefault = theme.custom.bg.primary;

  const { slug: aiSlug } = useParams();
  const location = useLocation();
  const slug = useMemo(() => {
    if (aiSlug) return aiSlug;
    const parts = location.pathname.split('/');
    return parts[parts.length - 1];
  }, [aiSlug, location.pathname]);
  const service = useMemo(() => getServiceBySlug(slug), [slug]);
  const relatedServices = useMemo(() => getRelatedServices(slug, 3), [slug]);
  const [modalOpen, setModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(-1);

  const accentPath = ACCENT_TOKENS[slug] || 'brand.blue';
  const [accentGroup, accentKey] = accentPath.split('.');
  const accent = theme.custom[accentGroup]?.[accentKey] ?? brand.blue;
  const labels = SECTION_LABELS[slug] || DEFAULT_LABELS;
  const ctaTitle = labels.cta || 'Ready to build your solution?';

  const isAiService = useCallback(
    (s) => aiServices.some((ai) => ai.slug === s.slug),
    [],
  );

  if (!service) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bgDefault }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: textPrimary, mb: 2 }}>404</Typography>
          <Typography variant="h5" sx={{ color: theme.custom.colors.textSecondary, mb: 4 }}>Service not found</Typography>
          <Button variant="contained" component={RouterLink} to={ROUTES.HOME}>
            Back to Home
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={minHeightPageSx}>
      {/* Hero */}
      <Box sx={pageHeroSx}>
        <Box sx={radialOverlay(accent)} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <BackLink to="/#services" label="Back to Services" />

            <Box sx={{ mb: 2 }}>
              <CategoryChip label={service.heroBadge} color={accent} sx={{ height: 30, px: 1.5 }} />
            </Box>

            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' }, color: textPrimary, mb: 3, lineHeight: 1.2 }}>
              {service.heroTitle}
            </Typography>

            <Typography variant="h6" sx={{ color: theme.custom.colors.textSecondary, mb: 4, fontWeight: 400, lineHeight: 1.6, maxWidth: 650 }}>
              {service.heroIntro}
            </Typography>

            <PrimaryButton onClick={() => setModalOpen(true)}>Get a Free Consultation</PrimaryButton>
          </motion.div>
        </Container>
      </Box>

      {/* Overview */}
      <Container maxWidth="md" sx={{ pb: 4 }}>
        <motion.div {...fadeInUp}>
          <Typography variant="h2" sx={subSectionHeadingSx}>Overview</Typography>
          <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.8, fontSize: theme.custom.fontSize.bodyXl, mb: 3 }}>
            {service.overview}
          </Typography>
        </motion.div>
      </Container>

      {/* Approach */}
      {service.approach?.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 8 }, background: theme.custom.bg.sections.warm }}>
          <Container maxWidth="md">
            <motion.div {...fadeInUp}>
              <Typography variant="h2" sx={subSectionHeadingSx}>{labels.approach}</Typography>
              <NumberedSteps steps={service.approach} color={accent} />
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Features */}
      {service.features?.length > 0 && (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>{labels.features}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {service.features.map((feature, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 2, borderRadius: radius.sm, border: `1px solid ${border.light}`, background: bgDefault }}>
                  <CheckCircleOutlineIcon sx={{ color: accentTokens.green, fontSize: '1.1rem', mt: 0.3, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.body, lineHeight: 1.5 }}>{feature}</Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Container>
      )}

      {/* Benefits */}
      {service.benefits?.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 8 }, background: theme.custom.bg.sections.sage }}>
          <Container maxWidth="md">
            <motion.div {...fadeInUp}>
              <Typography variant="h2" sx={subSectionHeadingSx}>Business Benefits</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                {service.benefits.map((benefit, i) => (
                  <motion.div key={i} {...hoverScale}>
                    <Box sx={{ ...cardBaseSx, ...cardHoverSx(accent), backdropFilter: theme.custom.glass.blurLight, height: '100%', cursor: 'default' }}>
                      <Typography variant="h6" sx={{ color: textPrimary, fontSize: theme.custom.fontSize.bodyLg, fontWeight: 600, mb: 1 }}>{benefit.title}</Typography>
                      <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.chip, lineHeight: 1.6 }}>{benefit.description}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* Industries */}
      {service.industries?.length > 0 && (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>Industries We Serve</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {service.industries.map((industry) => (
                <motion.div key={industry} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Chip
                    label={industry}
                    sx={{
                      height: 42, px: 2, borderRadius: radius.sm, fontSize: theme.custom.fontSize.chip, fontWeight: 500,
                      background: bg.chip, border: `1px solid ${border.light}`, color: theme.custom.colors.textSecondary,
                      transition: transition.fast, cursor: 'default',
                      '&:hover': { background: hexToRgba(accent, 0.12), borderColor: hexToRgba(accent, 0.35), color: textPrimary },
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      )}

      {/* Tech Stack */}
      {service.techStack?.length > 0 && (
        <Box sx={{ py: { xs: 6, md: 8 }, background: theme.custom.bg.sections.sand }}>
          <Container maxWidth="md">
            <motion.div {...fadeInUp}>
              <Typography variant="h2" sx={subSectionHeadingSx}>Technology Stack</Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, gap: 2 }}>
                {service.techStack.map((tech) => (
                  <motion.div key={tech} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Box
                      sx={{
                        py: 2, px: 1.5, borderRadius: radius.sm, border: `1px solid ${border.light}`,
                        background: bg.chip, textAlign: 'center', transition: transition.fast, cursor: 'default',
                        '&:hover': { background: hexToRgba(accent, 0.12), borderColor: hexToRgba(accent, 0.35), color: textPrimary, '& .tech-label': { color: textPrimary } },
                      }}
                    >
                      <Typography className="tech-label" variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontWeight: 500, fontSize: theme.custom.fontSize.chip, transition: transition.color }}>{tech}</Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>
      )}

      {/* FAQs */}
      {service.faqs?.length > 0 && (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 8 } }}>
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>{labels.faqs}</Typography>
            <FAQAccordion items={service.faqs} expanded={expandedFaq} onToggle={setExpandedFaq} />
          </motion.div>
        </Container>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Box sx={relatedSectionSx}>
          <Container maxWidth="xl">
            <motion.div {...fadeInUp}>
              <Typography variant="h3" sx={{ color: textPrimary, mb: 5, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}>Related Services</Typography>
            </motion.div>
            <Grid container spacing={3}>
              {relatedServices.map((item) => (
                <Grid item xs={12} sm={6} lg={4} key={item.slug}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <ServiceCard
                      icon={CARD_ICONS[item.slug]}
                      title={item.heroTitle}
                      description={item.description}
                      colorKey={ACCENT_TOKENS[item.slug]}
                      href={isAiService(item) ? aiServicePath(item.slug) : `/services/${item.slug}`}
                      onClick={() => scrollToTop()}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* CTA */}
      <PageCTA title={ctaTitle} subtitle="Get in touch with our team to discuss your project and discover how we can help." buttonText="Get a Free Consultation" onClick={() => setModalOpen(true)} />

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
}
