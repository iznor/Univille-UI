import React, {useEffect, useMemo} from 'react';
import {EditorMap, GoogleMap, List, MapControlPosition, P} from '../../components';
import {Box} from '@mui/material';
import {static_targets} from "../../assets/targets";
import {arrToObj} from "../../utils";
import {useSetState} from "react-use";
import MaterialTable, {Column} from "@material-table/core";
import {useData, useUi} from "../../store";
import {useTranslation} from "react-i18next";

interface ILeaderboard {
}

const Leaderboard = (props: ILeaderboard) => {
    const {} = props;
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
        <Box>
            <P>{t("leaderboard.subtitle")}</P>
            <MaterialTable
                title="Players Achievements"
                columns={playerColumns}
                data={dataState.players}
                editable={{
                    onRowDelete: onPlayerDelete,
                }}
                options={{
                    columnsButton: true,
                }}


            />
        </Box>
    );
};

const playerColumns: Array<Column<IPlayer>> = [
    {title:'username', field: 'username',type:'string'},
    {title:'fullName', field: 'fullName',type:'string'},
    {title:'group', field: 'group',type:'string'},
    {title:'school', field: 'school',render: (rowData) => <div>{rowData.school.name}</div>},
    {title:'class', field: 'class',render: (rowData) => <div>{rowData.class.name}</div>},
    {title:'avatar', field: 'avatar',render: (rowData) => <img src={rowData.avatar} style={{width: 50, borderRadius: '50%'}}/>},
    {title:'score', field: 'score',type:'numeric'},
    {title:'achievements', field: 'achievements',render: (rowData) => rowData.achievements.length},
    {title:'id', field: 'id',hidden:true},
    {title:'id', field: '_id',hidden:true},

]
const achievementColumns: Array<Column<IAchievement>> = [
    {title:'Date', field: 'game',type:'datetime',render: (rowData) => <div>{rowData.game.startTime}</div>},
    {title:'Game', field: 'game',render: (rowData) => <div>{rowData.game.name}</div>},
    {title:'Mission', field: 'mission',render: (rowData) => <div>{rowData.mission.name}</div>},
    {title:'Duration', field: 'duration',type:'numeric'},
    {title:'Score', field: 'score',type:'numeric'},
    {title:'PlayerTotal', field: 'playerTotal'},
    {title:'id', field: 'id',hidden:true},




]
export {Leaderboard};
