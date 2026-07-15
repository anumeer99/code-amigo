import { TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { fieldSx } from '../../styles/formStyles';

export default function FormTextarea({
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  rows = 4,
  maxLength,
  helperText,
  showCount,
  sx,
}) {
  const theme = useTheme();
  const { hexToRgba } = theme.custom;
  const charCount = showCount && maxLength ? value?.length || 0 : null;

  return (
    <>
      <TextField
        fullWidth
        label={label}
        multiline
        rows={rows}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={touched && !!error}
        helperText={helperText !== undefined ? helperText : (touched && error)}
        required
        inputProps={maxLength ? { maxLength } : undefined}
        sx={{ ...fieldSx, mb: showCount ? 1 : undefined, ...sx }}
      />
      {showCount && maxLength && (
        <Typography
          variant="caption"
          sx={{ color: theme.custom.colors.textMuted, display: 'block', mb: 3, textAlign: 'right' }}
        >
          {charCount}/{maxLength}
        </Typography>
      )}
    </>
  );
}
