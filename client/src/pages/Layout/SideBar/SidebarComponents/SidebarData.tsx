import React from 'react';
import {Column, P, Row, SVG} from '../../../../components';
import { Container } from '@mui/system';
import { makeStyles } from 'tss-react/mui';
import {useUser} from "../../../../store";
import {useTranslation} from "react-i18next";

interface ISidebarData {}

const SidebarData = (props: ISidebarData) => {
  const {} = props;
    const {userActions, userState} = useUser();
    const {classes, cx} = useStyle();
    const {t} = useTranslation();
  return (
    <Container className={cx(classes.root)}>

        <SVG name={"user-avatar"}/>
        <P>{userState.user?.firstName ?? ""} {userState.user?.lastName ?? ""}</P>
        <P>{t("info.school")} {userState.user?.school?.name ?? ""}</P>
        {/*<Row>*/}
        {/*    <SVG name={"user-avatar"}/>*/}
        {/*    <Column>*/}
        {/*        <P>{userState.user?.firstName ?? ""} {userState.user?.lastName ?? ""}</P>*/}
        {/*        <P>School {userState.user?.school?.name ?? ""}</P>*/}
        {/*    </Column>*/}
        {/*</Row>*/}
    </Container>
  );
};
const useStyle = makeStyles()((theme) => ({
    root: {
        userSelect: 'none',
        width:'100%',
        padding: '10px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around'
        // justifyContent: 'center',
        // padding: '10px',
        // '& .row': {
        //     width:'70%',
        //     alignItems: 'center',
        //     justifyContent:'space-around'
        // }
    },
}));
export { SidebarData };
