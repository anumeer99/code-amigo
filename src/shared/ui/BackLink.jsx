import { Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';

export default function BackLink({ to, label = 'Back', sx }) {
  const theme = useTheme();
  const { hexToRgba, brand } = theme.custom;

  return (
    <Button
      component={RouterLink}
      to={to}
      startIcon={<ArrowBackIcon />}
      sx={{
        color: theme.custom.colors.textSecondary,
        mb: 5,
        textTransform: 'none',
        fontWeight: 400,
        '&:hover': {
          color: theme.custom.colors.textPrimary,
          background: hexToRgba(brand.primary, 0.06),
        },
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}
