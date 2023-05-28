import {P, Row, SVG} from "../../../../components";
import {ListItem,Button, ListItemIcon, ListItemText} from "@mui/material";
import React from "react";
import {useUser} from "../../../../store";
import { makeStyles } from 'tss-react/mui';
import {useTranslation} from "react-i18next";

interface ISidebarFooter{

}

const SidebarFooter = (props:ISidebarFooter) => {
const {} = props;
    const {userActions} = useUser();
    const {classes, cx} = useStyle();
    const {t} = useTranslation();
 return (
     <Row className={cx(classes.root)} >
         <Button onClick={userActions.logOut}>
             <ListItemIcon>
                 <SVG name={"logout"}/>
             </ListItemIcon>
             <ListItemText primary={t("info.logout")}/>
         </Button>
         <P>
             {t("info.version")} 1.0.0
         </P>
     </Row>
 );
};

const useStyle = makeStyles()((theme) => ({
    root: {
        padding:'10px',
        width: "100%",
        justifyContent: "space-between",
        "& p": {
            fontSize: "0.8rem",
            alignSelf: "flex-end",
            marginRight: "1rem",
            color: theme.palette.text.muted,
        },
        "& button": {
            color: theme.palette.text.dark,
            '&:hover': {
                '& .MuiListItemText-root': { color: theme.palette.primary.main },
            },
        }

    },
}));
export {SidebarFooter};
