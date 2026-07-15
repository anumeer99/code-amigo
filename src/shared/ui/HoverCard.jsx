import { Box, useTheme } from '@mui/material';
import { cardBaseSx, cardHoverSx } from '../styles/sectionStyles';

export default function HoverCard({ children, hoverColor, sx, ...props }) {
  const theme = useTheme();
  const color = hoverColor || theme.custom.brand.primary;

  return (
    <Box
      sx={{
        ...cardBaseSx,
        ...cardHoverSx(color),
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
