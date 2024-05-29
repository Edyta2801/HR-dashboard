import { Route, Routes } from 'react-router-dom';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';
import { DashboardLayout } from 'components/dashboardLayout/DashboardLayout';
import { ProtectedRoute } from 'components/protectedRoute/ProtectedRoute';
import {
  ROUTES,
  getEditJobUrl,
  getSingleCandidateUrl,
  getSingleJobUrl,
} from '../../types/routes';

import Signin from '../../views/SigninPage';

import Home from '../../views/home/Home';
import Signup from '../../views/SignupPage';
import { Jobs } from '../../views/jobs/Jobs';
import { Dashboard } from '../../views/Dashboard/Dashboard';
import { Profile } from '../../views/Profile';
import { SingleJob } from 'views/singleJob/SingleJob';
import { Candidates } from 'views/candidates/Candidates';
import { SingleCandidate } from 'views/singleCandidate/SingleCandidate';
import { AddJob } from 'views/addJob/AddJob';
import { EditJob } from 'views/editJob/EditJob';

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
        <Route path={ROUTES.JOBS} element={<Jobs />} />
        <Route path={getSingleJobUrl(':id')} element={<SingleJob />} />
        <Route path={ROUTES.addJob} element={<AddJob />} />
        <Route path={getEditJobUrl(':id')} element={<EditJob />} />
        <Route path={ROUTES.CANDIDATES} element={<Candidates />} />
        <Route
          path={getSingleCandidateUrl(':id')}
          element={<SingleCandidate />}
        />
        {/* <Route path={ROUTES.addCandidate} element={<AddCandidate />} />
          <Route
            path={getEditCandidateUrl(':id')}
            element={<EditCandidate />}
          /> */}
      </Route>
    </Routes>
  );
}

export default Router;
