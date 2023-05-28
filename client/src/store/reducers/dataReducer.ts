import produce from 'immer';
import { ActionTypes } from '../actionTypes';
import { static_targets } from '../../assets/targets';
import {IStaticTarget} from "../../components";

export const initialDataState = {
  gameIsActive: false,
  serverInfo: {
    message: '',
    state: '',
    version: '',
    uptime: '',
    dbState: '',
  },
    appMetadata: {
      schools:0,
      classes:0,
      teachers:0,
      students:0,
      games:0
    },
  games: [],
  players: [],
  schools: [],
  classes: [],
  editor: {
    missions: [],
    metadata: {
      name: '',
      duration: 0,
      groupCount: 0,
      colors: [],
      code: [],
      startTime: 0,
    },
    teacher: {
      id: '',
      firstName: '',
      lastName: '',
    },
    classDoc: {
      id: '',
      name: '',
    },
  },
  staticTargets: static_targets,
};

export const dataReducer = (state = initialDataState, action) => {
  return produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case ActionTypes.SET_DATA:
        Object.assign(draft, payload);
        break;
      case ActionTypes.SET_SCHOOLS:
        draft.schools = payload;
        break;
      case ActionTypes.SET_GAMES:
        draft.games = payload;
        break;
      case ActionTypes.SET_CLASSES:
        draft.classes = payload;
        break;
      case ActionTypes.ADD_GAME:
        draft.games.push(payload);
        break;
      case ActionTypes.REMOVE_GAME:
        draft.games.splice(payload, 1);
        break;
      case ActionTypes.EDIT_GAME:
        draft.games[payload.gameIndex] = payload.game;
        break;
        case ActionTypes.DELETE_MISSION:
            draft.games[payload.gameIndex].missions.splice(payload.missionIndex, 1);
            break;
        case ActionTypes.EDIT_MISSION:
          draft.games[payload.gameIndex].missions[payload.missionIndex] = payload.updatedMission;
            break;
      case ActionTypes.ADD_MISSIONS:
        draft.games[payload.gameIndex].missions.push(...payload.missions);
        break;
      case ActionTypes.SET_MISSIONS:
        draft.games[payload.gameIndex].missions = payload.missions;
        break;

      case ActionTypes.ADD_CLASS:
        draft.classes.push(payload);
        break;
      case ActionTypes.LOG_OUT:
        draft = initialDataState;
        break;
      default:
        break;
    }
  });
};

export interface IDataState {
  serverInfo: IServerInfo;
  appMetadata: IAppMetadata;
  gameIsActive: boolean;
  timeLeft: number;
  editor: IEditor;
  games: IGame[];
  players: IPlayer[];
  schools: ISchool[];
  classes: ClassOptionType[];
  staticTargets: Partial<IStaticTarget>[];
}

export interface IEditor {
  missions: IMission[];
  metadata: IGameMeta;
  teacher: Partial<ITeacher>;
  classDoc: Partial<IClass>;
}

// export interface IStaticTarget {
//   unityObjectTag?: string;
//   objectPhotoUrl?: string;
//   mapPhotoUrl?: string;
//   itemIndex: number;
//   objectTag: string;
//   realImage: string;
//   gameImage: string;
//   name: string;
//   id: string;
//   address?: string;
//   location: ILocation;
//   description: string;
// }

export interface IServerInfo {
  message: string;
  state: string;
  version: string;
  uptime: string;
  dbState: string;
}

