import React, {useEffect} from 'react';
import {Row, P,Counter } from '../../components';
import { useData, useUi } from '../../store';
import * as process from "process";
import {useTranslation} from "react-i18next";
import {PageWrapper} from "../Layout";
interface IHome {}

const Home = (props: IHome) => {
  const {} = props;
    const { dataState, dataActions } = useData();
    const {uiActions} = useUi()
    const {t} = useTranslation();
    useEffect(() => {
        uiActions.setPage("home")
        dataActions.getServerInfo();
    },[])

  return (
       <PageWrapper>
            <P>{t("home.subtitle")}</P>
            <Row justifyContent="space-around">
                <Counter number={dataState.appMetadata.schools} title="schools" duration={5} />
                <Counter number={dataState.appMetadata.classes} title="classes" duration={4} />
                <Counter number={dataState.appMetadata.teachers} title="teachers" duration={3} />
                <Counter number={dataState.appMetadata.students} title="students" duration={3} />
                <Counter number={dataState.appMetadata.games} title="games" duration={3} />
            </Row>
        </PageWrapper>
  );
};

export { Home };
