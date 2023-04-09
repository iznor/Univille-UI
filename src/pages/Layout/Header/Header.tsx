import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { ImageLink, P } from '../../../components';
import { makeStyles } from 'tss-react/mui';
import { Menu } from '@mui/icons-material';

interface IHeader {
  drawerWidth: number;
  toggleDrawer: (val?: any) => any;
  isAuthPage: boolean;
  drawerIsOpen: boolean;
}

export const Header = (props: IHeader) => {
  const { drawerWidth, toggleDrawer, isAuthPage, drawerIsOpen } = props;
  const { classes, cx } = useStyle({ isAuthPage });
  return (
    <AppBar
      position="fixed"
      className={cx(classes.root)}
      sx={{
        backgroundColor: '#b01212',
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ position: 'relative' }}>
        {!isAuthPage && (
          <>
            <IconButton className={cx(classes.menuIcon)} onClick={toggleDrawer}>
              <Menu />
            </IconButton>

            <ImageLink
              to="/"
              className={cx(classes.logoImg)}
              src={require('../../../assets/images/horizontal-logo.png')}
            />
          </>
        )}
        {isAuthPage && (
          <ImageLink
            to="/"
            className={cx(classes.logoImg)}
            src={require('../../../assets/images/horizontal-logo.png')}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyle = makeStyles<{ isAuthPage }>()((theme, { isAuthPage }) => ({
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
    // center horizontally
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 5,
    height: 60,

    [theme.breakpoints.up('md')]: {
      display: isAuthPage ? 'block' : 'none',
    },
  },
}));
