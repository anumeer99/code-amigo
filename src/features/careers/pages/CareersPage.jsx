import { useState } from 'react';
import { Box, Container, Typography, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { fadeInUp, staggerContainer, staggerItem, hoverScale } from '../../../shared/animations/animations';
import JobCard from '../components/JobCard';
import ContactModal from '../../../shared/components/ContactModal';
import NumberedSteps from '../../../shared/ui/NumberedSteps';
import { jobs } from '../data/jobs';
import { benefits, hiringProcess } from '../data/careers';
import { minHeightPageSx, pageHeroSx, purpleBadgeSx, subSectionHeadingSx, STAGGER_VIEWPORT, cardBaseSx, cardHoverSx } from '../../../shared/styles/sectionStyles';

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const { brand, hexToRgba, fontSize } = theme.custom;

  return (
    <Box sx={minHeightPageSx}>
      <Box sx={pageHeroSx}>
        <Box sx={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 50% at 50% 30%, ${hexToRgba(brand.primary, 0.1)} 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeInUp}>
            <Chip icon={<WorkOutlineIcon sx={{ fontSize: 16 }} />} label="We're Hiring" sx={purpleBadgeSx} />
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3rem', lg: '3.5rem' }, color: theme.custom.colors.textPrimary, mb: 3, lineHeight: 1.2 }}>
              Join Our Team
            </Typography>
            <Typography variant="h6" sx={{ color: theme.custom.colors.textSecondary, fontWeight: 400, lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}>
              We are a team of engineers, designers, and strategists building exceptional software. We value craftsmanship, curiosity, and the drive to solve meaningful problems.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Box id="open-positions" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>Open Positions</Typography>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={STAGGER_VIEWPORT}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {jobs.map((job) => (
                <motion.div key={job.title} variants={staggerItem}>
                  <JobCard job={job} />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, background: theme.custom.bg.sections.warm }}>
        <Container maxWidth="md">
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>Why Work With Us</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {benefits.map((benefit, i) => (
                <motion.div key={i} {...hoverScale}>
                  <Box sx={{ ...cardBaseSx, ...cardHoverSx(brand.primary), height: '100%', cursor: 'default' }}>
                    <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, fontSize: fontSize.bodyLg, fontWeight: 600, mb: 1 }}>{benefit.title}</Typography>
                    <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: fontSize.chip, lineHeight: 1.6 }}>{benefit.description}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <motion.div {...fadeInUp}>
            <Typography variant="h2" sx={subSectionHeadingSx}>Hiring Process</Typography>
            <NumberedSteps steps={hiringProcess} color="purple" />
          </motion.div>
        </Container>
      </Box>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
}
