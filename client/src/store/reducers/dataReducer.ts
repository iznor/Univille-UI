import produce from 'immer';
import { ActionTypes } from '../actionTypes';
import { static_targets } from '../../assets/targets';

export const initialDataState = {
  gameIsActive: false,
  serverInfo: {
    message: '',
    state: '',
    version: '',
    uptime: '',
    dbState: '',
  },
  games: [],
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
  gameIsActive: boolean;
  timeLeft: number;
  editor: IEditor;
  games: IGame[];
  schools: ISchool[];
  classes: IClass[];
  staticTargets: IStaticTarget[];
}

export interface IEditor {
  missions: IMission[];
  metadata: IGameMeta;
  teacher: Partial<ITeacher>;
  classDoc: Partial<IClass>;
}

export interface IStaticTarget {
  objectTag: string;
  realImage: string;
  gameImage: string;
  name: string;
  address: string;
  description: string;
}

export interface IServerInfo {
  message: string;
  state: string;
  version: string;
  uptime: string;
  dbState: string;
}
