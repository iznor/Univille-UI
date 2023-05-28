import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { dataActions } from '../actions';
import { IDataState, IEditor } from '../reducers';

export function useData() {
  const dispatch = useAppDispatch();
  const values: IDataState = useAppSelector((store) => store.data);

  const setData = (dataState: Partial<IDataState>) => {
    dispatch(dataActions.setData(dataState));
  };
  const setEditor = (editor: Partial<IEditor>) => {
    dispatch(dataActions.setEditor(editor));
  };
  const editorSetMetadata = (metadata: Partial<IGameMeta>) => {
    dispatch(dataActions.editorSetMetadata(metadata));
  };
  const editorAddMission = (mission: Partial<IMission>) => {
    dispatch(dataActions.editorAddMission(mission));
  };
  const editorRemoveMission = (missionIndex: number) => {
    dispatch(dataActions.editorRemoveMission(missionIndex));
  };
  const editorEditMission = (
    missionIndex: number,
    mission: Partial<IMission>
  ) => {
    dispatch(dataActions.editorEditMission(missionIndex, mission));
  };
  const getTeacherGames = () => {
    dispatch(dataActions.getTeacherGames());
  };
  const getSchools = () => {
    dispatch(dataActions.getSchools());
  };
  const getClasses = (schoolId: string) => {
    dispatch(dataActions.getClasses(schoolId));
  };
  const createGame = (newGameParams:INewGameRequestParams) => {
    dispatch(dataActions.createGame(newGameParams));
  };
  const startGame = (gameId: string) => {
    dispatch(dataActions.startGame(gameId));
  };

  const getServerInfo = () => {
    dispatch(dataActions.getServerInfo());
  }

  const addGame = (game) => {
    dispatch(dataActions.addGame(game));
  }

  const removeGame = (gameIndex,game) => {
    dispatch(dataActions.removeGame(gameIndex));
  }

  const createClass = (newClassName) => {
    dispatch(dataActions.createClass(newClassName));
  }
  const addMissions = (gameId,missions) => {
    dispatch(dataActions.addMissions(gameId,missions));
  }
  const addMission = (gameId,missions) => {
    dispatch(dataActions.addMission(gameId,missions));
  }
  const editMission = (gameId,missionIndex,missions) => {
    dispatch(dataActions.editMission(gameId,missionIndex,missions));
  }
  const removeMission = (gameId,missionId) => {
    dispatch(dataActions.removeMission(gameId,missionId));
  }
  const updateGameMeta = (gameId, metadata) => {
    dispatch(dataActions.updateGameMeta(gameId, metadata));
  }
  const deleteGame = (gameId) => {
    dispatch(dataActions.deleteGame(gameId));
  }
  const getAppMeta = () => {
    dispatch(dataActions.getAppMeta());
  }

  const fetchSchoolPlayers = () => {
    dispatch(dataActions.fetchSchoolPlayers());
  }

  return {
    dataState: values,
    dataActions: {
      setData: useCallback(setData, []),
      setEditor: useCallback(setEditor, []),
      editorSetMetadata: useCallback(editorSetMetadata, []),
      editorAddMission: useCallback(editorAddMission, []),
      editorRemoveMission: useCallback(editorRemoveMission, []),
      editorEditMission: useCallback(editorEditMission, []),
      getTeacherGames: useCallback(getTeacherGames, []),
      getSchools: useCallback(getSchools, []),
      getClasses: useCallback(getClasses, []),
      createGame: useCallback(createGame, []),
      startGame: useCallback(startGame, []),
      getServerInfo: useCallback(getServerInfo, []),
      addGame: useCallback(addGame, []),
      removeGame: useCallback(removeGame, []),
      createClass: useCallback(createClass, []),
      addMissions: useCallback(addMissions, []),
      editMission: useCallback(editMission, []),
      addMission: useCallback(addMission, []),
      removeMission: useCallback(removeMission, []),
      getAppMeta: useCallback(getAppMeta, []),
      updateGameMeta: useCallback(updateGameMeta, []),
      deleteGame: useCallback(deleteGame, []),
      fetchSchoolPlayers: useCallback(fetchSchoolPlayers, []),
    },
  };
}
