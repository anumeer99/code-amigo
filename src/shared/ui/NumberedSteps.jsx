import { Box, Typography, useTheme } from '@mui/material';

export default function NumberedSteps({ steps, color, sx }) {
  const theme = useTheme();
  const { radius, hexToRgba, fontSize } = theme.custom;
  const accentColor = color || theme.custom.brand.primary;
  const isPurple = color === 'purple';
  const stepColor = isPurple ? theme.custom.brand.purpleLight : accentColor;
  const stepBg = isPurple ? hexToRgba(theme.custom.brand.purple, 0.1) : hexToRgba(accentColor, 0.12);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, ...sx }}>
      {steps.map((step, i) => (
        <Box key={i} sx={{ display: 'flex', gap: 2.5, alignItems: 'flex-start' }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: radius.sm,
              background: stepBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              mt: 0.3,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: stepColor,
                fontWeight: 700,
                fontSize: isPurple ? fontSize.chip : fontSize.chip,
              }}
            >
              {i + 1}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ color: theme.custom.colors.textPrimary, fontSize: fontSize.bodyMd, fontWeight: 600, mb: 0.5 }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.7 }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
