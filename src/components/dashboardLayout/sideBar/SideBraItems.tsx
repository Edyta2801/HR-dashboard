import {
  HomeOutlined,
  ChatBubbleOutline,
  PersonOutline,
} from '@mui/icons-material';
import { ROUTES } from 'types/routes';
import { SideBarItem } from './SideBar.types';

export const sidebarItems: SideBarItem[] = [
  { text: 'Home', url: ROUTES.DASHBOARD, icon: <HomeOutlined /> },
  { text: 'Jobs', url: ROUTES.PROFILE, icon: <ChatBubbleOutline /> },
  { text: 'Candidates', url: ROUTES.MENU2, icon: <PersonOutline /> },
];
