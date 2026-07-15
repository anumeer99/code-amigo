import { useState, useCallback, useMemo } from 'react';
import { formatPhone, validateField } from '../utils/formatters';

export default function useForm({ initialValues, requiredFields, onSubmit }) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = useCallback((field, value) => validateField(field, value), []);

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => {
      if (prev[field]) {
        setErrors((e) => ({ ...e, [field]: validate(field, value) }));
      }
      return prev;
    });
  }, [validate]);

  const handleBlur = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validate(field, formData[field]) }));
  }, [validate, formData]);

  const isFormValid = useCallback(() => {
    return requiredFields.every((field) => !validate(field, formData[field]));
  }, [validate, formData, requiredFields]);

  const sanitizePhone = useCallback((val) => formatPhone(val), []);

  const handlePhoneChange = useCallback((value) => {
    handleChange('phone', sanitizePhone(value));
  }, [handleChange, sanitizePhone]);

  const handlePhonePaste = useCallback((e, phoneValue) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const cleaned = sanitizePhone(pasted);
    const combined = sanitizePhone(phoneValue + cleaned);
    handleChange('phone', combined);
  }, [handleChange, sanitizePhone]);

  const validateAll = useCallback(() => {
    const allTouched = {};
    const allErrors = {};
    requiredFields.forEach((field) => {
      allTouched[field] = true;
      allErrors[field] = validate(field, formData[field]);
    });
    setTouched(allTouched);
    setErrors(allErrors);
    return allErrors;
  }, [requiredFields, validate, formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const allErrors = validateAll();
    if (Object.values(allErrors).some((err) => err)) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      await onSubmit(formData);
      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    }
  }, [formData, validateAll, onSubmit]);

  const reset = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setSubmitting(false);
    setSubmitted(false);
    setSubmitError('');
  }, [initialValues]);

  const resetSubmission = useCallback(() => {
    setSubmitted(false);
    setSubmitError('');
  }, []);

  return useMemo(() => ({
    formData,
    errors,
    touched,
    submitting,
    submitted,
    submitError,
    setSubmitError,
    handleChange,
    handleBlur,
    isFormValid,
    handleSubmit,
    reset,
    resetSubmission,
    sanitizePhone,
    handlePhoneChange,
    handlePhonePaste,
    validateAll,
    setFormData,
    setTouched,
    setErrors,
  }), [
    formData, errors, touched, submitting, submitted, submitError,
    handleChange, handleBlur, isFormValid, handleSubmit, reset, resetSubmission,
    sanitizePhone, handlePhoneChange, handlePhonePaste, validateAll,
  ]);
}
