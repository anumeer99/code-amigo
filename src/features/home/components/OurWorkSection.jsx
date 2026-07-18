import { useState, useRef, useCallback } from 'react';
import { Box, Container, Typography, Rating, Avatar, Card, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import SectionHeader from '../../../shared/components/SectionHeader';
import { sectionWrapperSx, gradientDividerSx } from '../../../shared/styles/sectionStyles';
import { testimonials } from '../data/testimonials';

function resolveColor(theme, colorPath) {
  const [group, key] = colorPath.split('.');
  return theme.custom[group]?.[key] ?? colorPath;
}

const CARD_WIDTH = { xs: 320, sm: 400, md: 480, lg: 480 };
const CARD_HEIGHT = 360;
const CARD_GAP = 24;
const SCROLL_DURATION = 40;

function TestimonialCard({ item, theme }) {
  const avatarHex = resolveColor(theme, item.avatarColor);

  return (
    <Card
      sx={{
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: theme.custom.radius.xxl,
        border: `1px solid ${theme.custom.border.light}`,
        background: theme.custom.bg.card,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexShrink: 0,
        transition: 'transform 0.2s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03) translateY(-4px)',
          borderColor: `${theme.custom.brand.primary}30`,
          background: theme.custom.hexToRgba(theme.custom.bg.card, 0.8),
          boxShadow: theme.custom.shadow.card,
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
      }}
    >
      <Box sx={{ p: { xs: 2.5, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
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
    </Card>
  );
}

export default function OurWorkSection() {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [isPaused, setIsPaused] = useState(false);

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
            py: 1,
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
                width: CARD_WIDTH,
                minWidth: CARD_WIDTH,
              },
            }}
          >
            {duplicated.map((item, index) => (
              <TestimonialCard
                key={`${item.name}-${index}`}
                item={item}
                theme={theme}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
