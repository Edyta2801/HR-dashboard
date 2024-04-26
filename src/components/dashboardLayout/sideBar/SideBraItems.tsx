import {
  HomeOutlined,
  ChatBubbleOutline,
  PersonOutline,
} from '@mui/icons-material';
import { SideBarItem } from './SideBar.types';
import { ROUTES } from 'types/routes';

export const sidebarItems: SideBarItem[] = [
  { text: 'Home', url: ROUTES.DASHBOARD, icon: <HomeOutlined /> },
  { text: 'Jobs', url: ROUTES.JOBS, icon: <ChatBubbleOutline /> },
  { text: 'Candidates', url: ROUTES.CANDIDATES, icon: <PersonOutline /> },
];
