import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { ROUTES } from '../../types/routes';
// import ErrorInfo from "../ErrorInfo";
import Header from '../Header';
import Navigation from '../Navigation';
import ProfilePage from '../../pages/ProfilePage';
import DashboardPage from '../../pages/DashboardPage';
import Menu2Page from '../../pages/Menu2Page';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const initialWidth = 220;
  return (
    <Box sx={{ display: 'flex' }}>
      {children}
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${initialWidth}px)`,
        }}
      >
        <Header />
      </AppBar>

      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: initialWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Navigation />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 2 }}
      >
        <Routes>
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.MENU2} element={<Menu2Page />} />
          {/* <Route path="*" element={<ErrorInfo />} /> */}
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        </Routes>
      </Box>
    </Box>
  );
}
export default Layout;
