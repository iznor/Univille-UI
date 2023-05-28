import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {SidebarLinkItem} from './SidebarLinkItem';
import {navLinks} from 'routes';
import {Divider, Row, SVG} from 'components';
import {MeetingRoom} from '@mui/icons-material';
import {useUser} from "../../../../store";
import { makeStyles } from 'tss-react/mui';
import {useTranslation} from "react-i18next";


interface ISidebarLinks {
}

const SidebarLinks = (props: ISidebarLinks) => {
    const {} = props;
    const {userActions} = useUser();
    const {t} = useTranslation();

    const {classes, cx} = useStyle()

    return (
        <List className={classes.root}>
            {navLinks.map((link) => (
                <SidebarLinkItem
                    key={link.path}
                    path={link.path}
                    title={t(`${link.title}.title`)}
                    icon={link.icon}
                />
            ))}
            {/*<Divider/>*/}
            {/*<Row>*/}
            {/*    <ListItem button onClick={userActions.logOut}>*/}
            {/*        <ListItemIcon>*/}
            {/*            <SVG name={"logout"}/>*/}
            {/*        </ListItemIcon>*/}
            {/*        <ListItemText primary="Logout"/>*/}
            {/*    </ListItem>*/}
            {/*</Row>*/}
        </List>
    );
};
const useStyle = makeStyles()((theme) => ({
    root: {
        // height: "80%"
    },
}));

export {SidebarLinks};
