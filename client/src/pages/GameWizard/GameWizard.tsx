import React, {useEffect, useMemo} from "react";
import {makeStyles} from 'tss-react/mui';
import {Box} from "@mui/material";
import {GamesTable} from "./GamesTable";
import {MissionsTable} from "./MissionsTable";
import {TargetsMap} from "./TargetsMap/TargetsMap";
import {useSetState} from "react-use";
import {useData, useUi} from "../../store";
import {arrToObj} from "../../utils";
import {static_targets} from "../../assets/targets";
import moment from "moment";

interface IGameWizard2 {

}

const GameWizard = (props: IGameWizard2) => {
    const {} = props;
    const {classes, cx} = useStyle();
    const {dataActions, dataState} = useData();
    const {uiActions, uiState} = useUi();
    const [{selectedGameId, draftGames}, setEditor] = useSetState<{
        selectedGameId: string | null;
        draftGames: IGame[];
    }>({selectedGameId: null, draftGames: []});
    const items = useMemo(() => arrToObj(static_targets), []);

    useEffect(() => {
        uiActions.setPage("games")
        dataActions.getTeacherGames()
    },[])

    useEffect(() => {
        setEditor({draftGames: dataState.games})
    }, [dataState.games]);

    const onGameAdd = async (newData: any) => {
        const draftGame = {...newData, draft: true, players: [], missions: [], _id: draftGames.length + 1,id: draftGames.length + 1}

        const newGame = {
            teacherId:'1',
            className:newData.class.name,
            missions:newData.missions || [],
            metadata:{
                name: newData.name,
                duration: newData.duration,
                groupCount: newData.groupCount,
                colors: newData.colors,
                code: newData.code,
                startTime: moment(newData.startTime).format("YYYY-MM-DD HH:mm:ss"),
            }
        }
        console.log({newData, newGame})
      dataActions.createGame(newGame)

        setEditor({draftGames: [...draftGames, draftGame]})

    }
    const onGameUpdate = async (newData: any, oldData: any) => {
        setEditor({draftGames: draftGames.map(game=>game._id===oldData._id?newData:game)})
        console.log(newData)
        dataActions.updateGameMeta(oldData._id,newData)

    }
    const onGameDelete = async (oldData: any) => {
        setEditor({draftGames: draftGames.filter(game=>game._id!==oldData._id)})
        console.log(oldData)
        dataActions.deleteGame(oldData._id)
    }
    const onGameSave =  (game:IGame) => {
        console.log(game)
    }
    const onGamePlay =  (game:IGame) => {
        console.log(game)
    }

    const onMissionsAdd = (values:Partial<IMission>[],gameId:string) =>{
        setEditor({draftGames:draftGames.map(game=>game._id===gameId?{...game,missions:[...game.missions,...values]}:game)})
        console.log(values,gameId)
        dataActions.addMissions(gameId,values)
    }
    const onMissionAdd = async (newData: any,gameId:string) => {
        console.log(newData)
        setEditor({draftGames:draftGames.map(game=>game._id===gameId?{...game,missions:[...game.missions,newData]}:game)})
        dataActions.addMission(gameId,newData)
    }
    const onMissionUpdate = async (newData: any, oldData: any,gameId:string) => {
        // setEditor({draftGames:draftGames.map(game=>game.id===gameId?{...game,missions:game.missions.map(mission=>mission.id===oldData.id?newData:mission)}:game)})
        const missionIndex = draftGames.find(game=>game._id===gameId)?.missions.findIndex(mission=>mission.id===oldData.id)

        console.log(missionIndex)
        newData.id = oldData.id
        newData._id = oldData._id
        dataActions.editMission(gameId,missionIndex,newData)
        console.log(newData)
    }
    const onMissionDelete = async (oldData: any,gameId:string) => {
        setEditor({draftGames:draftGames.map(game=>game._id===gameId?{...game,missions:game.missions.filter(mission=>mission.id!==oldData.id)}:game)})

        console.log(oldData)
        dataActions.removeMission(gameId,oldData._id)
    }
    return (
        <Box className={cx(classes.root)}>
            <GamesTable
                draftGames={dataState.games}
                onGameAdd={onGameAdd}
                onGameUpdate={onGameUpdate}
                onGameDelete={onGameDelete}
                onGameSave={onGameSave}
                onPlayClick={onGamePlay}
                selectedGameId={selectedGameId}
                setEditor={setEditor}
                missionsPanel={({rowData})=>(
                    <MissionsTable
                        game={rowData}
                        staticItems={items}
                        onMissionAdd={onMissionAdd}
                        onMissionsAdd={onMissionsAdd}
                        onMissionUpdate={onMissionUpdate}
                        onMissionDelete={onMissionDelete}
                />)
            }
            />
        </Box>
    );
};

export {GameWizard};

const useStyle = makeStyles()((theme) => ({
    root: {

    },

}));
