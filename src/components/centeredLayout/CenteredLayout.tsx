import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import * as styles from './CenteredLayout.styles';

export default function CenteredLayout() {
  return (
    <Box sx={styles.layout}>
      <Outlet />
    </Box>
  );
}
