import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Column } from '../../components';

function Layout() {
  // const {
  //   routingState: { isAuthPage },
  // } = uiState;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(300);
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  // useEffect(() => {
  //   setDrawerWidth(isAuthPage ? 0 : 300);
  // }, [isAuthPage]);

  return (
    <Box>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Column>
        <Outlet />
      </Column>
    </Box>
  );
}

export { Layout };
