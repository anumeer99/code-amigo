import { Box, useTheme } from '@mui/material';

export default function LogoIcon({ size = 40, fontSize = '1.1rem', showText = false, sx }) {
  const theme = useTheme();
  const { brand, radius } = theme.custom;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ...sx }}>
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: radius.md,
          background: brand.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize,
          color: theme.custom.colors.textInverse,
          flexShrink: 0,
        }}
      >
        CA
      </Box>
      {showText && (
        <Box
          component="span"
          sx={{
            fontSize: '1.3rem',
            fontWeight: 700,
            color: theme.custom.colors.textPrimary,
            letterSpacing: '-0.02em',
          }}
        >
          Code Amigo
        </Box>
      )}
    </Box>
  );
}
