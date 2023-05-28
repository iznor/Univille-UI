import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Box, CssBaseline, Toolbar} from '@mui/material';
import {Header} from './Header';
import {Sidebar} from './SideBar';
import {Column, Main} from '../../components';
import {useWindowSize} from 'react-use';
import {useUser} from "../../store";

function Layout() {
    const location = useLocation();
    const {width, height} = useWindowSize();
    const {userActions, userState} = useUser();
    // const {uiState} = useUi();
    // const {
    //   routingState: {isAuthPage},
    // } = uiState;
    // const [isAuthPage, setIsAuthPage] = useState(false);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [drawerOpenWidth, setDrawerOpenWidth] = useState(300);
    // const [drawerWidth, setDrawerWidth] = useState(300);
    const toggleDrawer = () => {
        setDrawerIsOpen(!drawerIsOpen);
        if(drawerIsOpen){
            setDrawerOpenWidth(0);
        }else{
            setDrawerOpenWidth(300);
        }
    };

    const drawerWidth = useMemo(
        () => (['/login', '/signup'].includes(location.pathname) ? 0 : drawerOpenWidth),
        [location.pathname,drawerOpenWidth]
    );
    const isAuthPage = useMemo(
        () => ['/login', '/signup'].includes(location.pathname),
        [location.pathname]
    );
    // const handleToggleDrawer = () => {
    //     setDrawerIsOpen(!drawerIsOpen);
    //     console.log(drawerIsOpen)
    //     if(drawerIsOpen){
    //         setDrawerOpenWidth(0);
    //     }else{
    //         setDrawerOpenWidth(300);
    //     }
    // }
    return (
        <Column alignItems={'flex-end'} sx={{minWidth:"350px"}}>
            <CssBaseline/>
            <Header
                isAuthPage={isAuthPage}
                drawerWidth={drawerWidth}
                toggleDrawer={toggleDrawer}
                drawerIsOpen={drawerIsOpen}
            />
            {userState.isAuth && <Sidebar
                drawerWidth={drawerWidth}
                toggleDrawer={toggleDrawer}
                isOpen={drawerIsOpen}
                onToggleSidebar={toggleDrawer}
            />}
            <Main
                sx={{
                    flexGrow: 1,
                    px: 3,
                    pt:'30px',
                    // border: '1px solid red',
                    width: `calc(100% - ${width < 770 ? 0 : drawerWidth}px)`,
                    height: '90vh',
                    overflowY:'scroll',
                    minWidth: '330px',
                    // mt: '64px',
                }}
            >
                {/* <Toolbar /> */}
                <Outlet/>
            </Main>
        </Column>
    );
}

export {Layout};
