export enum ROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  PROFILE = '/profile',
  JOBS = '/jobs',
  CANDIDATES = '/candidates',
  addJob = '/jobs/add',
  addCandidate = '/candidates/add',
}

const menuLinks = [
  { id: 1, to: ROUTES.DASHBOARD, label: 'Home' },
  { id: 2, to: ROUTES.JOBS, label: 'Jobs' },
  { id: 3, to: ROUTES.CANDIDATES, label: 'Candidates' },
];

export default menuLinks;

export const getSingleJobUrl = (jobId: string) => `${ROUTES.JOBS}/${jobId}`;
export const getEditJobUrl = (jobId: string) => `${ROUTES.addJob}/${jobId}`;

export const getSingleCandidateUrl = (candidateId: string) =>
  `${ROUTES.CANDIDATES}/${candidateId}`;
export const getEditCandidateUrl = (candidateId: string) =>
  `${ROUTES.addCandidate}/${candidateId}`;
