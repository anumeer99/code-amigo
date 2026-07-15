import { Box, Container, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { radialOverlay } from '../../../shared/styles/sectionStyles';
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

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
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
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem', lg: '5rem' },
              mb: 4,
              color: colors.textPrimary,
            }}
          >
            We Build{' '}
            <Box
              component="span"
              sx={{
                background: brand.gradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Digital Products
            </Box>
            {' '}That Scale
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
            We craft software with clean code, thoughtful design, and long-term vision, engineered to grow with your business, not against it.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                ...gradientButtonLgSx,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': { transform: 'scale(1.03)' },
                '&:active': { transform: 'scale(0.98)' },
              }}
            >
              Get Started
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
              View Our Work
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
