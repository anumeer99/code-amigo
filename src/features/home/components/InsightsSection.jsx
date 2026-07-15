import { Box, Container, Grid, useTheme } from '@mui/material';
import SectionHeader from '../../../shared/components/SectionHeader';
import { blogs } from '../../blogs/data/blogs';
import { visualMap, CodeEditorSVG } from '../../blogs/data/visuals';
import BlogCard from '../../blogs/components/BlogCard';

export default function InsightsSection() {
  const theme = useTheme();

  return (
    <Box
      id="blog"
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.custom.bg.sections.teal,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          label="Latest Insights"
          title="From Our Blog"
          description="Thoughts, tutorials, and insights from our engineering team"
          color={theme.custom.accent.pink}
        />

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
