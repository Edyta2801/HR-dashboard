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
import * as styles from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <Box sx={styles.box}>
      {children}
      <CssBaseline />
      <AppBar sx={styles.appBar}>
        <Header />
      </AppBar>

      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <Navigation />
      </Drawer>
      <Box component="main" sx={styles.main}>
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
