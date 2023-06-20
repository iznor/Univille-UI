import { ActionTypes } from '../actionTypes';
import { uiActions } from './uiActions';
import { authApi, dataApi, gameApi } from '../../serverApi';
import { IDataState, IEditor } from '../reducers';

export const dataActions = {
  setData: (data: Partial<IDataState>) => {
    return {
      type: ActionTypes.SET_DATA,
      payload: data,
    };
  },
  setSchools: (schools) => {
    return {
      type: ActionTypes.SET_SCHOOLS,
      payload: schools,
    };
  },
  setGames: (games) => {
    return {
      type: ActionTypes.SET_GAMES,
      payload: games,
    };
  },
  setClasses: (classes) => {
    return {
      type: ActionTypes.SET_CLASSES,
      payload: classes,
    };
  },
  addGame: (game) => {
    return {
      type: ActionTypes.ADD_GAME,
      payload: game,
    };
  },
  removeGame: (gameIndex) => {
    return {
      type: ActionTypes.REMOVE_GAME,
      payload: gameIndex,
    };
  },
  editGame: (gameIndex, game) => {
    return {
      type: ActionTypes.EDIT_GAME,
      payload: {
        gameIndex,
        game,
      },
    };
  },
  updateMission: (gameIndex,missionIndex, updatedMission) => {
    return {
      type: ActionTypes.EDIT_MISSION,
      payload: {
        gameIndex,missionIndex, updatedMission
      },
    };
  },
  deleteMission: (gameIndex,missionIndex) => {
    return {
      type: ActionTypes.DELETE_MISSION,
      payload: {
        gameIndex,missionIndex
      },
    };
  },
  concatMissions: (gameIndex,missions) => {
    return {
      type: ActionTypes.ADD_MISSIONS,
      payload: {
        gameIndex,missions
      },
    };
  },
  setPlayers: (players) => {
    return {
      type: ActionTypes.SET_PLAYERS,
      payload: players,
    };
  },
  setGameMissions: (gameIndex,missions) => {
    return {
      type: ActionTypes.SET_MISSIONS,
      payload: {
        gameIndex,missions
      },
    };
  },
  addClass: (newClass) => {
    return {
      type: ActionTypes.ADD_CLASS,
      payload: newClass,
    };
  },
  setEditor: (editor: Partial<IEditor>) => {
    return {
      type: ActionTypes.SET_EDITOR,
      payload: editor,
    };
  },
  editorSetMetadata: (metadata: Partial<IGameMeta>) => {
    return {
      type: ActionTypes.SET_EDITOR_METADATA,
      payload: metadata,
    };
  },
  editorAddMission: (mission: Partial<IMission>) => {
    return {
      type: ActionTypes.EDITOR_ADD_MISSION,
      payload: mission,
    };
  },
  editorRemoveMission: (missionIndex: number) => {
    return {
      type: ActionTypes.EDITOR_REMOVE_MISSION,
      payload: missionIndex,
    };
  },
  editorEditMission: (missionIndex: number, mission: Partial<IMission>) => {
    return {
      type: ActionTypes.EDITOR_EDIT_MISSION,
      payload: {
        missionIndex,
        mission,
      },
    };
  },

  fetchSchoolPlayers: () => {
    return async (dispatch, getState) => {
      try {
        const { token,user:{school:_id} } = getState().user;
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.getAllPlayers();
        const processedPlayers = response.data.map(player=>{
          return ({
            school:player.school?? {name:"No School"},
            class:player.class?? {name:"No Class"},
            achievements:player.achievements??[],
            ...player
          })
        })
        dispatch(dataActions.setPlayers(processedPlayers));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  createClass: (newClassName) => {
    return async (dispatch, getState) => {
      try {
        const {token, user:{school:{id}}} = getState().user;
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.addClass(id, newClassName, token);
        dispatch(dataActions.addClass(response.data));
        dispatch(uiActions.setSuccess('You have successfully created a class'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },

  getTeacherGames: () => {
    return async (dispatch, getState) => {
      try {
        const {
          token,
          user: { id },
        } = getState().user;
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.getTeacherGames(id, token);
        dispatch(dataActions.setGames(response.data));
        dispatch(uiActions.setSuccess('You have successfully logged in'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  getSchools: () => {
    return async (dispatch) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.getSchools();
        dispatch(dataActions.setSchools(response.data));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  getClasses: (schoolId: string) => {
    return async (dispatch) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.getClasses(schoolId);
        dispatch(dataActions.setClasses(response.data));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  createGame: (newGameParams:INewGameRequestParams) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const {
          user: { user:{id} },
        } = getState();
        newGameParams.teacherId = id;
        const response = await gameApi.createGame(newGameParams);
        dispatch(dataActions.addGame(response.data));
        dispatch(uiActions.setSuccess('You have successfully created a game'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  startGame: (gameId: string) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const {
          user: { id },
        } = getState().user;
        const response = await gameApi.startGame(gameId, Date.now());
        const gameIndex = getState().data.games.findIndex(
          (game) => game.id === gameId
        );

        dispatch(dataActions.editGame(gameIndex, response.data));
        dispatch(uiActions.setSuccess('You have successfully started a game'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  updateGameMeta: (gameId: string, metadata: Partial<IGameMeta>) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        console.log(gameId, metadata)
        const response = await gameApi.updateGameMeta(gameId, metadata);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        dispatch(dataActions.editGame(gameIndex, response.data));
        dispatch(
          uiActions.setSuccess('You have successfully updated game metadata')
        );
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  deleteGame: (gameId: string) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.deleteGame(gameId);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        dispatch(dataActions.removeGame(gameIndex));
        dispatch(uiActions.setSuccess('You have successfully deleted a game'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  addMission: (gameId: string, mission: Partial<IMission>) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        console.log('dddd')
        const response = await gameApi.addMission(gameId, mission);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        dispatch(dataActions.setGameMissions(gameIndex, response.data?.missions??[]));
        // dispatch(dataActions.editGame(gameIndex, response.data));
        dispatch(uiActions.setSuccess('You have successfully added a mission'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  addMissions: (gameId: string, missions: Partial<IMission>[]) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.addMissions(gameId, missions);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        dispatch(dataActions.setGameMissions(gameIndex, response.data?.missions??[]));

        // dispatch(dataActions.editGame(gameIndex, response.data));
        dispatch(uiActions.setSuccess('You have successfully added a mission'));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  editMission: (
    gameId: string,
    missionIndex: number,
    mission: Partial<IMission>
  ) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.updateMission(mission._id, mission);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        console.log({gameIndex, missionIndex,response,gameId})
        dispatch(dataActions.updateMission(gameIndex, missionIndex,response.data));

        dispatch(
          uiActions.setSuccess('You have successfully edited a mission')
        );
      } catch (e) {
        console.log(e)
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  removeMission: (gameId: string, missionId: string) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.deleteMission(missionId);
        const gameIndex = getState().data.games.findIndex(
          (game) => game._id === gameId
        );
        const missionIndex = getState().data.games[gameIndex].missions.findIndex(
            (mission) => mission._id === missionId);
        dispatch(dataActions.deleteMission(gameIndex, missionIndex));

        dispatch(
          uiActions.setSuccess('You have successfully removed a mission')
        );
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  isGameActive: (gameCode: string) => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await gameApi.isActive(gameCode);
        dispatch(dataActions.setData({ gameIsActive: response.data }));
        dispatch(
          uiActions.setSuccess(
            'You have successfully checked if game is active'
          )
        );
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },
  getServerInfo: () => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.getServerInfo();
        console.log('server info', response);
        dispatch(dataActions.setData({ serverInfo: response}));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  },

  getAppMeta: () => {
    return async (dispatch, getState) => {
      try {
        dispatch(uiActions.setLoader(true));
        const response = await dataApi.getMeta();
        console.log('app meta', response);
        dispatch(dataActions.setData({ appMetadata: response.data}));
      } catch (e) {
        dispatch(uiActions.setAlert(e.message));
      } finally {
        dispatch(uiActions.setLoader(false));
      }
    };
  }

};
