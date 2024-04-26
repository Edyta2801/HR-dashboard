import { ReactNode } from 'react';

import { ROUTES } from '../../../types/routes';

export type SideBarItem = {
  url: ROUTES;
  text: string;
  icon: ReactNode;
};
