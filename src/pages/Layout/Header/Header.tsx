import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { ImageLink, P } from '../../../components';
import { makeStyles } from 'tss-react/mui';
import { Menu } from '@mui/icons-material';

interface IHeader {
  drawerWidth: number;
  toggleDrawer: (val?: any) => any;
  isAuthPage: boolean;
}

export const Header = (props) => {
  const { drawerWidth, toggleDrawer, isAuthPage } = props;
  const { classes, cx } = useStyle();
  return (
    <AppBar
      position="fixed"
      className={cx(classes.root)}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        {!isAuthPage && (
          <>
            <IconButton className={cx(classes.menuIcon)} onClick={toggleDrawer}>
              <Menu />
            </IconButton>

            <ImageLink
              to="/"
              className={cx(classes.logoImg)}
              src={require('../../../assets/images/univille-logo.png')}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyle = makeStyles()((theme) => ({
  root: {
    backgroundColor: '#fff',
    boxShadow: '0px 1px 5px -4px rgba(0,0,0,0.61)',
  },
  menuIcon: {
    marginRight: 2,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logoImg: {
    height: 40,
    width: 150,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
