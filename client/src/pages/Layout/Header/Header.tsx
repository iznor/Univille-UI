import {AppBar, Box, IconButton, ToggleButton, Toolbar} from '@mui/material';
import React, {useEffect, useMemo} from 'react';
import {ImageLink, P, SVG, H6, Row} from '../../../components';
import {makeStyles} from 'tss-react/mui';
import {Menu} from '@mui/icons-material';
import {useUi, useUser} from "../../../store";
import {useTranslation} from "react-i18next";

interface IHeader {
}

export const Header = (props: IHeader) => {
    const {} = props;
    const {uiState, uiActions} = useUi();
    const {userState, userActions} = useUser();
    const {t, i18n} = useTranslation();
    const {classes, cx} = useStyle({isAuthPage:!userState.isAuth, drawerIsOpen:uiState.drawer.isOpen, drawerWidth:uiState.drawer.width,rtl:uiState.rtl});

    useEffect(() => {
        i18n.changeLanguage(uiState.rtl ? 'he' : 'en');
    }, [uiState.rtl])
    return (
        <AppBar
            // position="fixed"
            className={cx(classes.root)}


        >
            <Toolbar sx={{
                // display: 'flex',
                // justifyContent: 'space-between',
                // position: 'relative'
            }}>

                <IconButton className={cx(classes.menuIcon)} onClick={uiActions.openDrawer}>
                    <Menu/>
                </IconButton>

                <Box className={cx(classes.pageTitle)}>
                    <H6>
                        {t(`${uiState.page}.title`)}
                    </H6>
                </Box>


                <ImageLink
                    to="/"
                    className={cx(classes.logoImg)}
                    src={require('../../../assets/images/horizontal-logo.png')}
                />
                <Row className={cx(classes.utilBtns)}>
                    <ToggleButton className={cx(classes.toggle)} value="check" selected={uiState.rtl}
                                  onChange={uiActions.toggleLanguage}>
                        {uiState.rtl ? <P sx={{fontSize: '0.8rem'}}>ENG</P> : <P>עב</P>}
                    </ToggleButton>

                    <ToggleButton className={cx(classes.toggle)} value="check" selected={uiState.isDark}
                                  onChange={uiActions.toggleDarkMode}>
                        {uiState.isDark ? <SVG size={20} name={"light-mode"}/> : <SVG size={20} name={"dark-mode"}/>}
                    </ToggleButton>
                </Row>
            </Toolbar>
        </AppBar>
    );
};

const useStyle = makeStyles<{ isAuthPage, drawerIsOpen,drawerWidth,rtl }>()((theme, {isAuthPage, drawerIsOpen,drawerWidth,rtl}) => ({
    root: {
        position: 'fixed',
        userSelect: 'none',
        backgroundColor: theme.palette.app.bg,
        borderBottom: `1px solid ${theme.palette.app.border}`,
        boxShadow: 'none',

        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(drawerIsOpen && {
            width: `calc(100% - ${drawerWidth}px)`,
            ...(rtl? {marginRight: `${drawerWidth}px`} : {marginLeft: `${drawerWidth}px`}),
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),

    },

    pageTitle: {
        position: 'absolute',

        /* left: 0px; */
        top: "62px",
        backgroundColor: theme.palette.app.cardBg,
        height: '40px',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderBottom: `1px solid ${theme.palette.app.border}`,
        borderLeft: `1px solid ${theme.palette.app.border}`,
        borderRight: `1px solid ${theme.palette.app.border}`,
        "& h6": {
            color: theme.palette.primary.main,
            [theme.breakpoints.up('xs')]: {
                fontSize: '0.8rem',
                fontWeight: 200,
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: '1.2rem',
                fontWeight: 200,
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '1.5rem',
                fontWeight: 200,
            },
        }
    },
    utilBtns:{
      position:'absolute',
         left:rtl ? "10px" : 'auto',
        right:rtl ? 'auto' : "10px",
    },
    menuIcon: {
        marginRight: 2,
        display: isAuthPage||drawerIsOpen  ? 'none' : 'block',
        // [theme.breakpoints.up('md')]: {
        //     display: drawerIsOpen ? 'none' : 'block'
        // },
    },
    logoImg: {
        // center horizontally
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 5,
        height: 60,

        display: isAuthPage||!drawerIsOpen  ? 'block' : 'none',

        [theme.breakpoints.up('xs')]: {
            height: 40,
        },
        [theme.breakpoints.up('sm')]: {
            height: 50,
        },
        [theme.breakpoints.up('md')]: {

            height: 60,
        },
    },
    toggle: {
        width: '32px',
        height: '32px',
        padding: '5px',
        borderRadius: '8px',
        marginLeft: '5px',
        marginRight: '5px',
        "& p": {
            color: "#6583f6",
            fontWeight: 'bold',
        }
    }
}));
