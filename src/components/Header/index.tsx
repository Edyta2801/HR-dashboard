import React from 'react';
import { Box, Typography } from '@mui/material';
import NavBarContainer from '../NavBarContainer';
import * as styles from './Header.styles';

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
