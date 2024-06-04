import { Box, Typography } from '@mui/material';
import React from 'react';
import * as styles from './Header.styles';
import NavBarContainer from '../NavBarContainer';

function Header() {
  return (
    <NavBarContainer>
      <Box sx={styles.box}>
        <Typography>login</Typography>
      </Box>
    </NavBarContainer>
  );
}

export default Header;
