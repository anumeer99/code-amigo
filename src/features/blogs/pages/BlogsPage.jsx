import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { blogs } from '../data/blogs';
import { visualMap, CodeEditorSVG } from '../data/visuals';
import BlogCard from '../components/BlogCard';

export default function BlogsPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.custom.bg.main,
        minHeight: '60vh',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              color: theme.custom.colors.textPrimary,
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.25rem' },
            }}
          >
            From Our Blog
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.custom.colors.textSecondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Thoughts, tutorials, and insights from our engineering team
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {blogs.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <BlogCard blog={article} Visual={visualMap[article.id] || CodeEditorSVG} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
