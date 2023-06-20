import * as serverApi from '../serverApi';

export const gameApi = {
  getGames: async () => {
    const res = await serverApi.get('/api/v2/game');
    return serverApi.handleResult(res, 'Get Games Error');
  },
  getTeacherGames: async (teacherId, token) => {
    const res = await serverApi.get(`/api/v2/game/teacher/${teacherId}`, token);
    return serverApi.handleResult(res, 'Get Teacher Games Error');
  },
  createGame: async (newGameParams:INewGameRequestParams) => {
    const res = await serverApi.post('/api/v2/game', newGameParams);
    return serverApi.handleResult(res, 'Create Game Error');
  },
  startGame: async (gameId, timestamp) => {
    const res = await serverApi.put(`/api/v2/game/start/${gameId}`, {
      timestamp,
    });
    return serverApi.handleResult(res, 'Start Game Error');
  },
  updateGameMeta: async (gameId, metadata) => {
    const res = await serverApi.put(`/api/v2/game/${gameId}/meta`, metadata);
    return serverApi.handleResult(res, 'Update Game Error');
  },
  deleteGame: async (gameId) => {
    const res = await serverApi.apiDelete(`/api/v2/game/${gameId}`);
    return serverApi.handleResult(res, 'Delete Game Error');
  },

  addMission: async (gameId, mission) => {
    const res = await serverApi.post(`/api/v2/game/${gameId}/mission`, mission);
    return serverApi.handleResult(res, 'Add Mission Error');
  },

  addMissions: async (gameId, missions) => {
    const res = await serverApi.post(`/api/v2/game/${gameId}/missions`, {missions});
    return serverApi.handleResult(res, 'Add Mission Error');
  },
  updateMission: async (missionId, mission) => {
    const res = await serverApi.put(
      `/api/v2/game/mission/${missionId}`,
      mission
    );
    return serverApi.handleResult(res, 'Update Mission Error');
  },
  deleteMission: async (missionId) => {
    const res = await serverApi.apiDelete(`/api/v2/game/mission/${missionId}`);
    return serverApi.handleResult(res, 'Delete Mission Error');
  },
  isActive: async (gameCode) => {
    const res = await serverApi.get(`/api/v2/game/active/${gameCode}`);
    return serverApi.handleResult(res, 'Is Active Error');
  },
  timeLeft: async (gameCode) => {
    const res = await serverApi.get(`/api/v2/game/timeleft/${gameCode}`);
    return serverApi.handleResult(res, 'Time Left Error');
  },
};
