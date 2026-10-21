import { Box, Container, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { radialOverlay } from '../../../shared/styles/sectionStyles';
import ContactModal from '../../../shared/components/ContactModal';
import useModal from '../../../shared/hooks/useModal';
import { gradientButtonLgSx, outlinedButtonSx } from '../../../shared/styles/buttonStyles';

const FloatingShape = ({ sx, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
    style={{
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      ...sx,
    }}
  />
);

export default function HeroSection() {
  const theme = useTheme();
  const { brand, hexToRgba, colors } = theme.custom;
  const contactModal = useModal(false);

  return (
    <Box
      id="home"
      sx={{
        minHeight: ['100vh', '100svh'],
        // Top padding clears the fixed header so content never slides under it on short screens.
        pt: { xs: 13, md: 14 },
        pb: { xs: 8, md: 10 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: theme.custom.bg.sections.sage,
      }}
    >
      <Box sx={radialOverlay(brand.primary, { w: '80%', h: '60%', top: '35%', opacity: 0.12 })} />
      <Box sx={radialOverlay(brand.primaryLight, { w: '50%', h: '40%', top: '50%', opacity: 0.06 })} />
      <FloatingShape sx={{ top: '15%', left: '8%', width: 200, height: 200, background: `radial-gradient(circle, ${hexToRgba(brand.primary, 0.12)} 0%, transparent 70%)`, filter: theme.custom.glass.blurHeavy }} delay={0} />
      <FloatingShape sx={{ top: '60%', right: '10%', width: 160, height: 160, background: `radial-gradient(circle, ${hexToRgba(brand.primaryLight, 0.08)} 0%, transparent 70%)`, filter: theme.custom.glass.blurMedium }} delay={2} />
      <FloatingShape sx={{ bottom: '10%', left: '20%', width: 120, height: 120, background: `radial-gradient(circle, ${hexToRgba(brand.primary, 0.1)} 0%, transparent 70%)`, filter: theme.custom.glass.blurLight }} delay={4} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: theme.custom.easing.standard }}
        >
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              mb: 3,
              color: brand.primary,
              fontWeight: 700,
              letterSpacing: { xs: '0.1em', sm: '0.14em' },
              lineHeight: 1.8,
              fontSize: { xs: '0.75rem', md: '0.85rem' },
            }}
          >
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>AI Solutions</Box>
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' }, mx: 1 }} aria-hidden="true">·</Box>
            <Box component="span" sx={{ display: { xs: 'block', sm: 'inline' } }}>Custom Software Development</Box>
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem', lg: '5rem' },
              mb: 4,
              color: colors.textPrimary,
              textWrap: 'balance',
              // Short laptop screens: smaller headline keeps the CTA buttons above the fold.
              '@media (max-height: 760px) and (min-width: 900px)': { fontSize: '3.6rem', mb: 3 },
            }}
          >
            Turn Your Ideas Into Powerful{' '}
            <Box
              component="span"
              sx={{
                background: brand.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
              }}
            >
              Digital Products
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: colors.textSecondary,
              mb: 6,
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.7,
              fontSize: { xs: '1.05rem', md: '1.2rem' },
            }}
          >
            We help businesses build AI-powered solutions, web applications, and mobile products — from the first idea to a reliable, production-ready solution.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              justifyContent: 'center',
              '& .MuiButton-root': { width: { xs: '100%', sm: 'auto' }, maxWidth: { xs: 320, sm: 'none' } },
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={contactModal.handleOpen}
              sx={{
                ...gradientButtonLgSx,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': { transform: 'scale(1.03)' },
                '&:active': { transform: 'scale(0.98)' },
              }}
            >
              Discuss Your Project
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#portfolio"
              sx={{
                ...outlinedButtonSx(brand.primary),
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': { transform: 'scale(1.03)' },
                '&:active': { transform: 'scale(0.98)' },
              }}
            >
              Explore Our Work
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{ color: colors.textMuted, mt: 5, fontSize: { xs: '0.9rem', md: '0.95rem' } }}
          >
            Thoughtful engineering. Practical AI. Software built for real business needs.
          </Typography>
        </motion.div>
      </Container>

      <ContactModal open={contactModal.open} onClose={contactModal.handleClose} />
    </Box>
  );
}
