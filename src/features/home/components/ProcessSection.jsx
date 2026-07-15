import { useMemo } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../../../shared/components/SectionHeader';
import { sectionWrapperSx } from '../../../shared/styles/sectionStyles';
import { processSteps } from '../data/process';

function resolveColor(theme, colorPath) {
  const [group, key] = colorPath.split('.');
  return theme.custom[group]?.[key] ?? colorPath;
}

function TimelineCard({ step, side }) {
  const theme = useTheme();
  const isLeft = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: theme.custom.duration.slow, ease: theme.custom.easing.standard }}
      style={{ width: '100%' }}
    >
      <Box
        sx={{
          p: { xs: 3, md: 3.5 },
          borderRadius: theme.custom.radius.xxl,
          border: `1px solid ${theme.custom.border.light}`,
          background: theme.custom.bg.card,
          maxWidth: { xs: '100%', md: 420 },
          transition: theme.custom.transition.normal,
          '&:hover': {
            borderColor: theme.custom.hexToRgba(step.color, 0.3),
            background: theme.custom.hexToRgba(theme.custom.bg.card, 0.8),
            transform: 'translateY(-4px)',
            boxShadow: theme.custom.shadow.cardHover,
          },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: step.color,
            fontWeight: 700,
            fontSize: theme.custom.fontSize.caption,
            letterSpacing: '0.1em',
            mb: 1,
            display: 'block',
          }}
        >
          STEP {step.number}
        </Typography>
        <Typography variant="h5" sx={{ color: theme.custom.colors.textPrimary, mb: 1, fontSize: theme.custom.fontSize.h5Sm }}>
          {step.title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.7 }}>
          {step.description}
        </Typography>
      </Box>
    </motion.div>
  );
}

function TimelineNode({ step }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: { xs: 56, md: 64 },
        height: { xs: 56, md: 64 },
        borderRadius: theme.custom.radius.full,
        background: theme.custom.hexToRgba(step.color, 0.1),
        border: `2px solid ${theme.custom.hexToRgba(step.color, 0.25)}`,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        zIndex: 2,
        transition: theme.custom.transition.normal,
        mx: 'auto',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: `0 0 30px ${theme.custom.hexToRgba(step.color, 0.25)}`,
        },
      }}
    >
      <step.icon sx={{ fontSize: 28, color: step.color }} />
    </Box>
  );
}

export default function ProcessSection() {
  const theme = useTheme();

  const steps = useMemo(() => processSteps.map((s) => ({
    ...s,
    number: String(s.number).padStart(2, '0'),
    color: resolveColor(theme, s.color),
  })), [theme]);

  return (
    <Box sx={{ ...sectionWrapperSx, background: theme.custom.sectionGradients.blueToLavender }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Our Process"
          title="From Idea to Launch"
          description="A proven development process that ensures quality, transparency, and timely delivery"
          color={theme.custom.accent.green}
        />

        <Box sx={{ position: 'relative', px: { xs: 0, md: 6 } }}>
          <Box
            sx={{
            position: 'absolute',
            left: { xs: 28, md: '50%' },
            top: 0,
            bottom: 0,
            width: 2,
            display: { xs: 'none', md: 'block' },
            background: `linear-gradient(180deg, ${theme.custom.hexToRgba(theme.custom.brand.primary, 0.2)} 0%, ${theme.custom.hexToRgba(theme.custom.brand.primaryLight, 0.1)} 50%, transparent 100%)`,
            transform: { md: 'translateX(-50%)' },
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 7 } }}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <Box
                  key={step.title}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      justifyContent: isLeft ? 'flex-end' : 'flex-start',
                      pr: { xs: 0, md: 6 },
                      pl: { xs: 0, md: 0 },
                      width: '100%',
                    }}
                  >
                    {isLeft ? <TimelineCard step={step} side="left" /> : null}
                  </Box>

                  <TimelineNode step={step} />

                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      justifyContent: isLeft ? 'flex-start' : 'flex-end',
                      pl: { xs: 0, md: 6 },
                      pr: { xs: 0, md: 0 },
                      width: '100%',
                    }}
                  >
                    {!isLeft ? <TimelineCard step={step} side="right" /> : null}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
