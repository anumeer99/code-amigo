import { useState, useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import CloudUploadOutlined from '@mui/icons-material/CloudUploadOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import CloseOutlined from '@mui/icons-material/CloseOutlined';

export default function FileUpload({ file, onFileSelect, onRemove, accept = '.pdf', label = 'Resume Upload', hint = 'PDF only \u2022 Maximum size: 3 MB' }) {
  const theme = useTheme();
  const { brand, accent, bg, radius, hexToRgba, transition, colors, border } = theme.custom;
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === 'dragenter' || e.type === 'dragover'); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files?.[0]) onFileSelect(e.dataTransfer.files[0]); };
  const handleClick = () => fileInputRef.current?.click();
  const handleFileChange = (e) => { if (e.target.files?.[0]) onFileSelect(e.target.files[0]); e.target.value = ''; };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (file) {
    return (
      <Box sx={{ p: 3, borderRadius: radius.lg, border: `1px solid ${hexToRgba(accent.green, 0.3)}`, background: hexToRgba(accent.green, 0.05), display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ width: 56, height: 56, borderRadius: radius.md, background: hexToRgba(accent.green, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <DescriptionOutlined sx={{ fontSize: '1.8rem', color: accent.green }} />
        </Box>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body1" sx={{ color: colors.textPrimary, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</Typography>
          <Typography variant="body2" sx={{ color: colors.textSecondary, fontSize: theme.custom.fontSize.small }}>{formatSize(file.size)}</Typography>
        </Box>
        <IconButton onClick={onRemove} sx={{ color: colors.textMuted, '&:hover': { color: accent.error, background: hexToRgba(accent.error, 0.1) } }} aria-label="Remove file">
          <CloseOutlined />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
      onClick={handleClick} tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(); } }}
      sx={{
        p: 4, borderRadius: radius.lg, border: `2px dashed ${dragActive ? brand.primary : hexToRgba(colors.textPrimary, 0.12)}`,
        background: dragActive ? hexToRgba(brand.primary, 0.08) : bg.input, textAlign: 'center', cursor: 'pointer',
        transition: transition.normal, outline: 'none',
        '&:hover': { borderColor: dragActive ? brand.primary : hexToRgba(brand.primary, 0.5), background: dragActive ? hexToRgba(brand.primary, 0.12) : hexToRgba(brand.primary, 0.04) },
        '&:focus-visible': { borderColor: brand.primary, boxShadow: `0 0 0 3px ${hexToRgba(brand.primary, 0.2)}` },
      }}
    >
      <input ref={fileInputRef} type="file" accept={accept} onChange={handleFileChange} style={{ display: 'none' }} aria-label={`Upload ${label}`} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box sx={{
          width: 64, height: 64, borderRadius: radius.full, background: dragActive ? hexToRgba(brand.primary, 0.15) : bg.chip,
          border: `1px solid ${dragActive ? brand.primary : border.light}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: dragActive ? brand.primary : colors.textMuted, transition: transition.normal,
        }}>
          <CloudUploadOutlined sx={{ fontSize: '2rem' }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: colors.textPrimary, fontWeight: 600, mb: 0.5 }}>Drag & Drop your {label.toLowerCase()} here</Typography>
          <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>or</Typography>
          <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleClick(); }} sx={{ borderColor: border.hover, color: colors.textPrimary, '&:hover': { borderColor: brand.primary, background: hexToRgba(brand.primary, 0.1) } }}>
            Browse Files
          </Button>
        </Box>
        <Typography variant="caption" sx={{ color: colors.textMuted }}>{hint}</Typography>
      </Box>
    </Box>
  );
}
