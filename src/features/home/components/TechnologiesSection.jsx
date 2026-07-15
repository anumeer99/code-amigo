import { Box, Container, Typography, Chip } from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../../shared/animations/animations';
import SectionHeader from '../../../shared/components/SectionHeader';
import { sectionWrapperSx, STAGGER_VIEWPORT, cardBaseSx } from '../../../shared/styles/sectionStyles';
import { techCategories } from '../data/technologies';

function resolveColor(theme, colorPath) {
  const [group, key] = colorPath.split('.');
  return theme.custom[group]?.[key] ?? colorPath;
}

export default function TechnologiesSection() {
  const theme = useTheme();
  const { brand, accent, bg, border, radius, transition, hexToRgba } = theme.custom;

  return (
    <Box sx={{ ...sectionWrapperSx, background: bg.sections.sand }}>
      <Container maxWidth="xl">
        <SectionHeader
          label="Tech Stack"
          title="Technologies We Master"
          description="We stay at the forefront of technology to deliver the best solutions for your projects"
          color={accent.cyan}
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={STAGGER_VIEWPORT}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {techCategories.map((category) => {
              const resolvedColor = resolveColor(theme, category.color);
              return (
              <motion.div key={category.label} variants={staggerItem}>
                <Box sx={cardBaseSx}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: theme.custom.radius.xxs,
                        background: resolvedColor,
                      }}
                    />
                    <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, fontSize: theme.custom.fontSize.bodyMd, fontWeight: 600 }}>
                      {category.label}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1.5,
                    }}
                  >
                    {category.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Chip
                          icon={<tech.icon style={{ fontSize: '1rem' }} />}
                          label={tech.name}
                          sx={{
                            height: 42,
                            px: 2,
                            borderRadius: radius.sm,
                            fontSize: theme.custom.fontSize.chip,
                            fontWeight: 500,
                            background: bg.chip,
                            border: `1px solid ${border.light}`,
                            color: theme.custom.colors.textSecondary,
                            transition: transition.fast,
                            cursor: 'default',
                            '& .MuiChip-icon': {
                              color: theme.custom.colors.textSecondary,
                            },
                            '&:hover': {
                              background: hexToRgba(resolvedColor, 0.1),
                              borderColor: hexToRgba(resolvedColor, 0.3),
                              color: theme.custom.colors.textPrimary,
                              '& .MuiChip-icon': {
                                color: resolvedColor,
                              },
                            },
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </motion.div>
              );
            })}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
