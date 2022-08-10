import { CssBaseline } from '@mui/material';
import { AppProvidersProps } from './AppProviders.types';

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}
