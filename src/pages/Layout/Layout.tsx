import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Column } from '../../components';

function Layout() {
  // const {uiState} = useUi();
  // const {
  //   routingState: {isAuthPage},
  // } = uiState;
  const [isAuthPage, setIsAuthPage] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(true);
  const [drawerWidth, setDrawerWidth] = useState(300);
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  useEffect(() => {
    setDrawerWidth(isAuthPage ? 0 : 300);
  }, [isAuthPage]);
  return (
    <Box>
      <CssBaseline />
      <Header
        isAuthPage={isAuthPage}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <Sidebar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        isOpen={drawerIsOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export { Layout };
