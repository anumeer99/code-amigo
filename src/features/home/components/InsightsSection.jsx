import { Box, Container, Grid, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../../../shared/components/SectionHeader';
import { blogs } from '../../blogs/data/blogs';
import { visualMap, CodeEditorSVG } from '../../blogs/data/visuals';
import BlogCard from '../../blogs/components/BlogCard';
import { gradientButtonSx } from '../../../shared/styles/buttonStyles';

export default function InsightsSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const displayBlogs = blogs.slice(0, 3);

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
          {displayBlogs.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <BlogCard blog={article} Visual={visualMap[article.id] || CodeEditorSVG} index={index} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/blogs')}
            endIcon={<ArrowForwardIcon />}
            sx={gradientButtonSx}
          >
            View All Blogs
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
