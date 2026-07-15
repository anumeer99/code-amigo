import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQAccordion({ items, expanded, onToggle, sx }) {
  const theme = useTheme();
  const { bg, border, radius, hexToRgba, transition } = theme.custom;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, ...sx }}>
      {items.map((faq, i) => (
        <Accordion
          key={i}
          expanded={expanded === i}
          onChange={() => onToggle(expanded === i ? -1 : i)}
          disableGutters
          elevation={0}
          sx={{
            background: bg.card,
            border: `1px solid ${border.light}`,
            borderRadius: `${radius.lg} !important`,
            overflow: 'hidden',
            '&::before': { display: 'none' },
            '&.Mui-expanded': { background: bg.card, borderColor: hexToRgba(theme.custom.brand.primary, 0.2) },
            '&:hover': { background: bg.card },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: theme.custom.colors.textSecondary, transition: transition.transform, fontSize: '1.3rem' }} />}
            sx={{
              px: 3,
              py: 2,
              minHeight: 56,
              '& .MuiAccordionSummary-content': { my: 0, '&.Mui-expanded': { my: 0 } },
              '& .MuiAccordionSummary-expandIconWrapper': {
                transition: transition.transform,
                '&.Mui-expanded': { transform: 'rotate(180deg)' },
              },
            }}
          >
            <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, fontSize: theme.custom.fontSize.bodyLg, fontWeight: 600, lineHeight: 1.4 }}>
              {faq.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.7, fontSize: theme.custom.fontSize.body }}>
              {faq.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
