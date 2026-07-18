import { Card, CardContent, Typography, Chip, Box, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function BlogCard({ blog, Visual, index = 0 }) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card
        component={RouterLink}
        to={`/blog/${blog.id}`}
        sx={{
          height: '100%',
          borderRadius: theme.custom.radius.xxl,
          border: `1px solid ${theme.custom.border.light}`,
          background: theme.custom.bg.card,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03) translateY(-4px)',
            borderColor: `${blog.categoryColor}30`,
            background: theme.custom.hexToRgba(theme.custom.bg.card, 0.8),
            boxShadow: theme.custom.shadow.card,
            '& .arrow-icon': {
              transform: 'translateX(4px)',
              color: blog.categoryColor,
            },
            '& .blog-visual': {
              transform: 'scale(1.05)',
            },
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
      >
        <Box
          sx={{
            height: 200,
            background: `linear-gradient(135deg, ${blog.categoryColor}12 0%, ${blog.categoryColor}04 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 250,
              height: 250,
              borderRadius: theme.custom.radius.full,
              background: `radial-gradient(circle, ${blog.categoryColor}15 0%, transparent 60%)`,
              top: '-80px',
              right: '-60px',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: 180,
              height: 180,
              borderRadius: theme.custom.radius.full,
              background: `radial-gradient(circle, ${blog.categoryColor}10 0%, transparent 60%)`,
              bottom: '-60px',
              left: '-40px',
            },
          }}
        >
          <Box
            className="blog-visual"
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              transition: theme.custom.transition.transform,
            }}
          >
            {blog.image ? (
              <Box
                component="img"
                src={blog.image}
                alt={blog.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : Visual ? (
              <Visual c={theme.custom.svg} />
            ) : null}
          </Box>
        </Box>
        <CardContent sx={{ p: { xs: 2.5, md: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <Chip
              label={blog.category}
              size="small"
              sx={{
                height: 26,
                fontSize: theme.custom.fontSize.tiny,
                fontWeight: 600,
                background: `${blog.categoryColor}15`,
                color: blog.categoryColor,
                border: `1px solid ${blog.categoryColor}25`,
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 14, color: theme.custom.colors.textMuted }} />
              <Typography variant="caption" sx={{ color: theme.custom.colors.textMuted, fontSize: theme.custom.fontSize.tiny }}>
                {blog.readTime}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.custom.colors.textPrimary,
              mb: 1.5,
              fontSize: theme.custom.fontSize.bodyXl,
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {blog.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.custom.colors.textSecondary,
              mb: 2,
              lineHeight: 1.7,
              fontSize: theme.custom.fontSize.med,
              flex: 1,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {blog.excerpt}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 'auto' }}>
            <Typography variant="body2" sx={{ color: theme.custom.colors.textMuted, fontSize: theme.custom.fontSize.chip, fontWeight: 500 }}>
              Read More
            </Typography>
            <ArrowForwardIcon
              className="arrow-icon"
              sx={{ fontSize: 16, color: theme.custom.colors.textMuted, transition: theme.custom.transition.fast }}
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
