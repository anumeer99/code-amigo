import { useEffect, useRef, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { countries } from '../data/countries';
import BaseModal from './BaseModal';
import useForm from '../hooks/useForm';
import { sendEmail } from '../services/api';
import { PrimaryButton } from '../ui/Button';
import { FormName, FormEmail, FormPhone, FormTextarea } from '../ui/form';
import { hiddenScrollbarSx } from '../styles/sectionStyles';
import { budgetOptions } from '../data/formOptions';

export default function ContactModal({ open, onClose }) {
  const theme = useTheme();
  const { brand, accent, bg, border, radius, shadow, transition } = theme.custom;
  const { hexToRgba } = theme.custom;

  const form = useForm({
    initialValues: { fullName: '', email: '', phone: '', country: 'PK', budget: '', projectDetails: '' },
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

  return (
    <BaseModal open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      {form.submitted ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 64px)' }}>
              <Box sx={{ flex: 1, overflowY: 'auto', p: { xs: 3, sm: 4 }, ...hiddenScrollbarSx }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: radius.full,
                        background: hexToRgba(accent.success, 0.1),
                        border: `2px solid ${hexToRgba(accent.success, 0.25)}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      <Typography sx={{ fontSize: '1.8rem', color: accent.success }}>✓</Typography>
                    </Box>
                    <Typography variant="h5" sx={{ color: theme.custom.colors.textPrimary, mb: 1.5, fontWeight: 600 }}>
                      Request Submitted!
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, mb: 4 }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </Typography>
                    <PrimaryButton onClick={handleClose} sx={{ px: 4 }}>Done</PrimaryButton>
                  </Box>
                </motion.div>
              </Box>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: 'calc(100vh - 64px)' }}>
              <Box
                sx={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 2,
                  p: { xs: 3, sm: 4 },
                  pb: 2,
                  background: theme.custom.glass.bg,
                  backdropFilter: theme.custom.glass.blur,
                  borderBottom: `1px solid ${border.light}`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Typography variant="h5" sx={{ color: theme.custom.colors.textPrimary, fontWeight: 700, mb: 1, pr: 4 }}>
                    Get a Free Consultation
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.6, maxWidth: 540 }}>
                    Tell us about your project and we'll get back to you with the best solution for your business.
                  </Typography>
                </motion.div>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  overflowY: 'auto',
                  p: { xs: 3, sm: 4 },
                  pt: 2,
                  ...hiddenScrollbarSx,
                }}
              >
                <Box component="form" onSubmit={form.handleSubmit} noValidate>
                  <FormName
                    value={form.formData.fullName}
                    onChange={(e) => form.handleChange('fullName', e.target.value)}
                    onBlur={() => form.handleBlur('fullName')}
                    error={form.errors.fullName}
                    touched={form.touched.fullName}
                  />

                  <FormEmail
                    value={form.formData.email}
                    onChange={(e) => form.handleChange('email', e.target.value)}
                    onBlur={() => form.handleBlur('email')}
                    error={form.errors.email}
                    touched={form.touched.email}
                  />

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
                  />

                  <FormControl fullWidth sx={{ mb: 2.5 }}>
                    <InputLabel
                      id="budget-label"
                      sx={{
                        color: theme.custom.colors.textSecondary,
                        '&.Mui-focused': { color: brand.primary },
                      }}
                    >
                      Budget (Optional)
                    </InputLabel>
                    <Select
                      labelId="budget-label"
                      value={form.formData.budget}
                      label="Budget (Optional)"
                      onChange={(e) => form.handleChange('budget', e.target.value)}
                      sx={{
                        borderRadius: radius.xl,
                        background: bg.input,
                        color: theme.custom.colors.textPrimary,
                        fontSize: theme.custom.fontSize.bodyMd,
                        height: 56,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: border.light,
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: border.default,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: brand.primary,
                        },
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
                              '&:hover': {
                                background: hexToRgba(brand.primary, 0.06),
                              },
                              '&.Mui-selected': {
                                background: hexToRgba(brand.primary, 0.1),
                                '&:hover': {
                                  background: hexToRgba(brand.primary, 0.15),
                                },
                              },
                            },
                          },
                        },
                      }}
                    >
                      {budgetOptions.map((opt) => (
                        <MenuItem key={opt} value={opt}>
                          {opt}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormTextarea
                    label="Project Details"
                    value={form.formData.projectDetails}
                    onChange={(e) => form.handleChange('projectDetails', e.target.value)}
                    onBlur={() => form.handleBlur('projectDetails')}
                    error={form.errors.projectDetails}
                    touched={form.touched.projectDetails}
                    rows={5}
                    maxLength={2000}
                    showCount
                  />

                  {form.submitError && (
                    <Typography variant="body2" sx={{ color: accent.error, mb: 2, textAlign: 'center' }}>
                      {form.submitError}
                    </Typography>
                  )}

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      disabled={form.submitting}
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: radius.xl,
                        borderColor: border.default,
                        color: theme.custom.colors.textSecondary,
                        transition: transition.normal,
                        '&:hover': {
                          borderColor: border.hover,
                          background: hexToRgba(brand.primary, 0.06),
                        },
                      }}
                    >
                      Cancel
                    </Button>
                    <PrimaryButton
                      type="submit"
                      disabled={!form.isFormValid() || form.submitting}
                      loading={form.submitting}
                      sx={{ px: 4 }}
                    >
                      Submit Request
                    </PrimaryButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
    </BaseModal>
  );
}
