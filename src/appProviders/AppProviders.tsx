import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme';
import { AppProvidersProps } from './AppProviders.types';

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
