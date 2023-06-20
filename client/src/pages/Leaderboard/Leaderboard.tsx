import React, {useEffect, useMemo} from 'react';
import {EditorMap, GoogleMap, List, MapControlPosition, P} from '../../components';
import {Box} from '@mui/material';
import {static_targets} from "../../assets/targets";
import {arrToObj} from "../../utils";
import {useSetState} from "react-use";
import {makeStyles} from 'tss-react/mui';
import MaterialTable, {Column as Col, Column} from "@material-table/core";
import {useData, useUi} from "../../store";
import {useTranslation} from "react-i18next";
import {PageWrapper} from "../Layout";
import {TFunction} from "i18next";

interface ILeaderboard {
}
const calcAvgAchievementCompletionTime = (achievements:IAchievement[]):string => {
    const total = achievements.reduce((acc,curr) => acc + curr.duration,0)
    return total === 0 ? "N/A" : `${((total/achievements.length)/1000).toFixed(2)} seconds`
}
const Leaderboard = (props: ILeaderboard) => {
    const {} = props;
    const {classes, cx} = useStyle();
    const {dataActions,dataState} = useData();
    const {uiActions} = useUi()
    const {t} = useTranslation();
    useEffect(() => {
        uiActions.setPage("leaderboard")
    },[])

    useEffect(() => {
    dataActions.fetchSchoolPlayers()
    },[])
    const onPlayerDelete = async (oldData: any) =>{

    }

    return (
        <PageWrapper page={"Leaderboard"} className={cx(classes.root)}>
            <P>{t("leaderboard.subtitle")}</P>
            <MaterialTable
                title=""
                columns={playerColumns(t)}
                data={dataState.players}
                options={{
                    columnsButton: true,
                }}
            />
        </PageWrapper>
    );
};

const playerColumns = (t: TFunction<"translation", undefined, "translation">): Array<Col<IPlayer>>  => [
    {title:t('leaderboard.table.username'), field: 'username',type:'string',align:'center'},
    {title:t('leaderboard.table.fullName'), field: 'fullName',type:'string',align:'center',render: (rowData) => rowData.firstName===rowData.lastName?rowData.lastName:`${rowData.firstName} ${rowData.lastName}`},
    {title:t('leaderboard.table.school') ,field: 'school',render: (rowData) => rowData.school.name,align:'center'},
    {title:t('leaderboard.table.class'), field: 'class',render: (rowData) => rowData.class.name,align:'center'},
    {title:t('leaderboard.table.avatar'), field: 'avatar',align:'center'},
    {title:t('leaderboard.table.score'), field: 'score',type:'numeric',align:'center',render: (rowData) => rowData.score.toFixed(0)},
    {title:t('leaderboard.table.achievementsCount'), field: 'achievements',render: (rowData) => rowData.achievements.length,align:'center'},
    {title:t('leaderboard.table.avgDuration'), field: 'achievements',render: (rowData) => calcAvgAchievementCompletionTime(rowData.achievements),align:'center'},
    {title:'id', field: '_id',hidden:true},

]
// const achievementColumns: Array<Column<IAchievement>> = [
//     {title:'Date', field: 'game',type:'datetime',render: (rowData) => <div>{rowData.game.startTime}</div>},
//     {title:'Game', field: 'game',render: (rowData) => <div>{rowData.game.name}</div>},
//     {title:'Mission', field: 'mission',render: (rowData) => <div>{rowData.mission.name}</div>},
//     {title:'Duration', field: 'duration',type:'numeric'},
//     {title:'Score', field: 'score',type:'numeric'},
//     {title:'PlayerTotal', field: 'playerTotal'},
//     {title:'id', field: 'id',hidden:true},
//
//
//
//
// ]

const useStyle = makeStyles()((theme) => ({
    root: {

    },

}));
export {Leaderboard};
