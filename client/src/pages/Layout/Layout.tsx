import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Box, CssBaseline, Toolbar} from '@mui/material';
import {Header} from './Header';
import {Sidebar} from './SideBar';
import {Column,Row, Main} from '../../components';
import {useWindowSize} from 'react-use';
import {useUser, useUi} from "../../store";
import { makeStyles } from 'tss-react/mui';
import {SidebarHeader} from "./SideBar/SidebarComponents";
import {useTheme} from "@mui/system";


function Layout() {
    const {width, height} = useWindowSize();
    const theme = useTheme();
    const {userActions, userState} = useUser();
    const {uiState, uiActions} = useUi();
    useEffect(() => {
        console.log(theme.direction)
    }, [theme.direction])

    const {classes, cx} = useStyle({isAuth:userState.isAuth,drawerWidth: uiState.drawer.width, drawerIsOpen: uiState.drawer.isOpen,rtl:uiState.rtl})
    return (
        <Box id="app-layout" className={cx(classes.root)}>
            <CssBaseline/>
            <Header/>
            {userState.isAuth &&  <Sidebar/>}
                <Main id="app-main" className={cx(classes.main)}>
                    <SidebarHeader hideLogo/>
                    <Outlet/>
                </Main>
        </Box>
    );
}
const useStyle = makeStyles<{isAuth,drawerWidth,drawerIsOpen,rtl}>()((theme,{isAuth,drawerWidth,drawerIsOpen,rtl}) => ({
    root: {
        display: 'flex',
        // minWidth: "350px",
        // alignItems:'flex-end',
    },
    main:{
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    ...(rtl ? {
        marginRight: isAuth?`-${drawerWidth}px`:0,
        ...(drawerIsOpen && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        })
    } : {
        marginLeft:isAuth? `-${drawerWidth}px`:0,
        ...(drawerIsOpen && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        })
    }),

    }
}));
export {Layout};
