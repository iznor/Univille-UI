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
  const saveGame = () => {
    dispatch(dataActions.createGame());
  };
  const startGame = (gameId: string) => {
    dispatch(dataActions.startGame(gameId));
  };

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
      saveGame: useCallback(saveGame, []),
      startGame: useCallback(startGame, []),
    },
  };
}
