import { Theme } from '@mui/system';
import { IUserState } from './src/store/reducers';

declare global {
  type themeFunc = (theme: Theme) => string;
  type colorProp = themeFunc | string;
  type TypeNumColors = {
    [key: number]: string;
  };

  interface IGameState {
    games: IGame[];
  }

  interface IGame {
    id: string;
    name: string;
    duration: number;
    groupCount: number;
    colors: string[];
    code: string[];
    startTime: number;
    missions: IMission[];
    players: IUserState[];
    teacher: ITeacher;
    class: IClass;
  }

  interface IPlayer {
    username: string;
    fullName: string;
    group: string;
    school: {
      id: string;
      name: string;
      city: string;
      address: string;
    };
    class: {
      id: string;
      name: string;
      score: string;
    };
    avatar: string;
    score: number;
    achievements: IAchievement[];
    currentGame: {
      game: IGame;
      currentMission: {
        mission: IMission;
        startTime: Date;
        endTime: Date;
      };
    };
  }

  interface IAchievement {
    id: string;
    game: IGame;
    mission: IMission;
    player: IPlayer;
    duration: number;
    score: number;
    playerTotal: number;
  }

  interface IGameMeta {
    name: string;
    duration: number;
    groupCount: number;
    colors: string[];
    code: string[];
    startTime: number;
  }

  interface IGameParams {
    teacherId: string;
    className: string;
    missions: Partial<IMission>[];
    metadata: Partial<IGameMeta>;
  }

  interface IMission {
    name: string;
    description: string;
    hint: { text: string; image?: string; title?: string };
    target: { objectTag: string; image?: string; title?: string };
    image: string;
    score: number;
  }

  interface ISchool {
    name: string;
    city: string;
    address: string;
    location: { x: number; y: number };
    classes: string[] | IClass[] | any[];
    teachers: string[] | ITeacher[];
  }

  interface IClass {
    id: string;
    name: string;
    score: number;
    teachers: any[];
    players: any[];
    school: any;
  }

  interface ITeacher {
    school: ISchool | string;
    class: IClass | string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
}

export {};
