export enum ROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
  SIGNIN = '/signin',
  SIGNUP = '/signup',
  PROFILE = '/profile',
  JOBS = '/jobs',
  CANDIDATES = '/candidates',
  MENU2 = '/menu2',
}

const menuLinks = [
  { id: 1, to: ROUTES.DASHBOARD, label: 'Home' },
  { id: 2, to: ROUTES.JOBS, label: 'Jobs' },
  { id: 3, to: ROUTES.CANDIDATES, label: 'Candidates' },
];

export default menuLinks;
