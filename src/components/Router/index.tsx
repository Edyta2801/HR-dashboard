import { Route, Routes } from 'react-router-dom';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';
import { DashboardLayout } from 'components/dashboardLayout/DashboardLayout';
import { ProtectedRoute } from 'components/protectedRoute/ProtectedRoute';
import { AddCandidate } from 'views/addCandidate/AddCandidate';
import { AddJob } from 'views/addJob/AddJob';
import { Candidates } from 'views/candidates/Candidates';
import { EditCandidate } from 'views/editCandidate/EditCandidate';
import { EditJob } from 'views/editJob/EditJob';
import { SingleCandidate } from 'views/singleCandidate/SingleCandidate';
import { SingleJob } from 'views/singleJob/SingleJob';
import {
  ROUTES,
  getEditCandidateUrl,
  getEditJobUrl,
  getSingleCandidateUrl,
  getSingleJobUrl,
} from '../../types/routes';

import { Dashboard } from '../../views/Dashboard/Dashboard';
import Home from '../../views/home/Home';
import { Jobs } from '../../views/jobs/Jobs';
import { Profile } from '../../views/Profile';
import Signin from '../../views/SigninPage';
import Signup from '../../views/SignupPage';

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
        <Route path={ROUTES.addCandidate} element={<AddCandidate />} />
        <Route path={getEditCandidateUrl(':id')} element={<EditCandidate />} />
      </Route>
    </Routes>
  );
}

export default Router;
