import { SxProps, Theme } from '@mui/material';

export const box: SxProps<Theme> = {
  display: 'flex',
};

const initialWidth = 220;
export const appBar: SxProps<Theme> = {
  position: 'fixed',
  width: `calc(100% - ${initialWidth}px)`,
};

export const drawer: SxProps<Theme> = {
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: initialWidth,
    boxSizing: 'border-box',
  },
};

export const main: SxProps<Theme> = {
  flexGrow: 1,
  bgcolor: 'background.default',
  p: 2,
};
