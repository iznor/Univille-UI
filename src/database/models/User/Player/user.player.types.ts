import type { Document, Model } from 'mongoose';
import { Schema } from 'mongoose';
import type {
  IAchievement,
  IClass,
  IGame,
  ILocation,
  IMission,
  ISchool,
  IUser,
} from '../..';

export interface IPlayer {
  username: string;
  fullName: string;
  group: IGroupColor;
  school: ISchool | string;
  class: IClass | string;
  avatar: string;
  score: number;
  location: ILocation;
  achievements: IAchievement[];
  currentGame: {
    game: IGame;
    currentMission: {
      mission: IMission | Schema.Types.ObjectId;
      startTime: Date;
      endTime: Date;
    };
  };
}

export interface IPlayerDocument
  extends IPlayer,
    IUser,
    Document,
    IPlayerInstanceMethods {}

export interface IPlayerInstanceMethods {
  editInfo: (
    this: IPlayerDocument,
    playerInfo: Partial<IPlayer>
  ) => Promise<IPlayerDocument>;
  setClass: (
    this: IPlayerDocument,
    classIdentity: string
  ) => Promise<IPlayerDocument>;
  setSchool: (
    this: IPlayerDocument,
    schoolIdentity: string
  ) => Promise<IPlayerDocument>;
  addNewAchievement: (
    this: IPlayerDocument,
    achievement: IAchievement
  ) => Promise<IPlayerDocument>;
  setCurrentGame: (
    this: IPlayerDocument,
    game: IGame
  ) => Promise<IPlayerDocument>;
}

export interface IPlayerStaticMethods {
  filterPlayers: (playerObj: Partial<IPlayer>) => Promise<IPlayerDocument[]>;
  createPlayer: (
    this: IPlayerModel,
    playerObj: Partial<IPlayerDocument>,
    schoolName: string,
    className: string
  ) => Promise<IPlayerDocument>;
  givePoints: (
    this: IPlayerModel,
    identity: string /** username,id,fullName */,
    amount: number
  ) => Promise<IPlayerDocument>;
}

export interface IPlayerModel
  extends Model<IPlayerDocument>,
    IPlayerStaticMethods {}
