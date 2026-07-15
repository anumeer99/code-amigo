import { Box, TextField } from '@mui/material';
import { fieldSx } from '../../styles/formStyles';
import CountrySelector from '../../components/CountrySelector';

export default function FormPhone({
  value,
  onChange,
  onPaste,
  onBlur,
  error,
  touched,
  country,
  onCountryChange,
  countryError,
  countryTouched,
  countryButtonRef,
  sx,
}) {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, mb: 2.5, alignItems: 'flex-start', ...sx }}>
      <CountrySelector
        value={country}
        onChange={onCountryChange}
        error={countryError}
        touched={countryTouched}
        buttonRef={countryButtonRef}
      />
      <TextField
        fullWidth
        label="Phone Number"
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        onBlur={onBlur}
        error={touched && !!error}
        helperText={touched && error}
        required
        placeholder="Phone Number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 15 }}
        sx={{ ...fieldSx, mb: 0 }}
      />
    </Box>
  );
}
