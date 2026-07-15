import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/animations';

export default function SectionHeader({ label, title, description, color, mb }) {
  const theme = useTheme();
  const resolvedColor = color || theme.custom.brand.primary;

  return (
    <motion.div {...fadeInUp}>
      <Box sx={{ textAlign: 'center', mb: mb ?? { xs: 6, md: 8 } }}>
        <Typography
          variant="body2"
          sx={{
            color: resolvedColor,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            fontWeight: 600,
            mb: 2,
            fontSize: theme.custom.fontSize.label,
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            mb: 2,
            color: theme.custom.colors.textPrimary,
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            sx={{ color: theme.custom.colors.textSecondary, maxWidth: 600, mx: 'auto' }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}
