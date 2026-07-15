import { useState, useMemo } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getBlogBySlug, getRelatedBlogs } from '../data/blogs';
import { fadeInUp } from '../../../shared/animations/animations';
import ContactModal from '../../../shared/components/ContactModal';
import BackLink from '../../../shared/ui/BackLink';
import PageCTA from '../../../shared/ui/PageCTA';
import LogoIcon from '../../../shared/ui/LogoIcon';
import { CategoryChip } from '../../../shared/ui/Chip';
import { ROUTES } from '../../../shared/constants/routes';
import { minHeightPageSx, pageHeroSx, radialOverlay, relatedSectionSx } from '../../../shared/styles/sectionStyles';
import { visualMap, CodeEditorSVG } from '../data/visuals';
import BlogCard from '../components/BlogCard';

function parseMarkdown(text) {
  if (!text) return '';
  
  let html = text;
  
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';
  html = html.replace(/<p>\s*<h/g, '<h').replace(/<\/h(\d)>\s*<\/p>/g, '</h$1>');
  html = html.replace(/<p>\s*<ul>/g, '<ul>').replace(/<\/ul>\s*<\/p>/g, '</ul>');
  html = html.replace(/<p>\s*<pre>/g, '<pre>').replace(/<\/pre>\s*<\/p>/g, '</pre>');
  html = html.replace(/<p>\s<\/p>/g, '');
  
  return html;
}

export default function BlogDetailPage() {
  const theme = useTheme();
  const {
    brand,
    bg,
    border,
    radius,
    shadow,
    transition,
  } = theme.custom;
  const { hexToRgba } = theme.custom;

  const { slug } = useParams();
  const blog = useMemo(() => getBlogBySlug(slug), [slug]);
  const relatedBlogs = useMemo(() => getRelatedBlogs(slug, 3), [slug]);
  const [modalOpen, setModalOpen] = useState(false);

  const parsedContent = useMemo(() => parseMarkdown(blog.content), [blog.content]);

  if (!blog) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: theme.custom.colors.textPrimary, mb: 2 }}>404</Typography>
          <Typography variant="h5" sx={{ color: theme.custom.colors.textSecondary, mb: 4 }}>Blog post not found</Typography>
          <Button variant="contained" component={RouterLink} to={ROUTES.HOME}>
            Back to Home
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={minHeightPageSx}>
      {/* Hero */}
      <Box sx={pageHeroSx}>
        <Box sx={radialOverlay(blog.categoryColor)} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeInUp}>
            <BackLink to="/#blog" label="Back to Blogs" />

            <Box sx={{ mb: 2 }}>
              <CategoryChip label={blog.category} color={blog.categoryColor} sx={{ height: 30, px: 1.5 }} />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem', lg: '3.2rem' },
                color: theme.custom.colors.textPrimary,
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              {blog.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: theme.custom.colors.textSecondary, mb: 4, fontWeight: 400, lineHeight: 1.6 }}
            >
              {blog.excerpt}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center' }}>
              <LogoIcon size={32} fontSize="0.65rem" showText />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 16, color: theme.custom.colors.textSecondary }} />
                <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary }}>{blog.date}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: 16, color: theme.custom.colors.textSecondary }} />
                <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary }}>{blog.readTime}</Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ pb: 8 }}>
        <motion.div {...fadeInUp}>
          <Box
            className="blog-content"
            sx={{
              '& h2': {
                fontSize: { xs: '1.5rem', md: '1.8rem' },
                color: theme.custom.colors.textPrimary,
                fontWeight: 700,
                mt: 6,
                mb: 3,
              },
              '& h3': {
                fontSize: { xs: '1.2rem', md: '1.4rem' },
                color: theme.custom.colors.textPrimary,
                fontWeight: 600,
                mt: 5,
                mb: 2,
              },
              '& p': {
                color: theme.custom.colors.textSecondary,
                lineHeight: 1.8,
                mb: 3,
                fontSize: theme.custom.fontSize.bodyXl,
              },
              '& ul, & ol': {
                color: theme.custom.colors.textSecondary,
                lineHeight: 1.8,
                mb: 3,
                pl: 3,
              },
              '& li': {
                mb: 1,
                fontSize: theme.custom.fontSize.bodyXl,
              },
              '& pre': {
                background: bg.card,
                border: `1px solid ${border.light}`,
                borderRadius: radius.md,
                p: 3,
                mb: 3,
                overflow: 'auto',
                '& code': {
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                  fontSize: theme.custom.fontSize.body,
                color: theme.custom.colors.textPrimary,
                },
              },
              '& code': {
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                background: bg.card,
                px: 1,
                py: 0.5,
                borderRadius: radius.xs,
                fontSize: '0.9em',
                color: brand.primary,
              },
              '& strong': {
                color: theme.custom.colors.textPrimary,
                fontWeight: 600,
              },
            }}
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        </motion.div>
      </Container>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <Box sx={relatedSectionSx}>
          <Container maxWidth="xl">
            <motion.div {...fadeInUp}>
              <Typography variant="h3" sx={{ color: theme.custom.colors.textPrimary, mb: 5, textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Related Articles
              </Typography>
            </motion.div>
            <Grid container spacing={3}>
              {relatedBlogs.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <BlogCard blog={item} Visual={visualMap[item.id] || CodeEditorSVG} index={index} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}

      {/* CTA */}
      <PageCTA title="Have a project in mind?" subtitle="Let's build something great together. Get in touch with our team to discuss your project." buttonText="Let's Talk" onClick={() => setModalOpen(true)} />

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
}
