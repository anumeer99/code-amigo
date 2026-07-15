import { createTheme } from '@mui/material/styles';

function hexToRgba(hex, alpha = 1) {
  if (hex.startsWith('rgba')) return hex.replace(/[\d.]+\)$/, `${alpha})`);
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function sectionGradient(from, to) {
  return `linear-gradient(180deg, ${from} 0%, ${to} 100%)`;
}

const PALETTE = {
  dark: {
    BG: '#0F1218',
    CARD: '#1A1F28',
    HEADING: '#E8E4E0',
    TEXT: '#B0AAA3',
    TEXT_MUTED: '#6E6963',
    TEXT_HELPER: '#8A847D',
    BORDER: '#2A2F38',
    LIGHT_ACCENT: '#2A2220',
    FOOTER_BG: '#0A0D12',
    INPUT: '#1E232D',
    TEXT_INVERSE: '#0F1218',
    SECTIONS: {
      sage: '#12161E', warm: '#161B24', sand: '#141920',
      blue: '#131820', lavender: '#151A22', teal: '#11161C',
    },
    GLASS_BACKDROP: 'rgba(0,0,0,0.5)',
    GLASS_SHADOW: '0 8px 32px rgba(0,0,0,0.3)',
    FOOTER_TEXT: '#D0CCC8',
    FOOTER_MUTED: '#7A756F',
    FOOTER_HOVER: '#E8E4E0',
    FOOTER_BORDER: 'rgba(255,255,255,0.06)',
    FOOTER_BORDER_LIGHT: 'rgba(255,255,255,0.08)',
    FOOTER_BORDER_MED: 'rgba(255,255,255,0.12)',
    FOOTER_BORDER_HOVER: 'rgba(255,255,255,0.2)',
    FOOTER_INPUT: 'rgba(255,255,255,0.04)',
    FOOTER_ICON: 'rgba(255,255,255,0.08)',
    SHADOW_BASE: [0, 0, 0],
  },
  light: {
    BG: '#F5F4F0',
    CARD: '#FFFFFF',
    SURFACE: '#FCFBF9',
    HEADING: '#2E3833',
    TEXT: '#5F6D67',
    TEXT_MUTED: '#88958F',
    TEXT_HELPER: '#949E98',
    BORDER: '#E5E2DA',
    LIGHT_ACCENT: '#DCEEE6',
    FOOTER_BG: '#2E3833',
    INPUT: '#FAFAF8',
    TEXT_INVERSE: '#FFFFFF',
    SECTIONS: {
      sage: '#F5F4F0', warm: '#EEEEE9', sand: '#F0EFEB',
      blue: '#EFF2F0', lavender: '#F2F0F1', teal: '#EDF2EF',
    },
    GLASS_BACKDROP: 'rgba(255,255,255,0.85)',
    GLASS_SHADOW: '0 8px 32px rgba(46,56,51,0.06)',
    FOOTER_TEXT: '#E8EEE7',
    FOOTER_MUTED: '#A0ADA6',
    FOOTER_HOVER: '#F5F4F0',
    FOOTER_BORDER: 'rgba(255,255,255,0.08)',
    FOOTER_BORDER_LIGHT: 'rgba(255,255,255,0.12)',
    FOOTER_BORDER_MED: 'rgba(255,255,255,0.18)',
    FOOTER_BORDER_HOVER: 'rgba(255,255,255,0.3)',
    FOOTER_INPUT: 'rgba(255,255,255,0.08)',
    FOOTER_ICON: 'rgba(255,255,255,0.1)',
    SHADOW_BASE: [46, 56, 51],
  },
};

