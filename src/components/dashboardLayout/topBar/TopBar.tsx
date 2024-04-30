import { useCallback, useEffect, useRef, useState } from 'react';
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
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const onMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      if (!avatarRef.current) return;

      const offset = 250;
      const { top, right, bottom, left } =
        avatarRef.current.getBoundingClientRect();

      if (event.clientX < left - offset) setAnchorEl(null);
      if (event.clientY < top - offset) setAnchorEl(null);
      if (event.clientX > right + offset) setAnchorEl(null);
      if (event.clientY > bottom + offset) setAnchorEl(null);
    });
  }, []);
  return (
    <AppBar sx={styles.topBar}>
      <Toolbar sx={styles.wrapper}>
        <Typography variant="h6" component="div">
          HR_Analytics
        </Typography>

        <Box onMouseEnter={onMouseEnter} ref={avatarRef}>
          <Avatar>ES</Avatar>
          <Menu
            onClose={handleClose}
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
