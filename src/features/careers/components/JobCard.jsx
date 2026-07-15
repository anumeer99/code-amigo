import { Box, Typography, Chip } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { jobPath } from '../../../shared/constants/routes';

export default function JobCard({ job }) {
  const theme = useTheme();
  const { brand, accent, bg, border, radius, shadow, transition } = theme.custom;
  const { hexToRgba } = theme.custom;

  return (
    <Link
      to={jobPath(job.slug)}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: radius.lg,
          border: `1px solid ${border.light}`,
          background: bg.card,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          transition: transition.fast,
          cursor: 'pointer',
          '&:hover': {
            borderColor: hexToRgba(brand.primary, 0.3),
            background: hexToRgba(brand.primary, 0.06),
            transform: 'translateY(-2px)',
            boxShadow: shadow.cardSubtle,
          },
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, mb: 1, fontSize: theme.custom.fontSize.h6Sm }}>
            {job.title}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <WorkOutlineIcon sx={{ fontSize: 14, color: theme.custom.colors.textSecondary }} />
              <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.small }}>
                {job.type}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnOutlinedIcon sx={{ fontSize: 14, color: theme.custom.colors.textSecondary }} />
              <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.small }}>
                {job.location}
              </Typography>
            </Box>
            <Chip
              label={job.department}
              size="small"
              sx={{
                height: 24,
                fontSize: theme.custom.fontSize.xxs,
                fontWeight: 500,
                background: hexToRgba(brand.primary, 0.1),
                color: brand.primary,
                border: `1px solid ${hexToRgba(brand.primary, 0.2)}`,
              }}
            />
            <Chip
              label={job.experience}
              size="small"
              sx={{
                height: 24,
                fontSize: theme.custom.fontSize.xxs,
                fontWeight: 500,
                background: bg.chip,
                color: theme.custom.colors.textSecondary,
                border: `1px solid ${border.light}`,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: theme.custom.colors.textSecondary,
            fontWeight: 500,
            fontSize: theme.custom.fontSize.body,
            flexShrink: 0,
            transition: transition.color,
            '&:hover': { color: brand.primary },
          }}
        >
          View Details
          <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </Box>
      </Box>
    </Link>
  );
}
