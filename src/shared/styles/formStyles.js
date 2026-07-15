export const fieldSx = {
  mb: 2.5,
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    background: 'var(--color-surface-card)',
    color: 'var(--color-text-primary)',
    '& fieldset': { borderColor: 'var(--color-border-default)' },
    '&:hover fieldset': { borderColor: 'var(--color-primary)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--color-primary)' },
  },
  '& .MuiInputLabel-root': { color: 'var(--color-text-secondary)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--color-primary)' },
  '& .MuiFormHelperText-root': { fontSize: '0.78rem', mt: 0.5, color: 'var(--color-text-helper)' },
  '& .MuiFormHelperText-root.Mui-error': { color: 'var(--color-error)' },
};
