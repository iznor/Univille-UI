export interface IPlayerController {
  playerSignup: IControlFn<
    {
      firstName: string;
      lastName: string;
      username: string;
      password: string;
      school: string;
      className: string;
        avatar: string;
    },
    never
  >;
  playerLogin: IControlFn<{ username: string; password: string }, never>;
  joinGame: IControlFn<never, { identity: string; gameCode: string }>;
  getStatus: IControlFn<never, { identity: string }>;
  getPlayer: IControlFn<never, { identity: string }>;
    giveColor: IControlFn<never,{playerId:string,gameCode:string,color:string}>;
  setAchievement: IControlFn<
    never,
    { identity: string; gameCode: string; missionId: string }
  >;
}
