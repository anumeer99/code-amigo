import { useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { cardBaseSx } from '../styles/sectionStyles';

export default function ServiceCard({ icon: Icon, title, description, colorKey, href, onClick, sx }) {
  const theme = useTheme();
  const { accent, brand, hexToRgba, radius, transition, colors } = theme.custom;

  const colorMap = useMemo(() => ({
    'accent.green': { hex: accent.green, iconBg: hexToRgba(accent.green, 0.1) },
    'brand.blue': { hex: brand.blue, iconBg: hexToRgba(brand.blue, 0.1) },
    'brand.purple': { hex: brand.purple, iconBg: hexToRgba(brand.purple, 0.1) },
    'accent.pink': { hex: accent.pink, iconBg: hexToRgba(accent.pink, 0.1) },
    'accent.amber': { hex: accent.amber, iconBg: hexToRgba(accent.amber, 0.1) },
    'accent.cyan': { hex: accent.cyan, iconBg: hexToRgba(accent.cyan, 0.1) },
  }), [accent, brand, hexToRgba]);

  const c = colorMap[colorKey] || colorMap['brand.blue'];

  const cardSx = {
    ...cardBaseSx,
    height: '100%',
    cursor: href || onClick ? 'pointer' : 'default',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
    '&:hover': {
      borderColor: 'var(--color-border-hover)',
      background: 'var(--color-surface-card)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
      transform: 'scale(1.03) translateY(-4px)',
      '& .service-icon': {
        transform: 'scale(1.1)',
        boxShadow: `0 4px 16px ${c.iconBg}`,
      },
    },
    '&:active': { transform: 'scale(0.98)' },
    ...sx,
  };

  const content = (
    <>
      <Box
        className="service-icon"
        sx={{
          width: 56,
          height: 56,
          borderRadius: radius.xl,
          background: c.iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 3,
          transition: transition.normal,
        }}
      >
        {typeof Icon === 'string' ? (
          <Box component="span" sx={{ fontSize: 28, lineHeight: 1 }}>{Icon}</Box>
        ) : (
          <Icon sx={{ fontSize: 28, color: c.hex }} />
        )}
      </Box>
      <Typography variant="h5" sx={{ color: colors.textPrimary, mb: 1.5, fontSize: theme.custom.fontSize.h5Md }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
        {description}
      </Typography>
    </>
  );

  if (href) {
    return (
      <Box component={RouterLink} to={href} onClick={onClick} sx={{ display: 'block', textDecoration: 'none', ...cardSx }}>
        {content}
      </Box>
    );
  }

  return (
    <Box onClick={onClick} sx={cardSx}>
      {content}
    </Box>
  );
}
