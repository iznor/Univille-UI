import type { Model, Schema, Document } from 'mongoose';
import { IPluginDocument } from '../../plugins';

export interface ILog {
  _id: any;
  type: string;
  source: string;
  text: string;
  data: any;
  teacher: any;
  player: any;
  school: any;
}

// @ts-ignore
export interface ILogDocument
  extends ILog,
    IPluginDocument,
    ILogInstanceMethods {
  // _id: string;
  // id: string;
}

export interface ILogInstanceMethods {}

export interface ILogStaticMethods {}

export interface ILogModel extends Model<ILogDocument>, ILogStaticMethods {}
