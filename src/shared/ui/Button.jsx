import { Button, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material';

export function PrimaryButton({ children, onClick, loading, disabled, icon, sx, ...props }) {
  const theme = useTheme();
  const { brand, bg, radius, shadow, hexToRgba } = theme.custom;

  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      disabled={disabled || loading}
      endIcon={loading ? <CircularProgress size={18} sx={{ color: theme.custom.colors.textInverse }} /> : icon || <ArrowForwardIcon />}
      sx={{
        px: 5,
        py: 1.5,
        fontSize: theme.custom.fontSize.bodyMd,
        borderRadius: radius.md,
        fontWeight: 600,
        textTransform: 'none',
        background: !disabled ? brand.gradient : hexToRgba(bg.black, 0.15),
        color: !disabled ? theme.custom.colors.textInverse : theme.custom.colors.textMuted,
        boxShadow: !disabled ? shadow.brandLight : 'none',
        '&:hover': {
          background: !disabled ? brand.gradientHover : hexToRgba(bg.black, 0.15),
          boxShadow: !disabled ? shadow.brandLightHover : 'none',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function PrimaryButtonLg({ children, onClick, loading, disabled, icon, sx, ...props }) {
  return (
    <PrimaryButton
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      icon={icon}
      sx={{ py: 1.8, borderRadius: theme => theme.custom.radius.lg, ...sx }}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
}

export function SecondaryButton({ children, onClick, accentColor, icon, sx, ...props }) {
  const theme = useTheme();
  const { brand, border, radius, hexToRgba } = theme.custom;
  const color = accentColor || brand.primary;

  return (
    <Button
      variant="outlined"
      size="large"
      onClick={onClick}
      endIcon={icon}
      sx={{
        px: 5,
        py: 1.5,
        borderColor: border.default,
        color: theme.custom.colors.textPrimary,
        borderRadius: radius.lg,
        fontWeight: 600,
        textTransform: 'none',
        '&:hover': {
          borderColor: color,
          background: hexToRgba(color, 0.08),
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function TextLink({ children, onClick, to, component, sx, ...props }) {
  const theme = useTheme();
  const { hexToRgba, brand } = theme.custom;

  return (
    <Button
      component={component}
      to={to}
      onClick={onClick}
      sx={{
        color: theme.custom.colors.textSecondary,
        textTransform: 'none',
        fontWeight: 400,
        '&:hover': {
          color: theme.custom.colors.textPrimary,
          background: hexToRgba(brand.primary, 0.06),
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
