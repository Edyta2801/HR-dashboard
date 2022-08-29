import { Route, Routes } from 'react-router-dom';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';
import Signin from '../../pages/SigninPage';
import { ROUTES } from '../../types/routes';
import Home from '../../pages/HomePage';
import Signup from '../../pages/SignupPage';
import Menu2Page from '../../pages/Menu2Page';
import Layout from '../Layout';
import DashboardPage from '../../pages/DashboardPage';
import ProfilePage from '../../pages/ProfilePage';

function Router() {
  return (
    <Routes>
      <Route element={<CenteredLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Route>
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <Layout>
            <DashboardPage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <Layout>
            <ProfilePage />
          </Layout>
        }
      />
      <Route
        path={ROUTES.MENU2}
        element={
          <Layout>
            <Menu2Page />
          </Layout>
        }
      />
    </Routes>
  );
}

export default Router;
