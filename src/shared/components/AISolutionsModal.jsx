import { useNavigate } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import BaseModal from './BaseModal';
import { AI_SERVICE_ROUTES, aiServicePath } from '../constants/routes';
import { aiServiceMeta } from '../data/aiServiceMeta';

export default function AISolutionsModal({ open, onClose }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { brand, bg, border, radius, transition, hexToRgba } = theme.custom;

  function resolveColor(colorKey) {
    const [group, key] = colorKey.split('.');
    return theme.custom[group]?.[key] ?? brand.primary;
  }

  const aiServices = AI_SERVICE_ROUTES.map(({ slug, label }) => {
    const meta = aiServiceMeta[slug] || {};
    const color = resolveColor(meta.colorKey || 'brand.blue');
    return {
      slug,
      title: label,
      icon: meta.icon,
      description: meta.description,
      color,
      bg: hexToRgba(color, 0.1),
    };
  });

  const handleCardClick = (slug) => {
    onClose();
    navigate(aiServicePath(slug));
  };

  return (
    <BaseModal open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 64px)' }}>
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            p: { xs: 3, sm: 4 },
            pb: 2,
            background: theme.custom.glass.bg,
            backdropFilter: theme.custom.glass.blur,
            borderBottom: `1px solid ${border.light}`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Typography variant="h5" sx={{ color: theme.custom.colors.textPrimary, fontWeight: 700, mb: 1, pr: 4 }}>
              AI Solutions
            </Typography>
            <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.6, maxWidth: 540 }}>
              Explore our AI capabilities and discover how we help businesses leverage artificial intelligence to solve complex problems, automate workflows, and build intelligent products.
            </Typography>
          </motion.div>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 3, sm: 4 },
            pt: 2,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            {aiServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Box
                  onClick={() => handleCardClick(service.slug)}
                  sx={{
                    p: 3,
                    borderRadius: radius.lg,
                    border: `1px solid ${border.light}`,
                    background: theme.custom.bg.card,
                    cursor: 'pointer',
                    transition: transition.normal,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: hexToRgba(service.color, 0.3),
                      background: service.bg,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 32px ${hexToRgba(service.color, 0.1)}`,
                      '& .ai-service-icon': {
                        background: service.bg,
                        '& svg': { color: service.color },
                      },
                    },
                  }}
                >
                  <Box
                    className="ai-service-icon"
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: radius.md,
                      background: bg.chip,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      transition: transition.normal,
                      '& svg': { color: theme.custom.colors.textSecondary, fontSize: 22, transition: transition.color },
                    }}
                  >
                    <service.icon />
                  </Box>
                  <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, fontSize: theme.custom.fontSize.bodyLg, fontWeight: 600, mb: 0.75 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.small, lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </BaseModal>
  );
}
