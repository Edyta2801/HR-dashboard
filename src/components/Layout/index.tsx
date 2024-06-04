import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Jobs } from 'views/jobs/Jobs';
import * as styles from './Layout.styles';
import { ROUTES } from '../../types/routes';
// import ErrorInfo from "../ErrorInfo";
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { Profile } from '../../views/Profile';
import Header from '../Header';
import Navigation from '../Navigation';

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
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.JOBS} element={<Jobs />} />
          {/* <Route path="*" element={<ErrorInfo />} /> */}
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}
export default Layout;
