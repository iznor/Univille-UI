import React from 'react';
import {Button, IconButton, Toolbar, useMediaQuery} from '@mui/material';
import {ImageLink} from '../../../../components';
import {makeStyles} from 'tss-react/mui';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useUi} from "../../../../store";
import {Theme} from "@mui/system";

interface ISidebarHeader {
    hideLogo?: boolean;
}

const SidebarHeader = (props: ISidebarHeader) => {
    const {hideLogo} = props;


    const {uiState:{rtl,drawer},uiActions} = useUi();
    const {classes, cx} = useStyle({rtl,hideLogo});
    return (
        <Toolbar className={cx(classes.root)} sx={theme => theme.mixins.toolbar}>
            <Button onClick={uiActions.closeDrawer} color="primary">
                {rtl?<ChevronRightIcon/>:<ChevronLeftIcon/>}
            </Button>
            {/*<IconButton onClick={onToggleSidebar} color="secondary">*/}
            {/*    <ChevronLeftIcon/>*/}
            {/*</IconButton>*/}
            <ImageLink
                to="/"
                src={require('../../../../assets/images/univille-logo.png')}
            />
        </Toolbar>
    );
};

const useStyle = makeStyles<{rtl,hideLogo}>()((theme,{rtl,hideLogo}) => ({
    root: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'center',

        // padding: '10px',
        '& img': {
            display:hideLogo?'none':'block',
            height: 150,
            width: 150,
        },
        "& button": {
            display:hideLogo?'none':'block',
            position: 'absolute',
            backgroundColor: '#00000012',
            padding: 0,
            minWidth: 0,
            right: rtl?'unset':0,
            left: rtl?0:'unset',
            top: 0,
        }
    }
}));

export {SidebarHeader};
