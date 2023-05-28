import React from 'react';
import {
  Home as HomeIcon,
  Login as LoginIcon,
  Leaderboard as LeaderboardIcon,
  VideogameAsset,
  VpnKey,
} from '@mui/icons-material';
import { Signup, Home, Login, GameWizard, Leaderboard } from '../pages';
import {SVG} from "../components";

export const navLinks = [
  {
    path: '/',
    title: 'home',
    icon: <SVG name={"home-icon"}/>,
    component: Home,
  },
  {
    path: '/game',
    title: 'games',
    icon: <SVG name={"gamepad"}/>,
    component: GameWizard,
  },
  {
    path: '/leaderboard',
    title: 'leaderboard',
    icon: <SVG name={"chart-percent"}/>,
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
