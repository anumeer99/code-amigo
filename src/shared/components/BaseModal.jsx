import { Dialog, DialogContent, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { hiddenScrollbarSx } from '../styles/sectionStyles';

export default function BaseModal({ open, onClose, maxWidth = 'sm', fullWidth = true, children, disableEnforceFocus }) {
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      disableEnforceFocus={disableEnforceFocus}
      PaperProps={{
        sx: {
          borderRadius: maxWidth === false ? 0 : theme.custom.radius.xxl,
          background: theme.custom.glass.bg,
          backdropFilter: theme.custom.glass.blur,
          border: maxWidth === false ? 'none' : `1px solid ${theme.custom.glass.border}`,
          boxShadow: maxWidth === false ? 'none' : theme.custom.shadow.modal,
          m: maxWidth === false ? 0 : 2,
          maxHeight: maxWidth === false ? 'none' : 'calc(100vh - 32px)',
          overflow: 'hidden',
        },
      }}
      slotProps={{
        backdrop: {
          sx: { background: theme.custom.glass.backdrop, backdropFilter: theme.custom.glass.blurLight },
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflow: 'visible', ...hiddenScrollbarSx }}>
        <Box sx={{ maxHeight: maxWidth === false ? 'none' : 'calc(100vh - 64px)', overflowY: 'auto', ...hiddenScrollbarSx }}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