const ACCENTS = {
  dark: {
    PRIMARY: '#8F5C45',
    PRIMARY_DARK: '#774A37',
    PRIMARY_LIGHT: '#A87A65',
    PRIMARY_MUTED: '#BFA08A',
    SUCCESS: '#5A9A70',
    ERROR: '#BF5B5B',
    SECONDARY_ACCENT: '#7E9C84',
    SVG: {
      blue: { base: '#8F5C45', light: '#A87A65', lighter: '#2A2220' },
      cyan: { base: '#7E9C84', light: '#96B49C' },
      purple: { base: '#8E7E8A', light: '#AAA0A8', mid: '#8E7E8A' },
      amber: { base: '#C4A84A', light: '#D8C480' },
      pink: { base: '#C08585', light: '#D4A5A5' },
      green: { base: '#5A9A70', light: '#74B088', lighter: '#A0D0B0' },
      orange: { base: '#C49058', light: '#D4AA80', lighter: '#E4C8A8' },
      error: { base: '#BF5B5B', light: '#D48080', lighter: '#E4A0A0' },
    },
  },
  light: {
    PRIMARY: '#3F7D6B',
    PRIMARY_DARK: '#33685A',
    PRIMARY_LIGHT: '#DCEEE6',
    PRIMARY_MUTED: '#90BFB0',
    SUCCESS: '#4EAA78',
    ERROR: '#C96565',
    SECONDARY_ACCENT: '#5C9A88',
    SVG: {
      blue: { base: '#3F7D6B', light: '#5A9A86', lighter: '#DCEEE6' },
      cyan: { base: '#5C9A88', light: '#7AB4A4' },
      purple: { base: '#7A887F', light: '#98A89E', mid: '#7A887F' },
      amber: { base: '#C4A84A', light: '#D8C480' },
      pink: { base: '#C96565', light: '#D88888' },
      green: { base: '#4EAA78', light: '#6EC092', lighter: '#A0D8B8' },
      orange: { base: '#B8905A', light: '#D0AA78', lighter: '#E0C8A8' },
      error: { base: '#C96565', light: '#D88888', lighter: '#E4A8A8' },
    },
  },
};

