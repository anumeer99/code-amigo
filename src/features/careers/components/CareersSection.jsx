import { Box, Container, Typography, Button, Chip, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../../../shared/animations/animations';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import JobCard from './JobCard';
import { jobs } from '../data/jobs';
import { ROUTES } from '../../../shared/constants/routes';
import { sectionWrapperSx, STAGGER_VIEWPORT, purpleBadgeSx, radialOverlay } from '../../../shared/styles/sectionStyles';
import { outlinedButtonSx } from '../../../shared/styles/buttonStyles';

const previewJobs = jobs.slice(0, 3);

export default function CareersSection() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { brand, accent, hexToRgba, radius, border } = theme.custom;

  return (
    <Box
      id="careers"
      sx={{ ...sectionWrapperSx, background: theme.custom.bg.sections.warm }}
    >
      <Box sx={radialOverlay(brand.primary, { opacity: 0.08 })} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeInUp}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Chip
              icon={<WorkOutlineIcon sx={{ fontSize: 16 }} />}
              label="We're Hiring"
              sx={purpleBadgeSx}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                mb: 2,
                color: theme.custom.colors.textPrimary,
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.custom.colors.textSecondary, maxWidth: 600, mx: 'auto' }}
            >
              Be part of a team that's building the future of software
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ color: theme.custom.colors.textMuted, mt: 1, fontSize: theme.custom.fontSize.tiny }}
            >
              * Sample job listings for demonstration purposes
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={STAGGER_VIEWPORT}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 5 }}>
            {previewJobs.map((job) => (
              <motion.div key={job.title} variants={staggerItem}>
                <JobCard job={job} />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div {...fadeInUp}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate(ROUTES.CAREERS)}
              sx={outlinedButtonSx(brand.primary)}
            >
              View All Open Positions
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
