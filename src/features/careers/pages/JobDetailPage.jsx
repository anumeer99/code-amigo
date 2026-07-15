import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Box, Typography, Button, Alert,
  Tabs, Tab, Chip, Snackbar, useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ShareOutlined, CheckCircleOutlined,
} from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useParams, useNavigate } from 'react-router-dom';
import { jobs } from '../data/jobs';
import { fadeInUp, staggerContainer } from '../../../shared/animations/animations';
import { Container } from '@mui/material';
import { ROUTES } from '../../../shared/constants/routes';
import { CONTACT } from '../../../shared/constants/company';
import { minHeightPageSx, pageHeroSx, purpleBadgeSx, radialOverlay } from '../../../shared/styles/sectionStyles';
import { gradientButtonSx } from '../../../shared/styles/buttonStyles';
import { PrimaryButton } from '../../../shared/ui/Button';
import BackLink from '../../../shared/ui/BackLink';
import { InfoChip } from '../../../shared/ui/Chip';
import { FormName, FormEmail, FormPhone, FormTextarea, FileUpload } from '../../../shared/ui/form';
import { countries } from '../../../shared/data/countries';
import useForm from '../../../shared/hooks/useForm';
import { applyJob } from '../../../shared/services/api';


function ShareButton({ url, onSuccess }) {
  const theme = useTheme();
  const { brand, accent, bg, radius, hexToRgba } = theme.custom;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Job Opportunity at Code Amigo', text: 'Check out this job opportunity at Code Amigo', url });
        onSuccess?.('Shared successfully!');
      } catch (err) { if (err.name !== 'AbortError') await copyToClipboard(); }
    } else { await copyToClipboard(); }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      onSuccess?.('Link copied successfully!');
      setTimeout(() => setCopied(false), 2000);
    } catch { onSuccess?.('Failed to copy link.'); }
  };

  return (
    <Button
      variant="outlined"
      startIcon={copied ? <CheckCircleOutlined /> : <ShareOutlined />}
      onClick={handleShare}
      sx={{
        borderColor: copied ? accent.green : theme.custom.border.default,
        color: copied ? accent.green : theme.custom.colors.textPrimary,
        '&:hover': { borderColor: copied ? accent.green : theme.custom.border.hover, background: copied ? hexToRgba(accent.green, 0.1) : hexToRgba(brand.primary, 0.06) },
        px: 3, py: 1, borderRadius: radius.sm,
      }}
    >
      {copied ? 'Copied!' : 'Share this Job'}
    </Button>
  );
}

function SectionHeading({ title, description }) {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ color: theme.custom.colors.textPrimary, fontWeight: 600, mb: 1 }}>{title}</Typography>
      {description && <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, lineHeight: 1.6 }}>{description}</Typography>}
    </Box>
  );
}

function BulletList({ items, icon = '\u2022' }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {items.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
          <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, fontSize: '1.2rem', lineHeight: 1.7, flexShrink: 0, mt: 0.1 }}>{icon}</Typography>
          <Typography variant="body1" sx={{ color: theme.custom.colors.textPrimary, lineHeight: 1.7, flex: 1 }}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}


