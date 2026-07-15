import { TextField } from '@mui/material';
import { fieldSx } from '../../styles/formStyles';

export default function FormName({ value, onChange, onBlur, error, touched, sx }) {
  return (
    <TextField
      fullWidth
      label="Full Name"
      required
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={touched && !!error}
      helperText={touched && error}
      sx={{ ...fieldSx, ...sx }}
    />
  );
}
