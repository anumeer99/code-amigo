import { Dialog, DialogContent, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { hiddenScrollbarSx } from '../styles/sectionStyles';

export default function BaseModal({ open, onClose, maxWidth = 'sm', fullWidth = true, children }) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      PaperProps={{
        sx: {
          borderRadius: theme.custom.radius.xxl,
          background: theme.custom.glass.bg,
          backdropFilter: theme.custom.glass.blur,
          border: `1px solid ${theme.custom.glass.border}`,
          boxShadow: theme.custom.shadow.modal,
          m: 2,
          maxHeight: 'calc(100vh - 32px)',
        },
      }}
      slotProps={{
        backdrop: {
          sx: { background: theme.custom.glass.backdrop, backdropFilter: theme.custom.glass.blurLight },
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflow: 'visible', ...hiddenScrollbarSx }}>
        <Box sx={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto', ...hiddenScrollbarSx }}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
