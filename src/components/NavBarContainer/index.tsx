import Box from '@mui/material/Box';
import React from 'react';

type NavBarContainerProps = {
  children: React.ReactNode;
};

function NavBarContainer({ children }: NavBarContainerProps) {
  return <Box>{children}</Box>;
}
export default NavBarContainer;
