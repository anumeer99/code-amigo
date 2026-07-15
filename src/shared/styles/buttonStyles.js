export const gradientButtonSx = {
  px: 5,
  py: 1.5,
  fontSize: '1rem',
  borderRadius: '12px',
  fontWeight: 600,
  textTransform: 'none',
  background: 'var(--gradient-brand)',
  boxShadow: '0 2px 10px var(--color-primary, rgba(0,0,0,0.15))',
  color: '#FFFFFF',
  '&:hover': {
    background: 'var(--gradient-brand-hover)',
    boxShadow: '0 4px 16px var(--color-primary, rgba(0,0,0,0.2))',
  },
};

export const gradientButtonLgSx = {
  ...gradientButtonSx,
  py: 1.8,
  borderRadius: '14px',
};

export function outlinedButtonSx() {
  return {
    px: 5,
    py: 1.5,
    borderColor: 'var(--color-border-default)',
    color: 'var(--color-text-primary)',
    borderRadius: '14px',
    fontWeight: 600,
    textTransform: 'none',
    '&:hover': {
      borderColor: 'var(--color-primary)',
      background: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
    },
  };
}
