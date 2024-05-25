import { Route, Routes } from 'react-router-dom';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';
import { DashboardLayout } from 'components/dashboardLayout/DashboardLayout';
import { ProtectedRoute } from 'components/protectedRoute/ProtectedRoute';
import { ROUTES } from '../../types/routes';

import Signin from '../../views/SigninPage';

import Home from '../../views/home/Home';
import Signup from '../../views/SignupPage';
import { Jobs } from '../../views/jobs/Jobs';
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { Profile } from '../../views/Profile';

function Router() {
  return (
    <Routes>
      <Route element={<CenteredLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.JOBS} element={<Jobs />} />{' '}
      </Route>
    </Routes>
  );
}

export default Router;
