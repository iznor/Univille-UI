export type LocationItem = {
  name: string;
  unityObjectTag: string;
  description: string;
  objectPhotoUrl: string;
  mapPhotoUrl: string;
  hint?: string;
};
export type Mission = {
  unityObjectTag: string;
  hint: string;
};
export type GameSettings = {
  gameId: string | undefined;
  gameName: string | undefined;
  startTimeEpoch: number | undefined;
  timeLimitMinutes: number | undefined;
  numberOfGroups: number | undefined;
  missions: Mission[] | undefined;
};
