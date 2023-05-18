import React from 'react';
import {
  Home as HomeIcon,
  Login as LoginIcon,
  Leaderboard as LeaderboardIcon,
  VideogameAsset,
  VpnKey,
} from '@mui/icons-material';
import { Signup, Home, Login, GameWizard, Leaderboard } from '../pages';

export const navLinks = [
  {
    path: '/',
    title: 'Home',
    icon: <HomeIcon />,
    component: Home,
  },
  {
    path: '/Game',
    title: 'Game',
    icon: <VideogameAsset />,
    component: GameWizard,
  },
  {
    path: '/Leaderboard',
    title: 'Leaderboard',
    icon: <LeaderboardIcon />,
    component: Leaderboard,
  },
  // {
  //   path: '/signup',
  //   title: 'Signup',
  //   icon: <VpnKey />,
  //   component: Signup,
  // },
  // {
  //   path: '/login',
  //   title: 'Login',
  //   icon: <LoginIcon />,
  //   component: Login,
  // },
];
