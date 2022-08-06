import React from 'react';
import { Box, Typography } from '@mui/material';
import NavBarContainer from '../NavBarContainer';

function Header() {
  return (
    <NavBarContainer>
      <Box sx={{ display: 'flex', justifyContent: 'end', margin: 3 }}>
        <Typography>login</Typography>
      </Box>
    </NavBarContainer>
  );
}

export default Header;
