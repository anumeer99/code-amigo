import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';
import { fadeInUp } from '../animations/animations';
import { pageCTASx, radialOverlay } from '../styles/sectionStyles';
import { gradientButtonSx } from '../styles/buttonStyles';

export default function PageCTA({ title, subtitle, buttonText = 'Get a Free Consultation', onClick, sx }) {
  const theme = useTheme();
  const { brand } = theme.custom;

  return (
    <Box sx={{ ...pageCTASx, ...sx }}>
      <Box sx={radialOverlay(brand.primary, { top: '50%', opacity: 0.08 })} />
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeInUp}>
          <Typography
            variant="h3"
            sx={{ color: theme.custom.colors.textPrimary, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, mb: 4 }}>
            {subtitle}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={onClick}
            endIcon={<ArrowForwardIcon />}
            sx={gradientButtonSx}
          >
            {buttonText}
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
