import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import * as styles from './CenteredLayout.styles';
import { CenteredLayoutProps } from './CenteredLayout.types';

export default function ({ children }: CenteredLayoutProps) {
  return (
    <Box sx={styles.container}>
      {!children && <Outlet />}
      {children}
    </Box>
  );
}
