import { Box, Drawer } from '@mui/material';
import React from 'react';
import { P } from '../../../components';
import { SidebarContent } from './SidebarContent';
import { makeStyles } from 'tss-react/mui';

interface IDrawer {
  drawerWidth: number;
  isOpen: boolean;
  toggleDrawer: (val?: any) => any;
}

export const Sidebar = (props: IDrawer) => {
  const { drawerWidth, isOpen, toggleDrawer } = props;
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
        className={cx(classes.root, classes.tempDrawer)}
      >
        <SidebarContent />
      </Drawer>
      <Drawer variant="permanent" className={cx(classes.stickyDrawer)} open>
        <SidebarContent />
      </Drawer>
    </Box>
  );
};

const useStyles = makeStyles<{ drawerWidth }>()((theme, { drawerWidth }) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: `${drawerWidth}px`,
    },
  },
  tempDrawer: {
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
      boxSizing: 'border-box',
      width: `${drawerWidth}px`,
    },
  },
  stickyDrawer: {
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
      boxSizing: 'border-box',
      width: `${drawerWidth}px`,
    },
  },
}));
