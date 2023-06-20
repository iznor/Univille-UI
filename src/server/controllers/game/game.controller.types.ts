export interface IGameController {
  getGames: IControlFn<never, never>;
  getTeacherGames: IControlFn<{ teacherId: string }, never>;
  createGame: IControlFn<Partial<IGameParams>, never>;
  startGame: IControlFn<{ timestamp: number }, { gameId: string }>;
  addMission: IControlFn<Partial<IMission>, { gameId: string }>;
  addMissions: IControlFn<Partial<IMission>, { gameId: string }>;
  deleteGame: IControlFn<never, { gameId: string }>;
  deleteMission: IControlFn<never, { missionId: string }>;
  updateMission: IControlFn<Partial<IMission>, { missionId: string }>;
  updateGameMeta: IControlFn<Partial<IGameMeta>, { gameId: string }>;
  joinGame: IControlFn<never, { playerId: string; gameCode: string }>;
  isActive: IControlFn<never, { gameCode: string }>;
  timeLeft: IControlFn<never, { gameCode: string }>;
}

// 45972333
