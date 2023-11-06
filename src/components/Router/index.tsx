import { Route, Routes } from 'react-router-dom';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';
import Signin from '../../views/SigninPage';
import { ROUTES } from '../../types/routes';
import Home from '../../views/home/Home';
import Signup from '../../views/SignupPage';
import Menu2Page from '../../views/Menu2Page';
import Layout from '../Layout';
import DashboardPage from '../../views/DashboardPage';
import ProfilePage from '../../views/ProfilePage';

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