export function createAppTheme(mode = 'dark') {
  const p = PALETTE[mode];
  const a = ACCENTS[mode];
  const [sr, sg, sb] = p.SHADOW_BASE;
  const { PRIMARY, PRIMARY_DARK, PRIMARY_LIGHT, PRIMARY_MUTED, SUCCESS, ERROR, SECONDARY_ACCENT } = a;

  return createTheme({
    palette: {
      mode,
      primary: { main: PRIMARY, light: PRIMARY_LIGHT, dark: PRIMARY_DARK, contrastText: '#FFFFFF' },
      secondary: { main: PRIMARY_DARK, light: PRIMARY_MUTED, dark: mode === 'dark' ? '#5C3A2B' : '#1B4E4C' },
      background: { default: p.BG, paper: p.CARD },
      text: { primary: p.HEADING, secondary: p.TEXT, disabled: p.TEXT_MUTED },
      divider: p.BORDER,
      error: { main: ERROR },
      warning: { main: '#C4A84A' },
      success: { main: SUCCESS },
      info: { main: SECONDARY_ACCENT },
    },

    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 },
      h2: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 },
      h3: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 },
      h4: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 600, letterSpacing: '-0.01em' },
      h5: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Manrope", "Poppins", "Inter", sans-serif', fontWeight: 600 },
      body1: { lineHeight: 1.7, fontSize: '1.05rem', color: p.TEXT },
      body2: { lineHeight: 1.7, color: p.TEXT },
      button: { textTransform: 'none', fontWeight: 600 },
    },

    shape: { borderRadius: 14 },

    custom: {
      hexToRgba,
      mode,

      brand: {
        primary: PRIMARY, primaryDark: PRIMARY_DARK, primaryLight: PRIMARY_LIGHT,
        blue: PRIMARY, blueDark: PRIMARY_DARK, blueLight: PRIMARY_LIGHT,
        purple: mode === 'dark' ? '#8E7E8A' : '#7A7A8D',
        purpleDark: mode === 'dark' ? '#7A6B76' : '#65657A',
        purpleLight: mode === 'dark' ? '#A89AA4' : '#9A9AAD',
        gradient: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
        gradientHover: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${mode === 'dark' ? '#5C3A2B' : '#1B4E4C'} 100%)`,
        accentGradient: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_LIGHT} 100%)`,
        accentGradientHover: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 100%)`,
      },

      accent: {
        green: SUCCESS, greenDark: mode === 'dark' ? '#4A8860' : '#3E8A60',
        cyan: SECONDARY_ACCENT, cyanDark: mode === 'dark' ? '#6B8A72' : '#4A7876',
        pink: mode === 'dark' ? '#C08585' : '#C35C5C', pinkDark: mode === 'dark' ? '#A56E6E' : '#A84848',
        amber: '#C4A84A', amberDark: '#AD933E',
        violet: mode === 'dark' ? '#8582A5' : '#7A7A8D', violetDark: mode === 'dark' ? '#6E6C90' : '#65657A',
        orange: mode === 'dark' ? '#C49058' : '#B88050', orangeDark: mode === 'dark' ? '#A87A48' : '#9A6A40',
        error: ERROR, success: SUCCESS, info: SECONDARY_ACCENT, disabled: p.TEXT_MUTED,
      },

      bg: {
        primary: p.BG, card: p.CARD, light: p.SURFACE || p.CARD, chip: p.SURFACE || p.CARD,
        subtle: p.BG, black: p.HEADING, input: p.INPUT,
        sections: p.SECTIONS,
      },

      sectionGradients: {
        sageToWarm: sectionGradient(p.SECTIONS.sage, p.SECTIONS.warm),
        warmToSand: sectionGradient(p.SECTIONS.warm, p.SECTIONS.sand),
        sandToBlue: sectionGradient(p.SECTIONS.sand, p.SECTIONS.blue),
        blueToLavender: sectionGradient(p.SECTIONS.blue, p.SECTIONS.lavender),
        lavenderToTeal: sectionGradient(p.SECTIONS.lavender, p.SECTIONS.teal),
        tealToSage: sectionGradient(p.SECTIONS.teal, p.SECTIONS.sage),
        sageToBlue: sectionGradient(p.SECTIONS.sage, p.SECTIONS.blue),
        warmToLavender: sectionGradient(p.SECTIONS.warm, p.SECTIONS.lavender),
        sandToTeal: sectionGradient(p.SECTIONS.sand, p.SECTIONS.teal),
      },

      border: {
        light: p.BORDER, default: p.BORDER,
        hover: hexToRgba(PRIMARY, 0.4), focus: PRIMARY,
      },

      colors: {
        primary: PRIMARY, primaryLight: p.LIGHT_ACCENT, primaryDark: PRIMARY_DARK,
        secondary: PRIMARY_DARK, secondaryLight: PRIMARY_MUTED,
        secondaryDark: mode === 'dark' ? '#5C3A2B' : '#1B4E4C',
        accentGreen: SUCCESS, accentAmber: '#C4A84A',
        error: ERROR, success: SUCCESS, info: SECONDARY_ACCENT, disabled: p.TEXT_MUTED,
        surfaceBg: p.BG, surfaceCard: p.CARD, surfaceLight: p.SURFACE || p.CARD,
        surfaceChip: p.SURFACE || p.CARD, surfaceDark: p.FOOTER_BG,
        textPrimary: p.HEADING, textSecondary: p.TEXT, textMuted: p.TEXT_MUTED,
        textHelper: p.TEXT_HELPER,
        textDark: p.HEADING, textDisabled: p.TEXT_MUTED, textInverse: p.TEXT_INVERSE,
        borderLight: p.BORDER, borderDefault: p.BORDER,
        borderHover: hexToRgba(PRIMARY, 0.4),
        gradientBrand: PRIMARY, gradientBrandHover: PRIMARY_DARK,
      },

      glass: {
        bg: hexToRgba(p.CARD, mode === 'dark' ? 0.8 : 0.75),
        border: hexToRgba(p.BORDER, 0.5),
        blur: 'blur(20px)', blurLight: 'blur(8px)',
        blurMedium: 'blur(40px)', blurHeavy: 'blur(60px)',
        blurSaturate: 'blur(20px) saturate(180%)',
        shadow: p.GLASS_SHADOW,
        backdrop: p.GLASS_BACKDROP,
      },

      footer: {
        bg: p.FOOTER_BG,
        textPrimary: p.FOOTER_TEXT,
        textSecondary: p.FOOTER_MUTED,
        linkHover: p.FOOTER_HOVER,
        border: p.FOOTER_BORDER,
        borderLight: p.FOOTER_BORDER_LIGHT,
        borderMedium: p.FOOTER_BORDER_MED,
        borderHover: p.FOOTER_BORDER_HOVER,
        inputBg: p.FOOTER_INPUT,
        iconHoverBg: p.FOOTER_ICON,
      },

      serviceDarkMap: {
        'brand.blue': PRIMARY_DARK, 'brand.purple': mode === 'dark' ? '#7A6B76' : '#65657A',
        'accent.green': mode === 'dark' ? '#4A8860' : '#3E8A60', 'accent.amber': '#AD933E',
      },

      svg: a.SVG,

      radius: {
        xxs: '3px', xs: '8px', sm: '10px', md: '12px',
        lg: '14px', xl: '16px', xxl: '20px', pill: '50px', full: '50%',
      },

      shadow: {
        none: 'none',
        xs: `0 1px 3px rgba(${sr},${sg},${sb},0.2)`,
        card: `0 1px 3px rgba(${sr},${sg},${sb},0.2), 0 1px 2px rgba(${sr},${sg},${sb},0.15)`,
        cardSubtle: `0 2px 8px rgba(${sr},${sg},${sb},0.15), 0 1px 3px rgba(${sr},${sg},${sb},0.1)`,
        cardHover: `0 8px 24px rgba(${sr},${sg},${sb},0.3), 0 2px 8px rgba(${sr},${sg},${sb},0.2)`,
        modal: `0 24px 64px rgba(${sr},${sg},${sb},0.5)`,
        brand: `0 4px 16px ${hexToRgba(PRIMARY, 0.2)}`,
        brandHover: `0 8px 28px ${hexToRgba(PRIMARY, 0.3)}`,
        brandLight: `0 2px 10px ${hexToRgba(PRIMARY, 0.15)}`,
        brandLightHover: `0 4px 16px ${hexToRgba(PRIMARY, 0.2)}`,
        elevated: `0 12px 48px rgba(${sr},${sg},${sb},0.35)`,
      },

      duration: { fast: 0.15, normal: 0.25, slow: 0.4 },
      transition: {
        fast: 'all 0.15s ease', normal: 'all 0.25s ease', slow: 'all 0.4s ease',
        color: 'color 0.15s ease', transform: 'transform 0.25s ease',
      },
      easing: { standard: [0.22, 1, 0.36, 1] },
      fontSize: {
        xxs: '0.7rem', tiny: '0.72rem', label: '0.78rem', caption: '0.78rem',
        small: '0.82rem', chip: '0.85rem', med: '0.88rem', body: '0.9rem',
        bodyLg: '0.95rem', bodyMd: '1rem', bodyXl: '1.05rem',
        h6Sm: '1.1rem', h5Sm: '1.15rem', h5Md: '1.2rem',
        heading: { xs: '2rem', md: '2.8rem' },
        headingLg: { xs: '2rem', md: '3rem' },
      },
      spacing: {
        xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48,
        section: 64, sectionLg: 96,
      },
      zIndex: {
        dropdown: 1000, sticky: 1100, modal: 1300, snackbar: 1400, tooltip: 1500, header: 1200,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          },
          body: {
            backgroundColor: p.BG,
            color: p.TEXT,
            '--color-primary': PRIMARY,
            '--color-primary-light': p.LIGHT_ACCENT,
            '--color-primary-dark': PRIMARY_DARK,
            '--color-secondary': PRIMARY_DARK,
            '--color-secondary-light': PRIMARY_MUTED,
            '--color-secondary-dark': mode === 'dark' ? '#5C3A2B' : '#1B4E4C',
            '--color-accent-green': SUCCESS,
            '--color-accent-amber': '#C4A84A',
            '--color-error': ERROR,
            '--color-success': SUCCESS,
            '--color-info': SECONDARY_ACCENT,
            '--color-text-primary': p.HEADING,
            '--color-text-secondary': p.TEXT,
            '--color-text-disabled': p.TEXT_MUTED,
            '--color-text-helper': p.TEXT_HELPER,
            '--color-text-inverse': p.TEXT_INVERSE,
            '--color-surface-bg': p.BG,
            '--color-surface-card': p.CARD,
            '--color-surface-light': p.SURFACE || p.CARD,
            '--color-surface-chip': p.SURFACE || p.CARD,
            '--color-surface-dark': p.FOOTER_BG,
            '--color-border-light': p.BORDER,
            '--color-border-default': p.BORDER,
            '--color-border-hover': hexToRgba(PRIMARY, 0.4),
            '--gradient-brand': `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
            '--gradient-brand-hover': `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${mode === 'dark' ? '#5C3A2B' : '#1B4E4C'} 100%)`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12, padding: '10px 28px', fontSize: '0.95rem',
            fontWeight: 600, boxShadow: 'none', '&:hover': { boxShadow: 'none' },
          },
          contained: {
            background: `linear-gradient(135deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
            color: '#FFFFFF',
            '&:hover': {
              background: `linear-gradient(135deg, ${PRIMARY_DARK} 0%, ${mode === 'dark' ? '#5C3A2B' : '#1B4E4C'} 100%)`,
            },
          },
          outlined: {
            borderWidth: 2, borderColor: p.BORDER, color: p.HEADING,
            '&:hover': { borderWidth: 2, borderColor: PRIMARY, background: hexToRgba(PRIMARY, 0.06) },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 16, backgroundImage: 'none', background: p.CARD, border: `1px solid ${p.BORDER}` },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none', background: p.CARD },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderColor: p.BORDER },
        },
      },
    },
  });
}

const theme = createAppTheme('dark');
export default theme;
export { hexToRgba };
