import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';

import * as styles from './TopBar.styles';

export function TopBar() {
  return (
    <AppBar sx={styles.topBar}>
      {' '}
      <Toolbar sx={styles.wrapper}>
        <Typography variant="h6" component="div">
          HR_Analytics
        </Typography>{' '}
        <Box>
          <Avatar>ES</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
