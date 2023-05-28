import { Box, Drawer } from '@mui/material';
import React from 'react';
import { P } from '../../../components';
import { SidebarContent } from './SidebarContent';
import { makeStyles } from 'tss-react/mui';
import {useUi} from "../../../store";

interface IDrawer {
  drawerWidth: number;
  isOpen: boolean;
  toggleDrawer: (val?: any) => any;
  onToggleSidebar?: () => void;
}

export const Sidebar = (props: IDrawer) => {
  const { drawerWidth, isOpen, toggleDrawer,onToggleSidebar } = props;
  const {uiState,uiActions} = useUi();
  const { classes, cx } = useStyles({ drawerWidth });
  return (
    <Box component="nav" className={cx(classes.root)}>
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        anchor={uiState.rtl ? 'right' : 'left'}
        className={cx(classes.root, classes.tempDrawer)}
      >
        <SidebarContent onToggleSidebar={onToggleSidebar} />
      </Drawer>
      <Drawer anchor={uiState.rtl ? 'right' : 'left'} variant="permanent" className={cx(classes.stickyDrawer)} open>
        <SidebarContent onToggleSidebar={onToggleSidebar} />
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles<{ drawerWidth }>()((theme, { drawerWidth }) => ({
  root: {
    userSelect: 'none',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: `${drawerWidth}px`,
    },
  },
  tempDrawer: {
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.app.bg,
      borderRight: `1px solid ${theme.palette.app.border}`,
      boxSizing: 'border-box',
      width: `${drawerWidth}px`,
    },
  },
  stickyDrawer: {
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.app.bg,
      boxSizing: 'border-box',
      borderRight: `1px solid ${theme.palette.app.border}`,
      width: `${drawerWidth}px`,
    },
  },
}));
