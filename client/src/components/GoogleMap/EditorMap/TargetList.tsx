import {List} from "../../List";
import React from "react";
import {IListItem} from "../../List/ListItem";
import {IMarkersState} from "../Core";
import {IList} from "../../List/List";
import {Box} from "@mui/material";
import {P} from "../../text";
import {Divider,Column} from "../../basic";
import {makeStyles} from 'tss-react/mui';
import {useTranslation} from "react-i18next";

interface ITargetList extends Partial<IList> {
    items?: ObjectIds<IListItem>;
    title?: string;
}

const TargetList = (props: ITargetList) => {
    const {items,title="", ...rest} = props;
    const {classes, cx} = useStyle();
    return (
        <Column className={cx(classes.root)}>
            <Column>
                <P>🗺️ {title}</P>
                <Divider variant="middle"/>
            </Column>
            <List
                  listItems={items}
                  {...rest}

            />
        </Column>

    );
};

const useStyle = makeStyles()((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.app.bg,
        opacity: 0.9,
        position: 'relative',
        overflow: 'hidden',
        right: '10px',
        top: '10px',
        maxHeight: 300,
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
        '& p': {
            textAlign: 'center',
            padding: '10px'
        },
        '& ul': {
            padding: 0,
            overflowY: 'auto',
        },
    }
}));


export {TargetList};
