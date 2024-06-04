import { CssBaseline, ThemeProvider } from '@mui/material';
import { TokenContextController } from 'context/tokenContext/TokenContextController';
import { theme } from 'theme/theme';

import { AppProvidersProps } from './AppProviders.types';

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <TokenContextController>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TokenContextController>
  );
}
