import { useEffect, useRef, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { countries } from '../data/countries';
import BaseModal from './BaseModal';
import useForm from '../hooks/useForm';
import { sendEmail } from '../services/api';
import { PrimaryButton } from '../ui/Button';
import { FormName, FormEmail, FormPhone, FormTextarea } from '../ui/form';
import { hiddenScrollbarSx } from '../styles/sectionStyles';
import { budgetOptions } from '../data/formOptions';

function ChatIllustration({ sx }) {
  const theme = useTheme();
  const { brand, hexToRgba } = theme.custom;

  return (
    <Box sx={{ position: 'relative', width: '100%', height: 180, ...sx }}>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', left: '10%', top: 20 }}
      >
        <Box sx={{
          width: 64, height: 64, borderRadius: theme.custom.radius.xl,
          background: hexToRgba(brand.primary, 0.12), border: `1px solid ${hexToRgba(brand.primary, 0.2)}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 28, color: brand.primary }} />
        </Box>
      </motion.div>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ position: 'absolute', right: '10%', top: 60 }}
      >
        <Box sx={{
          width: 48, height: 48, borderRadius: theme.custom.radius.lg,
          background: hexToRgba(brand.primary, 0.08), border: `1px solid ${hexToRgba(brand.primary, 0.15)}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Box sx={{ width: 16, height: 16, borderRadius: theme.custom.radius.xs, background: brand.primary, opacity: 0.5 }} />
        </Box>
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', left: '40%', top: 100 }}
      >
        <Box sx={{
          width: 40, height: 40, borderRadius: theme.custom.radius.full,
          background: hexToRgba(brand.primary, 0.06), border: `1px solid ${hexToRgba(brand.primary, 0.12)}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Box sx={{ width: 10, height: 10, borderRadius: theme.custom.radius.full, background: brand.primary, opacity: 0.3 }} />
        </Box>
      </motion.div>
    </Box>
  );
}

function FormFieldLabel({ icon: Icon, text }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
      <Icon sx={{ fontSize: 16, color: theme.custom.brand.primary }} />
      <Typography variant="body2" sx={{ fontWeight: 600, color: theme.custom.colors.textPrimary, fontSize: theme.custom.fontSize.small }}>
        {text}
      </Typography>
    </Box>
  );
}

export default function ContactModal({ open, onClose }) {
  const theme = useTheme();
  const { brand, accent, bg, border, radius, shadow, transition } = theme.custom;
  const { hexToRgba } = theme.custom;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const form = useForm({
    initialValues: { fullName: '', email: '', phone: '', country: 'US', budget: '', projectDetails: '' },
    requiredFields: ['fullName', 'email', 'phone', 'projectDetails'],
    onSubmit: async (formData) => {
      const selectedCountry = countries.find((c) => c.code === formData.country) || countries[0];
      await sendEmail({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: `${selectedCountry.dial} ${formData.phone.trim()}`,
        country: selectedCountry.name,
        countryCode: selectedCountry.code,
        budget: formData.budget || 'Not specified',
        projectDetails: formData.projectDetails.trim(),
        submittedAt: new Date().toISOString(),
      });
    },
  });

  const countryButtonRef = useRef(null);

  const selectedCountry = useMemo(
    () => countries.find((c) => c.code === form.formData.country) || countries[0],
    [form.formData.country],
  );

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        const el = document.getElementById('contact-fullname');
        if (el) el.focus();
      }, 100);
    }
  }, [open]);

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const leftPanel = (
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      p: { xs: 4, md: 5 }, height: '100%',
    }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: 800, fontSize: { xs: '2rem', md: '2.4rem' },
            lineHeight: 1.1, letterSpacing: '-0.03em',
            color: theme.custom.colors.textPrimary, mb: 2.5,
          }}
        >
          Get a Free<br />Consultation
        </Typography>

        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 0.75,
          px: 1.75, py: 0.75, borderRadius: radius.pill,
          background: hexToRgba(brand.primary, 0.1),
          border: `1px solid ${hexToRgba(brand.primary, 0.2)}`,
          mb: 3,
        }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: brand.primary }} />
          <Typography variant="caption" sx={{ fontWeight: 600, color: brand.primary, fontSize: theme.custom.fontSize.small }}>
            30-second form
          </Typography>
        </Box>

        <Typography variant="body1" sx={{
          color: theme.custom.colors.textSecondary, lineHeight: 1.7,
          maxWidth: 260, fontSize: theme.custom.fontSize.bodyMd,
        }}>
          Tell us about your project and we'll get back to you with the best solution for your business.
        </Typography>
      </Box>

      <Box>
        <ChatIllustration sx={{ height: { xs: 120, md: 160 } }} />
      </Box>
    </Box>
  );

  const formFields = (
    <>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2.5, md: 2 }, mb: 2 }}>
        <Box>
          <FormFieldLabel icon={PersonOutlineIcon} text="Full Name" />
          <FormName
            value={form.formData.fullName}
            onChange={(e) => form.handleChange('fullName', e.target.value)}
            onBlur={() => form.handleBlur('fullName')}
            error={form.errors.fullName}
            touched={form.touched.fullName}
          />
        </Box>
        <Box>
          <FormFieldLabel icon={EmailOutlinedIcon} text="Email Address" />
          <FormEmail
            value={form.formData.email}
            onChange={(e) => form.handleChange('email', e.target.value)}
            onBlur={() => form.handleBlur('email')}
            error={form.errors.email}
            touched={form.touched.email}
          />
        </Box>
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormFieldLabel icon={PhoneOutlinedIcon} text="Phone Number" />
        <FormPhone
          value={form.formData.phone}
          onChange={(e) => form.handlePhoneChange(e.target.value)}
          onPaste={(e) => form.handlePhonePaste(e, form.formData.phone)}
          onBlur={() => form.handleBlur('phone')}
          error={form.errors.phone}
          touched={form.touched.phone}
          country={form.formData.country}
          onCountryChange={(code) => form.handleChange('country', code)}
          countryError={form.errors.phone}
          countryTouched={form.touched.phone}
          buttonRef={countryButtonRef}
          sx={{ mb: 0 }}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormFieldLabel icon={AttachMoneyIcon} text="Budget" />
        <FormControl fullWidth>
          <Select
            value={form.formData.budget}
            displayEmpty
            onChange={(e) => form.handleChange('budget', e.target.value)}
            sx={{
              borderRadius: radius.xl,
              background: bg.input,
              color: form.formData.budget ? theme.custom.colors.textPrimary : theme.custom.colors.textMuted,
              fontSize: theme.custom.fontSize.bodyMd,
              height: 56,
              '& .MuiOutlinedInput-notchedOutline': { borderColor: border.light },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: border.default },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: brand.primary },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  background: theme.custom.bg.card,
                  border: `1px solid ${border.light}`,
                  borderRadius: radius.xl,
                  boxShadow: shadow.brandLight,
                  '& .MuiMenuItem-root': {
                    fontSize: theme.custom.fontSize.body,
                    color: theme.custom.colors.textSecondary,
                    py: 1.2,
                    '&:hover': { background: hexToRgba(brand.primary, 0.06) },
                    '&.Mui-selected': {
                      background: hexToRgba(brand.primary, 0.1),
                      '&:hover': { background: hexToRgba(brand.primary, 0.15) },
                    },
                  },
                },
              },
            }}
          >
            {budgetOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormFieldLabel icon={ChatBubbleOutlineIcon} text="Project Details" />
        <FormTextarea
          label=""
          value={form.formData.projectDetails}
          onChange={(e) => form.handleChange('projectDetails', e.target.value)}
          onBlur={() => form.handleBlur('projectDetails')}
          error={form.errors.projectDetails}
          touched={form.touched.projectDetails}
          rows={isMobile ? 4 : 5}
          maxLength={5000}
          showCount
          sx={{ mb: 0 }}
        />
      </Box>

      {form.submitError && (
        <Typography variant="body2" sx={{ color: accent.error, mb: 2, textAlign: 'center' }}>
          {form.submitError}
        </Typography>
      )}
    </>
  );

  const formActions = (
    <Box sx={{
      px: { xs: 3, md: 5 }, py: { xs: 2.5, md: 4 },
      display: 'flex', flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center', gap: { xs: 1.5, md: 2 },
    }}>
      <PrimaryButton
        type="submit"
        disabled={!form.isFormValid() || form.submitting}
        loading={form.submitting}
        sx={{
          px: { md: 5 }, py: 1.4,
          width: '100%',
          minWidth: 0,
          borderRadius: radius.md,
          fontSize: theme.custom.fontSize.bodyMd,
        }}
      >
        Request Consultation
      </PrimaryButton>
      <Button
        variant="text"
        type="button"
        onClick={handleClose}
        disabled={form.submitting}
        sx={{
          color: theme.custom.colors.textSecondary,
          fontWeight: 500, textTransform: 'none',
          px: 3, py: 1.2,
          transition: transition.normal,
          '&:hover': { color: theme.custom.colors.textPrimary, background: hexToRgba(brand.primary, 0.06) },
        }}
      >
        Cancel
      </Button>
    </Box>
  );

  const formPanel = isMobile ? (
    <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', ...hiddenScrollbarSx }}>
      <Box sx={{ px: 3, pt: 4, pb: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: 800, fontSize: '1.75rem',
            lineHeight: 1.15, letterSpacing: '-0.02em',
            color: theme.custom.colors.textPrimary, mb: 1.5,
          }}
        >
          Get a Free Consultation
        </Typography>
        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 0.75,
          px: 1.75, py: 0.75, borderRadius: radius.pill,
          background: hexToRgba(brand.primary, 0.1),
          border: `1px solid ${hexToRgba(brand.primary, 0.2)}`,
          mb: 2,
        }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: brand.primary }} />
          <Typography variant="caption" sx={{ fontWeight: 600, color: brand.primary, fontSize: theme.custom.fontSize.small }}>
            30-second form
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.7, fontSize: '0.95rem', mb: 1 }}>
          Tell us about your project and we'll get back to you with the best solution for your business.
        </Typography>
      </Box>
      <Box component="form" onSubmit={form.handleSubmit} noValidate sx={{ px: 3, pb: 3 }}>
        {formFields}
        {formActions}
      </Box>
    </Box>
  ) : (
    <Box sx={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flex: 1, minHeight: 0, overflowY: 'auto', px: 5, pt: 5, pb: 5, ...hiddenScrollbarSx }}>
        <Box sx={{ mb: 3.5 }} />
        {formFields}
      </Box>
      <Box component="form" onSubmit={form.handleSubmit} noValidate sx={{ flexShrink: 0 }}>
        {formActions}
      </Box>
    </Box>
  );

  if (form.submitted) {
    return (
      <BaseModal open={open} onClose={handleClose} contentSized>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Box sx={{ textAlign: 'center', px: { xs: 4, sm: 5 }, py: { xs: 4, sm: 5 } }}>
            <Box
              sx={{
                width: 56, height: 56,
                borderRadius: radius.full,
                background: hexToRgba(accent.success, 0.1),
                border: `2px solid ${hexToRgba(accent.success, 0.25)}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                mx: 'auto', mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: '1.6rem', color: accent.success }}>✓</Typography>
            </Box>
            <Typography variant="h5" sx={{
              color: theme.custom.colors.textPrimary, mb: 1, fontWeight: 600,
              fontSize: { xs: '1.25rem', sm: '1.4rem' },
            }}>
              Request Submitted!
            </Typography>
            <Typography variant="body1" sx={{
              color: theme.custom.colors.textSecondary, mb: 3,
              fontSize: theme.custom.fontSize.bodyMd, lineHeight: 1.6,
            }}>
              Thank you for reaching out.<br />
              We'll get back to you within 24 hours.
            </Typography>
            <PrimaryButton onClick={handleClose} sx={{ px: 5, py: 1.3 }}>
              Done
            </PrimaryButton>
          </Box>
        </motion.div>
      </BaseModal>
    );
  }

  return (
    <BaseModal open={open} onClose={handleClose} maxWidth="lg" fullWidth disableEnforceFocus>
      <Box sx={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${hexToRgba(brand.primary, 0.04)} 0%, ${bg.card} 40%, ${bg.light} 100%)`,
      }}>
        {!isMobile && (
          <Box sx={{
            width: '32%', flexShrink: 0,
            borderRight: `1px solid ${border.light}`,
            background: 'transparent',
          }}>
            {leftPanel}
          </Box>
        )}

        <Box sx={{
          flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
          background: 'transparent',
          minWidth: 0,
        }}>
          {formPanel}
        </Box>
      </Box>
    </BaseModal>
  );
}
