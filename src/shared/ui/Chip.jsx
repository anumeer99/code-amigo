import { Chip, useTheme } from '@mui/material';

export function CategoryChip({ label, color, size = 'small', sx }) {
  const theme = useTheme();
  const { hexToRgba, radius } = theme.custom;
  const chipColor = color || theme.custom.brand.primary;

  return (
    <Chip
      label={label}
      size={size}
      sx={{
        height: size === 'small' ? 24 : 30,
        px: size === 'small' ? 1 : 1.5,
        borderRadius: radius.xs,
        fontSize: size === 'small' ? theme.custom.fontSize.xxs : theme.custom.fontSize.caption,
        fontWeight: 600,
        background: hexToRgba(chipColor, 0.12),
        color: chipColor,
        ...sx,
      }}
    />
  );
}

export function InfoChip({ label, icon, sx }) {
  const theme = useTheme();
  const { bg, border, radius } = theme.custom;

  return (
    <Chip
      label={label}
      icon={icon}
      size="small"
      sx={{
        height: 24,
        fontSize: theme.custom.fontSize.xxs,
        fontWeight: 500,
        background: bg.chip,
        color: theme.custom.colors.textSecondary,
        border: `1px solid ${border.light}`,
        borderRadius: radius.xs,
        '& .MuiChip-icon': { fontSize: 12, color: theme.custom.colors.textSecondary },
        ...sx,
      }}
    />
  );
}

export function InteractiveChip({ label, active, onClick, accentColor, icon, sx }) {
  const theme = useTheme();
  const { bg, border, radius, hexToRgba, transition } = theme.custom;
  const color = accentColor || theme.custom.brand.primary;

  return (
    <Chip
      label={label}
      icon={icon}
      onClick={onClick}
      sx={{
        height: 42,
        px: 2,
        borderRadius: radius.sm,
        fontSize: theme.custom.fontSize.chip,
        fontWeight: 500,
        background: active ? hexToRgba(color, 0.15) : bg.chip,
        border: `1px solid ${active ? hexToRgba(color, 0.4) : border.light}`,
        color: active ? theme.custom.colors.textPrimary : theme.custom.colors.textSecondary,
        transition: transition.fast,
        cursor: 'pointer',
        '&:hover': {
          background: hexToRgba(color, 0.15),
          borderColor: hexToRgba(color, 0.4),
          color: theme.custom.colors.textPrimary,
        },
        ...sx,
      }}
    />
  );
}
