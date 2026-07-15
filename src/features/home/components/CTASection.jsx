import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../shared/animations/animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ContactModal from '../../../shared/components/ContactModal';
import useModal from '../../../shared/hooks/useModal';
import { radialOverlay, gradientDividerSx } from '../../../shared/styles/sectionStyles';
import { gradientButtonLgSx } from '../../../shared/styles/buttonStyles';
import { ctaTrustBadges } from '../data/homePage';

export default function CTASection() {
  const theme = useTheme();
  const { brand, accent, hexToRgba, radius, shadow, border, bg } = theme.custom;
  const modal = useModal();

  return (
    <>
      <Box
        id="contact"
        sx={{
          py: { xs: 10, md: 14 },
          position: 'relative',
          overflow: 'hidden',
          background: bg.sections.sage,
        }}
      >
        <Box sx={radialOverlay(brand.primary, { w: '80%', h: '60%', top: '40%', opacity: 0.1 })} />
        <Box sx={radialOverlay(brand.primaryLight, { w: '60%', h: '50%', top: '50%', opacity: 0.05 })} />
        <Box sx={gradientDividerSx} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: radius.xxl,
                  background: brand.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  boxShadow: shadow.brandLight,
                }}
              >
                <RocketLaunchIcon sx={{ fontSize: 36, color: theme.custom.colors.textInverse }} />
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 3,
                  color: theme.custom.colors.textPrimary,
                  lineHeight: 1.2,
                }}
              >
                Ready to Build{' '}
                <Box
                  component="span"
                  sx={{
                    background: brand.gradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Something Great
                </Box>
                ?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: theme.custom.colors.textSecondary,
                  maxWidth: 520,
                  mx: 'auto',
                  mb: 5,
                  fontSize: theme.custom.fontSize.h6Sm,
                }}
              >
                Let's discuss your project and discover how Code Amigo can bring your vision to life
                with cutting-edge technology and expert engineering.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    onClick={modal.handleOpen}
                    sx={gradientButtonLgSx}
                  >
                    Get a Free Consultation
                  </Button>
                </motion.div>
              </Box>

              <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                {ctaTrustBadges.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: radius.full, background: accent.success }} />
                    <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.chip }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <ContactModal open={modal.open} onClose={modal.handleClose} />
    </>
  );
}
