import React from 'react';
import {Button, IconButton, Toolbar} from '@mui/material';
import {ImageLink} from '../../../../components';
import {makeStyles} from 'tss-react/mui';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useUi} from "../../../../store";

interface ISidebarHeader {
    onToggleSidebar?: () => void;
}

const SidebarHeader = (props: ISidebarHeader) => {
    const {onToggleSidebar} = props;
    const {uiState:{rtl}} = useUi();
    const {classes, cx} = useStyle({rtl});
    return (
        <Toolbar className={cx(classes.root)}>
            <Button onClick={onToggleSidebar} color="primary">
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

const useStyle = makeStyles<{rtl}>()((theme,{rtl}) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        '& img': {
            height: 150,
            width: 150,
        },
        "& button": {
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
