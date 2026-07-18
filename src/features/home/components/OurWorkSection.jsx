import { useState, useRef, useCallback } from 'react';
import { Box, Container, Typography, Rating, Avatar, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import SectionHeader from '../../../shared/components/SectionHeader';
import { sectionWrapperSx, gradientDividerSx, cardBaseSx, cardHoverSx } from '../../../shared/styles/sectionStyles';
import { testimonials } from '../data/testimonials';

function resolveColor(theme, colorPath) {
  const [group, key] = colorPath.split('.');
  return theme.custom[group]?.[key] ?? colorPath;
}

const CARD_WIDTH = { xs: 300, sm: 340, md: 360, lg: 380 };
const CARD_GAP = 24;
const SCROLL_DURATION = 40;

function TestimonialCard({ item, theme, hoverSx }) {
  const avatarHex = resolveColor(theme, item.avatarColor);

  return (
    <Box
      sx={{
        ...cardBaseSx,
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        height: 340,
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        '&:hover': {
          ...hoverSx['&:hover'],
          transform: 'scale(1.03) translateY(-4px)',
        },
      }}
    >
      <Rating
        value={item.rating}
        readOnly
        size="small"
        sx={{
          mb: 2.5,
          '& .MuiRating-iconFilled': { color: theme.custom.accent.amber },
          '& .MuiRating-iconEmpty': { color: theme.custom.colors.textMuted },
        }}
      />

      <Typography
        variant="body2"
        sx={{
          mb: 3,
          lineHeight: 1.8,
          flex: 1,
          fontSize: theme.custom.fontSize.body,
          fontStyle: 'italic',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          color: theme.custom.colors.textSecondary,
        }}
      >
        "{item.testimonial}"
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
        <Avatar
          sx={{
            width: 48,
            height: 48,
            borderRadius: theme.custom.radius.md,
            background: theme.custom.hexToRgba(avatarHex, 0.15),
            color: avatarHex,
            fontWeight: 700,
            fontSize: theme.custom.fontSize.body,
          }}
        >
          {item.initials}
        </Avatar>
        <Box>
          <Typography variant="subtitle2" sx={{ color: theme.custom.colors.textPrimary, fontWeight: 600, fontSize: theme.custom.fontSize.body }}>
            {item.name}
          </Typography>
          <Typography variant="caption" sx={{ color: theme.custom.colors.textMuted, fontSize: theme.custom.fontSize.label }}>
            {item.position}, {item.company}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function OurWorkSection() {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [isPaused, setIsPaused] = useState(false);

  const hoverSx = cardHoverSx(theme.custom.brand.primary);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <Box
      id="portfolio"
      ref={sectionRef}
      sx={{ ...sectionWrapperSx, background: theme.custom.bg.sections.lavender }}
    >
      <Box sx={gradientDividerSx} />

      <Container maxWidth="xl">
        <SectionHeader
          label="Our Work"
          title="What Our Clients Say"
          description="Don't just take our word for it, hear from the teams we've partnered with"
          color={theme.custom.brand.primary}
        />

        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          sx={{
            overflow: 'hidden',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            '@keyframes testimonialScroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            '@media (prefers-reduced-motion: reduce)': {
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              '& > div': {
                animationPlayState: 'paused !important',
              },
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: `${CARD_GAP}px`,
              width: 'max-content',
              animation: `testimonialScroll ${SCROLL_DURATION}s linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running',
              '@media (prefers-reduced-motion: reduce)': {
                animation: 'none',
              },
              '& > div': {
                width: { xs: 300, sm: 340, md: 360, lg: 380 },
                minWidth: { xs: 300, sm: 340, md: 360, lg: 380 },
              },
            }}
          >
            {duplicated.map((item, index) => (
              <TestimonialCard
                key={`${item.name}-${index}`}
                item={item}
                theme={theme}
                hoverSx={hoverSx}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
