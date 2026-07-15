import { useRef, useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Rating, Avatar, useTheme } from '@mui/material';
import { useInView } from 'framer-motion';
import SectionHeader from '../../../shared/components/SectionHeader';
import { sectionWrapperSx, gradientDividerSx, cardBaseSx, cardHoverSx } from '../../../shared/styles/sectionStyles';
import { testimonials } from '../data/testimonials';

function resolveColor(theme, colorPath) {
  const [group, key] = colorPath.split('.');
  return theme.custom[group]?.[key] ?? colorPath;
}

export default function OurWorkSection() {
  const theme = useTheme();
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: '-50px' });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setEntered(true), 700);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const hoverSx = cardHoverSx(theme.custom.brand.primary);

  return (
    <Box id="portfolio" sx={{ ...sectionWrapperSx, background: theme.custom.bg.sections.lavender }}>
      <Box sx={gradientDividerSx} />

      <Container maxWidth="xl">
        <SectionHeader
          label="Our Work"
          title="What Our Clients Say"
          description="Don't just take our word for it, hear from the teams we've partnered with"
          color={theme.custom.brand.primary}
        />

        <Box ref={gridRef}>
          <Grid container spacing={3}>
            {testimonials.map((item, index) => {
              const avatarHex = resolveColor(theme, item.avatarColor);
              return (
              <Grid item xs={12} md={6} lg={4} key={item.name}>
                  <Box
                    sx={{
                      ...cardBaseSx,
                      ...hoverSx,
                      height: 340,
                      display: 'flex',
                      flexDirection: 'column',
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                      transition: entered
                        ? 'transform 0.2s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease'
                        : `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
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
              </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
