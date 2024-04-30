import { useCallback, useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import * as styles from './TopBar.styles';

export function TopBar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const onMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <AppBar sx={styles.topBar}>
      {' '}
      <Toolbar sx={styles.wrapper}>
        <Typography variant="h6" component="div">
          HR_Analytics
        </Typography>{' '}
        <Box onMouseEnter={onMouseEnter} onMouseLeave={handleClose}>
          <Avatar>ES</Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
