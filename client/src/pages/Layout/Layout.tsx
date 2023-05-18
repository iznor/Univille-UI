import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Column, Main } from '../../components';
import { useWindowSize } from 'react-use';

function Layout() {
  const location = useLocation();
  const { width, height } = useWindowSize();
  // const {uiState} = useUi();
  // const {
  //   routingState: {isAuthPage},
  // } = uiState;
  // const [isAuthPage, setIsAuthPage] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  // const [drawerWidth, setDrawerWidth] = useState(300);
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const drawerWidth = useMemo(
    () => (['/login', '/signup'].includes(location.pathname) ? 0 : 300),
    [location.pathname]
  );
  const isAuthPage = useMemo(
    () => ['/login', '/signup'].includes(location.pathname),
    [location.pathname]
  );
  return (
    <Column alignItems={'flex-end'}>
      <CssBaseline />
      <Header
        isAuthPage={isAuthPage}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        drawerIsOpen={drawerIsOpen}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        isOpen={drawerIsOpen}
      />
      <Main
        sx={{
          flexGrow: 1,
          px: 3,
          // border: '1px solid red',
          width: `calc(100% - ${width < 770 ? 0 : drawerWidth}px)`,
          height: '90vh',
          mt: '64px',
        }}
      >
        {/* <Toolbar /> */}
        <Outlet />
      </Main>
    </Column>
  );
}

export { Layout };
