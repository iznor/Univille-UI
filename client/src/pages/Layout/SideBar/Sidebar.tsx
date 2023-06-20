import {Box, Drawer, useMediaQuery} from '@mui/material';
import React, {useEffect} from 'react';
import {P} from '../../../components';
import {SidebarContent} from './SidebarContent';
import {makeStyles} from 'tss-react/mui';
import {useUi} from "../../../store";
import {Theme} from "@mui/system";

interface IDrawer {
}

export const Sidebar = (props: IDrawer) => {
    const {} = props;
    const {uiState, uiActions} = useUi();
    const {classes, cx} = useStyles({drawerWidth: uiState.drawer.width, isOpen: uiState.drawer.isOpen});
    const screenMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    useEffect(() => {
        console.log("screenMdUp", screenMdUp)
        if(screenMdUp) {
            uiActions.openDrawer()
        }
    }, [screenMdUp])

    return (
        // <Box component="nav" className={cx(classes.root)}>
        //
        //     <Drawer
        //         id="temp-drawer"
        //         variant="temporary"
        //         open={uiState.drawerIsOpen}
        //         onClose={uiActions.closeDrawer}
        //
        //         ModalProps={{
        //             keepMounted: true,
        //         }}
        //         anchor={uiState.rtl ? 'right' : 'left'}
        //         className={cx(classes.root, classes.tempDrawer)}
        //     >
        //         <SidebarContent/>
        //     </Drawer>
        //
        <Drawer
            anchor={uiState.rtl ? 'right' : 'left'}
            variant={screenMdUp ? "persistent" : "temporary"}
            className={cx(classes.drawer)}
            open={uiState.drawer.isOpen}
            onClose={uiActions.closeDrawer}
            ModalProps={{keepMounted: true}}

        >
            <SidebarContent/>
        </Drawer>
        // </Box>
    );
};

const useStyles = makeStyles<{ drawerWidth, isOpen }>()((theme, {drawerWidth, isOpen}) => ({
    root: {
        userSelect: 'none',
        height: '100%',

        // [theme.breakpoints.up('md')]: {
        //     flexShrink: 0,
        //     width: `${isOpen ? drawerWidth : 0}px`,
        // },
    },

    drawer: {
        width: `${drawerWidth}px`,
        [theme.breakpoints.up('md')]: {
            '& .MuiDrawer-paper': {
                backgroundColor: theme.palette.app.bg,
                boxSizing: 'border-box',
                borderRight: `1px solid ${theme.palette.app.border}`,
                width: `${drawerWidth}px`,
                flexShrink: 0,
                overflowX: 'hidden',
            },
        },

    },
}));