export default function JobDetailPage() {
  const theme = useTheme();
  const { brand, accent, bg, radius, shadow, hexToRgba } = theme.custom;
  const { slug } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);
  const [shareMessage, setShareMessage] = useState('');
  const [showShareToast, setShowShareToast] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const [duplicateError, setDuplicateError] = useState('');
  const [localSubmitting, setLocalSubmitting] = useState(false);
  const [localSubmitted, setLocalSubmitted] = useState(false);

  const job = useMemo(() => jobs.find((j) => j.slug === slug), [slug]);

  useEffect(() => { if (shareMessage) { setShowShareToast(true); setTimeout(() => setShowShareToast(false), 3000); } }, [shareMessage]);

  const form = useForm({
    initialValues: { fullName: '', email: '', phone: '', country: 'PK', address: '', resume: null },
    requiredFields: ['fullName', 'email', 'phone', 'address', 'resume'],
    onSubmit: async (formData) => {
      const selectedCountry = countries.find((c) => c.code === formData.country) || countries[0];
      await applyJob({
        jobId: job.id, jobSlug: job.slug, jobTitle: job.title,
        fullName: formData.fullName.trim(), email: formData.email.trim(),
        phone: `${selectedCountry.dial} ${formData.phone.trim()}`,
        country: selectedCountry.name, countryCode: selectedCountry.code,
        address: formData.address.trim(),
        resumeFileName: formData.resume.name, resumeFileSize: formData.resume.size,
        submittedAt: new Date().toISOString(),
      });
    },
  });

  const handleFileSelect = (file) => {
    setDuplicateError('');
    form.handleChange('resume', file);
  };

  const handleRemoveFile = () => {
    form.handleChange('resume', null);
    form.setErrors((p) => ({ ...p, resume: '' }));
    form.setTouched((p) => ({ ...p, resume: false }));
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setDuplicateError('');

    const allErrors = form.validateAll();
    if (Object.values(allErrors).some((err) => err)) return;

    setLocalSubmitting(true);
    form.setSubmitError('');

    try {
      const fd = form.formData;
      const selectedCountry = countries.find((c) => c.code === fd.country) || countries[0];

      const resumeBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(fd.resume);
      });

      await applyJob({
        jobId: job.id, jobSlug: job.slug, jobTitle: job.title,
        fullName: fd.fullName.trim(), email: fd.email.trim(),
        phone: `${selectedCountry.dial} ${fd.phone.trim()}`,
        country: selectedCountry.name, countryCode: selectedCountry.code,
        address: fd.address.trim(),
        resumeFileName: fd.resume.name, resumeFileSize: fd.resume.size,
        resumeBase64,
        submittedAt: new Date().toISOString(),
      });
      setLocalSubmitting(false);
      setLocalSubmitted(true);
      form.reset();
    } catch (err) {
      setLocalSubmitting(false);
      if (err.status === 409 && err.data?.duplicate) {
        setDuplicateError(err.data.message || "You've already applied for this position using this email address and phone number. We have received your application and will contact you if your profile is shortlisted.");
      } else {
        form.setSubmitError(err.message || `Something went wrong. Please try again or email us directly at ${CONTACT.email.careers}.`);
      }
    }
  }, [job, form]);

  const handleApplyClick = () => {
    setTab(1);
    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100);
  };

  if (!job) {
    return (
      <Box sx={{ minHeight: '100vh', background: theme.custom.bg.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h4" sx={{ color: theme.custom.colors.textPrimary }} gutterBottom>Job Not Found</Typography>
          <Typography sx={{ color: theme.custom.colors.textSecondary, mb: 3 }}>The job you're looking for doesn't exist or has been removed.</Typography>
          <Button variant="contained" onClick={() => navigate(ROUTES.CAREERS)} sx={{ borderRadius: radius.sm }}>Back to Careers</Button>
        </Box>
      </Box>
    );
  }

  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Box sx={minHeightPageSx}>
      {/* Hero */}
      <Box sx={pageHeroSx}>
        <Box sx={radialOverlay(brand.primary, { opacity: 0.08 })} />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Container maxWidth="md">
            <BackLink to={ROUTES.CAREERS} label="Back to Careers" />
            <motion.div {...fadeInUp}>
              <Chip icon={<WorkOutlineIcon sx={{ fontSize: 16 }} />} label={job.department} sx={purpleBadgeSx} />
              <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3rem', lg: '3.5rem' }, color: theme.custom.colors.textPrimary, mb: 2, lineHeight: 1.2 }}>{job.title}</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <WorkOutlineIcon sx={{ fontSize: 14, color: theme.custom.colors.textSecondary }} />
                  <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.small }}>{job.type}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 14, color: theme.custom.colors.textSecondary }} />
                  <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, fontSize: theme.custom.fontSize.small }}>{job.location}</Typography>
                </Box>
                <InfoChip label={job.type} />
              </Box>
            </motion.div>
          </Container>
        </Box>
      </Box>

      {/* Tabs & Content */}
      <Container maxWidth="md" sx={{ pb: 10, position: 'relative', zIndex: 1 }}>
        <motion.div {...staggerContainer}>
          <Tabs
            value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth"
            sx={{
              mb: 4,
              '& .MuiTabs-indicator': { background: brand.gradient, height: 3, borderRadius: `${radius.xs} ${radius.xs} 0 0` },
              '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, fontSize: theme.custom.fontSize.bodyMd, color: theme.custom.colors.textSecondary, minHeight: 56, px: 3, '&.Mui-selected': { color: theme.custom.colors.textPrimary }, '&:hover': { color: theme.custom.colors.textPrimary, background: hexToRgba(brand.primary, 0.04) } },
            }}
          >
            <Tab label="Overview" />
            <Tab label="Application" />
          </Tabs>

          {/* Overview Tab */}
          {tab === 0 && (
            <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <ShareButton url={pageUrl} onSuccess={setShareMessage} />
              </Box>

              <SectionHeading title="Job Description" description="A comprehensive overview of what this role entails and how you'll contribute to our team." />
              <Typography variant="body1" sx={{ color: theme.custom.colors.textPrimary, lineHeight: 1.8, mb: 5, whiteSpace: 'pre-line' }}>{job.description}</Typography>

              <SectionHeading title="Key Responsibilities" description="Your day-to-day activities and the impact you'll make in this role." />
              <BulletList items={job.responsibilities} />
              <Box sx={{ mb: 5 }} />

              <SectionHeading title="Qualifications & Skills" description="The experience and capabilities we're looking for in an ideal candidate." />
              <BulletList items={job.qualifications} />
              <Box sx={{ mb: 5 }} />

              {job.niceToHave?.length > 0 && (
                <>
                  <SectionHeading title="Nice to Have" description="Bonus skills that would make you stand out (not required)." />
                  <BulletList items={job.niceToHave} icon={"\u2726"} />
                  <Box sx={{ mb: 5 }} />
                </>
              )}

              <Box sx={{ textAlign: 'center', pt: 2, borderTop: `1px solid ${theme.custom.border.light}` }}>
                <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />} onClick={handleApplyClick}
                  sx={gradientButtonSx}>
                  Apply for this Job
                </Button>
              </Box>
            </motion.div>
          )}

          {/* Application Tab */}
          {tab === 1 && (
            <motion.div key="application" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {localSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Box sx={{ width: 80, height: 80, borderRadius: radius.full, background: hexToRgba(accent.green, 0.1), border: `2px solid ${hexToRgba(accent.green, 0.3)}`, display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                      <CheckCircleOutlined sx={{ fontSize: '2.5rem', color: accent.green }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: theme.custom.colors.textPrimary, mb: 1.5, fontWeight: 600 }}>Application Submitted Successfully!</Typography>
                    <Typography variant="body1" sx={{ color: theme.custom.colors.textSecondary, mb: 4, maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}>
                      Thank you for applying to <strong>{job.title}</strong>. Our recruitment team will review your application and contact you if your profile matches the role.
                    </Typography>
                    <PrimaryButton onClick={() => navigate(ROUTES.CAREERS)} sx={{ px: 5 }}>
                      Back to Careers
                    </PrimaryButton>
                  </Box>
                </motion.div>
              ) : (
                <>
                  <SectionHeading title="Personal Information" description="Please fill out the form below to apply for this position." />

                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Full Name & Email */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2.5 }}>
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
                    </Box>

                    {/* Phone Number */}
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
                    />

                    {/* Address */}
                    <FormTextarea
                      label="Address"
                      value={form.formData.address}
                      onChange={(e) => form.handleChange('address', e.target.value)}
                      onBlur={() => form.handleBlur('address')}
                      error={form.errors.address}
                      touched={form.touched.address}
                      rows={2}
                      helperText={form.touched.address ? (form.errors.address || 'Include your city, region, and country so employers can easily manage your application.') : 'Include your city, region, and country so employers can easily manage your application.'}
                    />

                    {/* Resume Upload */}
                    <Typography variant="body2" sx={{ color: theme.custom.colors.textSecondary, mb: 1.5, fontWeight: 500, fontSize: theme.custom.fontSize.small }}>Resume Upload</Typography>
                    <FileUpload file={form.formData.resume} onFileSelect={handleFileSelect} onRemove={handleRemoveFile} />
                    {form.touched.resume && form.errors.resume && (
                      <Typography variant="body2" sx={{ color: accent.error, fontSize: theme.custom.fontSize.label, mt: 0.5 }}>{form.errors.resume}</Typography>
                    )}
                    <Box sx={{ mb: 2.5 }} />

                    {/* Errors */}
                    {duplicateError && (
                      <Alert severity="warning" sx={{ mb: 3, borderRadius: radius.sm, background: hexToRgba(accent.amber, 0.06), border: `1px solid ${hexToRgba(accent.amber, 0.25)}`, '& .MuiAlert-icon': { color: accent.amber } }}>
                        {duplicateError}
                      </Alert>
                    )}
                    {form.submitError && (
                      <Alert severity="error" sx={{ mb: 3, borderRadius: radius.sm, background: hexToRgba(accent.error, 0.06), border: `1px solid ${hexToRgba(accent.error, 0.25)}`, '& .MuiAlert-icon': { color: accent.error } }}>
                        {form.submitError}
                      </Alert>
                    )}

                    {/* Submit */}
                    <PrimaryButton
                      type="submit"
                      disabled={!form.isFormValid() || localSubmitting}
                      loading={localSubmitting}
                      sx={{ alignSelf: 'center', px: 5 }}
                    >
                      Submit Application
                    </PrimaryButton>
                  </Box>
                </>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Share Toast */}
      <Snackbar
        open={showShareToast} autoHideDuration={3000} onClose={() => setShowShareToast(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setShowShareToast(false)} severity="success" sx={{ background: theme.custom.glass.bg, backdropFilter: theme.custom.glass.blur, border: `1px solid ${hexToRgba(accent.green, 0.3)}`, color: theme.custom.colors.textPrimary }}>
          {shareMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
