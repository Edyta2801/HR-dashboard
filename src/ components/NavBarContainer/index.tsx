import Box from "@mui/material/Box";
import React from "react";

interface NavBarContainerProps {
  children?: React.ReactNode;
}

const NavBarContainer: React.FC<NavBarContainerProps> = (props) => {
  return <Box>{props.children}</Box>;
};
export default NavBarContainer;