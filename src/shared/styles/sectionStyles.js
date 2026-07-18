export const STAGGER_VIEWPORT = { once: true, margin: '-80px' };

export const sectionBaseSx = {
  py: { xs: 8, md: 12 },
  position: 'relative',
};

export const sectionWrapperSx = sectionBaseSx;

export const sectionHeroSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionWarmSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionSandSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionBlueSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionLavenderSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionTealSx = {
  ...sectionBaseSx,
  background: 'var(--color-surface-bg)',
};

export const sectionGradientSx = {
  ...sectionBaseSx,
};

export const pageHeroSx = {
  pt: { xs: 14, md: 18 },
  pb: { xs: 8, md: 12 },
  position: 'relative',
  overflow: 'hidden',
};

export const minHeightPageSx = {
  minHeight: '100vh',
  background: 'var(--color-surface-bg)',
};

export const cardBaseSx = {
  p: { xs: 3, md: 4 },
  borderRadius: '20px',
  border: '1px solid var(--color-border-default)',
  background: 'var(--color-surface-card)',
};

export function cardHoverSx() {
  return {
    transition: 'all 0.25s ease',
    '&:hover': {
      borderColor: 'var(--color-border-hover)',
      background: 'var(--color-surface-card)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
    },
  };
}

export function radialOverlay(color, { w = '60%', h = '50%', top = '30%', opacity = 0.06 } = {}) {
  return {
    position: 'absolute',
    inset: 0,
    background: `radial-gradient(ellipse ${w} ${h} at 50% ${top}, ${color} 0%, transparent 70%)`,
    opacity,
    pointerEvents: 'none',
  };
}

export const gradientDividerSx = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '60%',
  height: 1,
  background: 'linear-gradient(90deg, transparent 0%, var(--color-border-hover) 50%, transparent 100%)',
  pointerEvents: 'none',
};

export const relatedSectionSx = {
  py: { xs: 8, md: 10 },
  borderTop: '1px solid var(--color-border-default)',
};

export const pageCTASx = {
  py: { xs: 8, md: 10 },
  textAlign: 'center',
  position: 'relative',
};

export const subSectionHeadingSx = {
  fontSize: { xs: '1.5rem', md: '2rem' },
  color: 'var(--color-text-primary)',
  fontWeight: 700,
  mb: 4,
};

export const purpleBadgeSx = {
  height: 36,
  px: 2,
  mb: 3,
  borderRadius: '50px',
  fontSize: '0.78rem',
  fontWeight: 600,
  background: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
  color: 'var(--color-primary)',
  border: '1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)',
};

export const hiddenScrollbarSx = {
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
};

export function footerColumnHeadingSx(color) {
  return {
    color,
    mb: 2.5,
    fontSize: '0.95rem',
    fontWeight: 600,
  };
}
