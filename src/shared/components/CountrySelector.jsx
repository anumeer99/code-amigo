import { useState, useEffect, useRef, useMemo } from 'react';
import {
  Box, Typography, TextField, Button, ClickAwayListener, Paper,
} from '@mui/material';
import { useTheme } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { countries } from '../data/countries';
import { hiddenScrollbarSx } from '../styles/sectionStyles';

const ROW_HEIGHT = 40;
const LIST_MAX_HEIGHT = 260;

function CountryRow({ country, selected, highlighted, onClick }) {
  const theme = useTheme();
  const { brand, radius, hexToRgba, colors, fontSize } = theme.custom;
  const { palette } = theme;

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: ROW_HEIGHT,
        px: 1.5,
        borderRadius: radius.xs,
        cursor: 'pointer',
        background: selected
          ? hexToRgba(brand.primary, 0.1)
          : highlighted
          ? hexToRgba(colors.textPrimary, 0.06)
          : 'transparent',
        transition: theme.custom.transition.fast,
        '&:hover': {
          background: selected
            ? hexToRgba(brand.primary, 0.15)
            : hexToRgba(colors.textPrimary, 0.06),
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 0 }}>
        <Typography
          variant="body2"
          sx={{
            color: selected ? colors.textPrimary : hexToRgba(colors.textPrimary, 0.82),
            fontSize: fontSize.tiny,
            fontWeight: selected ? 600 : 400,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {country.name}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: selected ? brand.primary : colors.textMuted,
          fontSize: fontSize.tiny,
          fontWeight: 500,
          fontVariantNumeric: 'tabular-nums',
          flexShrink: 0,
          ml: 1.5,
        }}
      >
        {country.dial}
      </Typography>
      {selected && (
        <CheckIcon sx={{ color: brand.primary, fontSize: '1rem', ml: 1, flexShrink: 0 }} />
      )}
    </Box>
  );
}

export default function CountrySelector({ value, onChange, error, touched, usePopper = false, buttonRef: externalButtonRef }) {
  const theme = useTheme();
  const { brand, bg, border, radius, shadow, hexToRgba, colors, fontSize } = theme.custom;

  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const internalButtonRef = useRef(null);
  const buttonRef = externalButtonRef || internalButtonRef;
  const searchInputRef = useRef(null);
  const listRef = useRef(null);

  const selectedCountry = useMemo(() => countries.find((c) => c.code === value) || countries[0], [value]);

  const filteredCountries = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return countries;
    return countries.filter(
      (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.dial.includes(q)
    );
  }, [search]);

  useEffect(() => { setHighlightedIndex(0); }, [search]);

  useEffect(() => {
    if (open && filteredCountries.length > 0) {
      const idx = filteredCountries.findIndex((c) => c.code === value);
      if (idx >= 0) {
        setHighlightedIndex(idx);
        setTimeout(() => {
          if (listRef.current) {
            const scrollTop = idx * ROW_HEIGHT;
            const listHeight = listRef.current.clientHeight;
            listRef.current.scrollTop = Math.max(0, scrollTop - listHeight / 2 + ROW_HEIGHT / 2);
          }
        }, 50);
      }
    }
  }, [open, filteredCountries, value]);

  useEffect(() => {
    if (open && searchInputRef.current) setTimeout(() => searchInputRef.current?.focus(), 60);
  }, [open]);

  const handleSelect = (code) => { onChange(code); setOpen(false); setSearch(''); };
  const handleToggle = () => setOpen((p) => !p);

  const handleKeyDown = (e) => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); setOpen(true); }
      return;
    }
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); setHighlightedIndex((p) => Math.min(p + 1, filteredCountries.length - 1)); break;
      case 'ArrowUp': e.preventDefault(); setHighlightedIndex((p) => Math.max(p - 1, 0)); break;
      case 'Enter': e.preventDefault(); if (filteredCountries[highlightedIndex]) handleSelect(filteredCountries[highlightedIndex].code); break;
      case 'Escape': e.preventDefault(); setOpen(false); setSearch(''); break;
      case 'Tab': setOpen(false); setSearch(''); break;
      default: break;
    }
  };

  useEffect(() => {
    if (listRef.current && filteredCountries.length > 0) {
      const scrollTop = highlightedIndex * ROW_HEIGHT;
      const listHeight = listRef.current.clientHeight;
      if (scrollTop < listRef.current.scrollTop) listRef.current.scrollTop = scrollTop;
      else if (scrollTop + ROW_HEIGHT > listRef.current.scrollTop + listHeight) listRef.current.scrollTop = scrollTop + ROW_HEIGHT - listHeight;
    }
  }, [highlightedIndex, filteredCountries.length]);

  const borderColor = error && touched ? theme.palette.error.main : border.light;

  const countryButtonSx = {
    width: '100%',
    height: 56,
    borderRadius: radius.sm,
    border: `1px solid ${border.light}`,
    background: bg.input,
    color: colors.textPrimary,
    textTransform: 'none',
    minHeight: 56,
    px: 1.5,
    '&:hover': {
      borderColor: border.hover,
      background: hexToRgba(colors.textPrimary, 0.04),
    },
  };

  const searchField = (
    <TextField
      inputRef={searchInputRef}
      fullWidth
      placeholder="Search countries..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
      size="small"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: radius.xs,
          background: bg.input,
          color: colors.textPrimary,
          fontSize: fontSize.label,
          height: 32,
          '& fieldset': { borderColor: border.light },
          '&:hover fieldset': { borderColor: border.default },
          '&.Mui-focused fieldset': { borderColor: brand.primary, borderWidth: 1 },
        },
        '& .MuiInputBase-input': { py: '5px !important', '&::placeholder': { color: hexToRgba(colors.textPrimary, 0.3), opacity: 1 } },
      }}
    />
  );

  const listContent = (
    <Box ref={listRef} sx={{ maxHeight: LIST_MAX_HEIGHT, overflowY: 'auto', px: 0.5, pb: 0.5, ...hiddenScrollbarSx }}>
      {filteredCountries.length === 0 ? (
        <Typography variant="body2" sx={{ color: colors.textMuted, textAlign: 'center', py: 3, fontSize: fontSize.tiny }}>No countries found</Typography>
      ) : (
        filteredCountries.map((c, i) => (
          <CountryRow key={c.code} country={c} selected={value === c.code} highlighted={i === highlightedIndex} onClick={() => handleSelect(c.code)} />
        ))
      )}
    </Box>
  );

  return (
    <Box sx={{ position: 'relative', width: { xs: 110, md: 160 }, flexShrink: 0 }}>
      <Button
        ref={buttonRef}
        variant="outlined"
        disableRipple
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        sx={{ ...countryButtonSx, borderColor }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="body2" sx={{ color: colors.textPrimary, fontSize: fontSize.med, fontWeight: 500, lineHeight: 1 }}>{selectedCountry.code}</Typography>
          <Typography variant="body2" sx={{ color: colors.textMuted, fontSize: fontSize.tiny, fontWeight: 400, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{selectedCountry.dial}</Typography>
        </Box>
      </Button>

      {open && (
        <Box sx={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 1300, width: 'min(320px, 80vw)' }}>
          <ClickAwayListener onClickAway={() => { setOpen(false); setSearch(''); }}>
            <Paper sx={{ background: bg.card, border: `1px solid ${border.light}`, borderRadius: radius.sm, boxShadow: shadow.modal, overflow: 'hidden' }}>
              <Box sx={{ p: 1, pb: 0.5 }}>{searchField}</Box>
              {listContent}
            </Paper>
          </ClickAwayListener>
        </Box>
      )}
    </Box>
  );
}
