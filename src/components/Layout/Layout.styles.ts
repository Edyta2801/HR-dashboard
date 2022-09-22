import { Styles } from 'theme/theme';

export const box: Styles = {
  display: 'flex',
};

const initialWidth = 220;
export const appBar: Styles = {
  position: 'fixed',
  width: `calc(100% - ${initialWidth}px)`,
};

export const drawer: Styles = {
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: initialWidth,
    boxSizing: 'border-box',
  },
};

export const main: Styles = {
  flexGrow: 1,
  bgcolor: 'background.default',
  p: 2,
};
