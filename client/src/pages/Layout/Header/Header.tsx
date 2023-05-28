import {AppBar, Box, IconButton, ToggleButton, Toolbar} from '@mui/material';
import React, {useEffect, useMemo} from 'react';
import {ImageLink, P, SVG,H6,Row} from '../../../components';
import { makeStyles } from 'tss-react/mui';
import { Menu } from '@mui/icons-material';
import {useUi} from "../../../store";
import {useTranslation} from "react-i18next";

interface IHeader {
  drawerWidth: number;
  toggleDrawer: (val?: any) => any;
  isAuthPage: boolean;
  drawerIsOpen: boolean;
}

export const Header = (props: IHeader) => {
  const { drawerWidth, toggleDrawer, isAuthPage, drawerIsOpen } = props;
  const {uiState,uiActions} = useUi();
  const {t,i18n} = useTranslation();
  const { classes, cx } = useStyle({ isAuthPage,drawerIsOpen });

  useEffect(() => {
    i18n.changeLanguage(uiState.rtl ? 'he' : 'en');
  },[uiState.rtl])
  return (
    <AppBar
      // position="fixed"
      className={cx(classes.root)}
      sx={{
        position:'sticky',
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${uiState.rtl?0:drawerWidth}px` },
        mr: { md: `${uiState.rtl?drawerWidth:0}px` },
      }}
    >
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        // position: 'relative'
      }}>



            <IconButton className={cx(classes.menuIcon)} onClick={toggleDrawer}>
              <Menu />
            </IconButton>

        <H6>
          {t(`${uiState.page}.title`)}
        </H6>

        <ImageLink
            to="/"
            className={cx(classes.logoImg)}
            src={require('../../../assets/images/horizontal-logo.png')} // todo - delete after fix
        />
        <Row>
        <ToggleButton className={cx(classes.toggle)} value="check"  selected={uiState.rtl} onChange={uiActions.toggleLanguage}>
          {uiState.rtl ? <P sx={{fontSize:'0.8rem'}}>ENG</P> :  <P >עב</P> }
        </ToggleButton>

        <ToggleButton className={cx(classes.toggle)} value="check"  selected={uiState.isDark} onChange={uiActions.toggleDarkMode}>
          {uiState.isDark ?  <SVG size={20} name={"light-mode"}/> : <SVG size={20}  name={"dark-mode"}/> }
        </ToggleButton>
        </Row>
      </Toolbar>
    </AppBar>
  );
};

const useStyle = makeStyles<{ isAuthPage,drawerIsOpen }>()((theme, { isAuthPage,drawerIsOpen }) => ({
  root: {
    backgroundColor: theme.palette.app.bg,
    borderBottom: `1px solid ${theme.palette.app.border}`,
    boxShadow: 'none',
    "& h6": {
        color: theme.palette.primary.main,
      [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
        fontWeight: 400,
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.2rem',
        fontWeight: 500,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
    }
  },

  menuIcon: {
    marginRight: 2,
    display: isAuthPage ? 'none' : 'block',
    [theme.breakpoints.up('md')]: {
      display: drawerIsOpen?'none':'block'
    },
  },
  logoImg: {
    // center horizontally
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 5,
    height: 60,


    [theme.breakpoints.up('xs')]: {
      height: 40,
    },
    [theme.breakpoints.up('sm')]: {
      height: 50,
    },
    [theme.breakpoints.up('md')]: {
      display: isAuthPage ? 'block' : 'none',
      height: 60,
    },
  },
  toggle: {
    width:'32px',
    height:'32px',
    padding:'5px',
    borderRadius:'8px',
    marginLeft:'5px',
    marginRight:'5px',
    "& p":{
      color:"#6583f6",
      fontWeight:'bold',
    }
  }
}));
