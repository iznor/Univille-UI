export interface IPlayerController {
  playerSignup: IControlFn<
    {
      firstName: string;
      lastName: string;
      username: string;
      password: string;
      school: string;
      className: string;
    },
    never
  >;
  playerLogin: IControlFn<{ username: string; password: string }, never>;
  joinGame: IControlFn<never, { identity: string; gameCode: string }>;
  getStatus: IControlFn<never, { identity: string }>;
  getPlayer: IControlFn<never, { identity: string }>;
  setAchievement: IControlFn<
    never,
    { identity: string; gameCode: string; missionId: string }
  >;
}
