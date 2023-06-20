import type { Model, Schema, Document } from 'mongoose';
import { IPlayer, ITeacher } from '../User';
import { IMission, IMissionDocument } from '../Mission';
import { IAchievement } from '../Achievement';
import { IClass } from '../Tclass';

export interface IGame {
  code: string;
  name: string;
  startTime: Date;
  duration: number;
  colors: IGroupColor[];
  groupCount: number;
  missions: Schema.Types.ObjectId[];
  players: Schema.Types.ObjectId[];
  class: IClass;
  teacher: ITeacher;
}

export interface IGameDocument extends IGame, Document, IGameInstanceMethods {}

export interface IGameInstanceMethods {
  editInfo: (
    this: IGameDocument,
    gameInfo: Partial<IGame>
  ) => Promise<IGameDocument>;
  addMission: (
    this: IGameDocument,
    missionId: Schema.Types.ObjectId
  ) => Promise<IGameDocument>;
  addPlayer: (
    this: IGameDocument,
    playerId: Schema.Types.ObjectId
  ) => Promise<IGameDocument>;
}

export interface IGameStaticMethods {
  createGame: (
    this: IGameModel,
    gameObj: Partial<IGameDocument>,
    teacherIdentity: string,
    className: string
  ) => Promise<IGameDocument>;
  addPlayerByGameCode: (
    this: IGameModel,
    gameCode: string,
    playerId: string
  ) => Promise<IGameDocument>;
  setPlayerAchievement: (
    this: IGameModel,
    gameCode: string,
    playerIdentity: string,
    missionIdentity: Schema.Types.ObjectId,
    missionDuration?: number
  ) => Promise<IAchievement>;
  deleteGame: (this: IGameModel, gameId: string) => Promise<void>;
  createMission: (
    this: IGameModel,
    gameId: string,
    missionObj: Partial<IMission>
  ) => Promise<IGameDocument>;
  giveColor: (
    this: IGameModel,
    gameCode: string,
    playerIdentity: string
  ) => Promise<IGroupColor>;
  isActive: (this: IGameModel, gameCode: string) => Promise<boolean>;
  getTimeLeft: (this: IGameModel, gameCode: string) => Promise<number>;
}

export interface IGameModel extends Model<IGameDocument>, IGameStaticMethods {}
