import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ShieldIcon from '@mui/icons-material/Shield';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import InsightsIcon from '@mui/icons-material/Insights';

export const routes = [
  {
    route: '/dashboard/admin/:id',
    name: 'Home',
    icon: <ShieldIcon />,
  },
  {
    route: '/user_request',
    name: 'User Request',
    icon: <PersonAddAlt1Icon />,
  },
  {
    route: '/user_list',
    name: "User List",
    icon: <PersonSearchIcon />,
  },
  {
    route: '/statistics',
    name: "Statistics",
    icon: <InsightsIcon />,
  }
];
