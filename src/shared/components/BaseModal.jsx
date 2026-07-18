import { Dialog, DialogContent, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { hiddenScrollbarSx } from '../styles/sectionStyles';

export default function BaseModal({ open, onClose, maxWidth = 'sm', fullWidth = true, children, disableEnforceFocus, contentSized }) {
  const theme = useTheme();
  const isEdge = maxWidth === false;
  const auto = isEdge || contentSized;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={contentSized ? false : fullWidth}
      disableEnforceFocus={disableEnforceFocus}
      PaperProps={{
        sx: {
          borderRadius: auto ? 0 : theme.custom.radius.xxl,
          background: auto ? 'transparent' : theme.custom.glass.bg,
          backdropFilter: auto ? 'none' : theme.custom.glass.blur,
          border: auto ? 'none' : `1px solid ${theme.custom.glass.border}`,
          boxShadow: auto ? 'none' : theme.custom.shadow.modal,
          m: auto ? 0 : 2,
          maxHeight: auto ? 'none' : { xs: '85vh', md: 'calc(100vh - 64px)' },
          overflow: auto ? 'visible' : 'hidden',
          width: contentSized ? 'auto' : undefined,
          minWidth: contentSized ? { xs: 'calc(100vw - 32px)', sm: 380 } : undefined,
          maxWidth: contentSized ? { xs: 'calc(100vw - 32px)', sm: 480 } : undefined,
        },
      }}
      slotProps={{
        backdrop: {
          sx: { background: theme.custom.glass.backdrop, backdropFilter: theme.custom.glass.blurLight },
        },
      }}
    >
      <DialogContent sx={{ p: 0, overflow: 'visible', ...hiddenScrollbarSx }}>
        <Box sx={{
          height: auto ? 'auto' : { xs: '85vh', md: 'calc(100vh - 64px)' },
          display: 'flex',
          flexDirection: 'column',
          overflow: auto ? 'visible' : 'hidden',
        }}>
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
