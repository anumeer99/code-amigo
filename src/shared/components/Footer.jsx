import { useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Container, Grid, Typography, TextField, Button, IconButton, Divider } from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/animations';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import AISolutionsModal from './AISolutionsModal';
import { FOOTER_LINKS } from '../constants/footer';
import { COMPANY, CONTACT, SOCIAL } from '../constants/company';
import { ROUTES } from '../constants/routes';
import { footerColumnHeadingSx } from '../styles/sectionStyles';

const socialIconMap = {
  [SOCIAL.facebook]: FaFacebookF,
  [SOCIAL.twitter]: FaTwitter,
  [SOCIAL.linkedin]: FaLinkedinIn,
  [SOCIAL.instagram]: FaInstagram,
};

export default function Footer() {
  const theme = useTheme();
  const { brand, accent, bg, border, radius, transition, hexToRgba, footer, fontSize } = theme.custom;
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = useCallback((service) => {
    if (service.path) {
      navigate(service.path);
    } else {
      if (location.pathname === ROUTES.HOME) {
        setAiModalOpen(true);
      } else {
        navigate(`${ROUTES.HOME}?openAiModal=true`);
      }
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <Box
        component="footer"
        sx={{
          background: footer.bg,
          borderTop: `1px solid ${footer.border}`,
          pt: { xs: 8, md: 10 },
          pb: 4,
        }}
      >
        <Container maxWidth="xl">
          <motion.div {...staggerContainer}>
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid item xs={12} sm={6} md={3}>
                <motion.div {...staggerItem}>
                  <Typography variant="h6" sx={footerColumnHeadingSx(footer.textPrimary)}>
                    Company
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {FOOTER_LINKS.company.map((item) => (
                      <Box
                        component="li"
                        key={item.label}
                        sx={{
                          mb: 1.2,
                      '& a': {
                        color: footer.textSecondary,
                        textDecoration: 'none',
                        fontSize: fontSize.med,
                        transition: transition.color,
                        '&:hover': { color: footer.linkHover },
                          },
                        }}
                      >
                        <a href={item.href}>{item.label}</a>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <motion.div {...staggerItem}>
                  <Typography variant="h6" sx={footerColumnHeadingSx(footer.textPrimary)}>
                    Services
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                    {FOOTER_LINKS.services.map((item) => (
                      <Box
                        component="li"
                        key={item.label}
                        sx={{ mb: 1.2 }}
                      >
                        <Box
                          component="button"
                          onClick={() => handleServiceClick(item)}
                          sx={{
                            color: footer.textSecondary,
                            textDecoration: 'none',
                            fontSize: fontSize.med,
                            transition: transition.color,
                            background: 'none',
                            border: 'none',
                            p: 0,
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            textAlign: 'left',
                            '&:hover': { color: footer.linkHover },
                          }}
                        >
                          {item.label}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <motion.div {...staggerItem}>
                  <Typography variant="h6" sx={footerColumnHeadingSx(footer.textPrimary)}>
                    Contact
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <FiPhone style={{ color: footer.linkHover, fontSize: fontSize.bodyLg }} />
                      <Typography variant="body2" sx={{ color: footer.textSecondary, fontSize: fontSize.med }}>
                        {CONTACT.phone.primary}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <FiMail style={{ color: footer.linkHover, fontSize: fontSize.bodyLg }} />
                      <Typography variant="body2" sx={{ color: footer.textSecondary, fontSize: fontSize.med }}>
                        {CONTACT.email.general}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {FOOTER_LINKS.social.map((social) => {
                      const Icon = socialIconMap[social.url];
                      return (
                        <IconButton
                          key={social.platform}
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.platform}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: radius.sm,
                            border: `1px solid ${footer.borderLight}`,
                            color: footer.textSecondary,
                            transition: transition.fast,
                            '&:hover': {
                              borderColor: footer.linkHover,
                              color: footer.linkHover,
                              background: footer.iconHoverBg,
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          <Icon size={15} />
                        </IconButton>
                      );
                    })}
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <motion.div {...staggerItem}>
                  <Typography variant="h6" sx={footerColumnHeadingSx(footer.textPrimary)}>
                    Stay Updated
                  </Typography>
                  <Typography variant="body2" sx={{ color: footer.textSecondary, mb: 2, fontSize: fontSize.med }}>
                    Subscribe to our newsletter for the latest insights.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      placeholder="Your email"
                      size="small"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: radius.sm,
                          fontSize: fontSize.chip,
                          height: 40,
                          background: footer.inputBg,
                          color: footer.textPrimary,
                          '& fieldset': {
                            borderColor: footer.borderMedium,
                          },
                          '&:hover fieldset': {
                            borderColor: footer.borderHover,
                          },
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: radius.sm,
                        fontSize: fontSize.chip,
                        minWidth: 'auto',
                        height: 40,
                        px: 3,
                      }}
                    >
                      Join
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>

            <Divider sx={{ borderColor: footer.border, my: 5 }} />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
              <Typography variant="body2" sx={{ color: footer.textSecondary, fontSize: fontSize.small }}>
              {COMPANY.copyright}
            </Typography>
          </Box>
        </Container>
      </Box>

      <AISolutionsModal open={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
}
