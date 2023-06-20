// import type {IPlayer, ITeacher} from "~/database";
import type { Model, Schema, Document } from 'mongoose';
import { ITeacher } from '../User';
import { IPluginDocument } from '../../plugins';

export interface IClass {
  id: string;
  name: string;
  score: number;
  teachers: any[];
  players: any[];
  school: any;
}

export interface IClassDocument
  extends IClass,
    IPluginDocument,
    IClassInstanceMethods {
  // _id: string;
  // id: string;
}

export interface IClassInstanceMethods {
  editInfo: (
    this: IClassDocument,
    classInfo: Partial<IClass>
  ) => Promise<IClassDocument>;
  addTeacher: (
    this: IClassDocument,
    teacherIdentity: string
  ) => Promise<IClassDocument>;

  removeTeacher: (
    this: IClassDocument,
    teacherId: string
  ) => Promise<IClassDocument> | Promise<void>;

  addPlayer: (
    this: IClassDocument,
    playerIdentity: string
  ) => Promise<IClassDocument>;

  removePlayer: (
    this: IClassDocument,
    playerId: string
  ) => Promise<IClassDocument> | Promise<void>;

  addScore: (this: IClassDocument, score: number) => Promise<IClassDocument>;

  addPlayers: (
    this: IClassDocument,
    players: string[]
  ) => Promise<IClassDocument>;

  removePlayers: (
    this: IClassDocument,
    players: string[]
  ) => Promise<IClassDocument>;
}

export interface IClassStaticMethods {
  filterClasses: (
    this: IClassModel,
    classObj: Partial<IClass>
  ) => Promise<IClassDocument[]>;

  createClass: (
    this: IClassModel,
    classObj: Partial<IClassDocument>
  ) => Promise<IClassDocument>;

  deleteClass: (this: IClassModel, identity: string) => Promise<any>;
}

export interface IClassModel
  extends Model<IClassDocument>,
    IClassStaticMethods {}
