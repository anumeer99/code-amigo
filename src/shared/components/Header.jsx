import { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_ITEMS, DESKTOP_NAV } from '../constants/navigation';
import { ROUTES } from '../constants/routes';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ContactModal from './ContactModal';
import LogoIcon from '../ui/LogoIcon';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 960px)');
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const isHome = location.pathname === ROUTES.HOME;

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${href}`);
    }
  }, [isHome, navigate]);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(ROUTES.HOME);
    }
  }, [isHome, navigate]);

  const handleOpenModal = useCallback(() => {
    setMobileOpen(false);
    setModalOpen(true);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? theme.custom.hexToRgba(theme.custom.bg.sections.sage, 0.8)
            : 'transparent',
          backdropFilter: trigger ? theme.custom.glass.blurSaturate : 'none',
          borderBottom: trigger
            ? `1px solid ${theme.custom.border.light}`
            : '1px solid transparent',
          transition: theme.custom.transition.normal,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="a"
                href={ROUTES.HOME}
                onClick={handleLogoClick}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                }}
              >
                <LogoIcon size={40} fontSize="1.1rem" />
                <Box
                  component="span"
                  sx={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: theme.custom.colors.textPrimary,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Code Amigo
                </Box>
              </Box>
            </motion.div>

            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {DESKTOP_NAV.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        color: theme.custom.colors.textSecondary,
                        fontSize: theme.custom.fontSize.med,
                        px: 2,
                        py: 1,
                        borderRadius: theme.custom.radius.sm,
                        transition: theme.custom.transition.fast,
                        '&:hover': {
                          color: theme.custom.colors.textPrimary,
                          background: theme.custom.hexToRgba(theme.custom.brand.primary, 0.06),
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <ThemeToggle />
                  <Button
                    variant="contained"
                    onClick={handleOpenModal}
                    sx={{ ml: 1, px: 3, py: 1.2, fontSize: theme.custom.fontSize.med }}
                  >
                    Get a Quote
                  </Button>
                </Box>
              </motion.div>
            )}

            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: theme.custom.colors.textPrimary }}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: 320,
            background: theme.custom.glass.bg,
            backdropFilter: theme.custom.glass.blur,
            borderLeft: `1px solid ${theme.custom.glass.border}`,
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.custom.radius.md,
              background: theme.custom.brand.gradient,
              color: theme.custom.colors.textInverse,
              '&:hover': { opacity: 0.9 },
              '&:active': { transform: 'scale(0.95)' },
              p: 0,
              minWidth: 0,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <List sx={{ px: 2, pt: 1 }}>
          {NAV_ITEMS.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ListItem
                component="button"
                onClick={() => handleNavClick(item.href)}
                sx={{
                  borderRadius: theme.custom.radius.md,
                  mb: 0.5,
                  '&:hover': {
                    background: theme.custom.hexToRgba(theme.custom.brand.primary, 0.06),
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: theme.custom.colors.textSecondary }}>
                  <item.icon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                      color: theme.custom.colors.textSecondary,
                    },
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
          <Box sx={{ px: 1, pt: 2, display: 'flex', gap: 1 }}>
            <Box sx={{ flexShrink: 0 }}>
              <ThemeToggle />
            </Box>
            <Button
              variant="contained"
              fullWidth
              onClick={handleOpenModal}
              sx={{ py: 1.3 }}
            >
              Get a Quote
            </Button>
          </Box>
        </List>
      </Drawer>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
