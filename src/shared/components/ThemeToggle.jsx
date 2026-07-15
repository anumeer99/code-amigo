import { Box, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeMode } from '../theme/ThemeContext';

function SunIcon({ sx }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={sx}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ sx }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={sx}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const theme = useTheme();
  const isDark = mode === 'dark';
  const { bg, brand, colors } = theme.custom;
  const hexToRgba = theme.custom.hexToRgba;

  return (
    <Box
      component="button"
      onClick={toggleMode}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      sx={{
        position: 'relative',
        width: 48,
        height: 48,
        minWidth: 48,
        minHeight: 48,
        borderRadius: '12px',
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        transition: 'background 0.2s ease',
        '&:hover': {
          background: hexToRgba(brand.primary, 0.08),
        },
        '&:focus-visible': {
          boxShadow: `0 0 0 2px ${bg.card}, 0 0 0 4px ${brand.primary}`,
        },
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isDark ? colors.textPrimary : colors.textPrimary,
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
