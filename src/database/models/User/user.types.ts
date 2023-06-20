import type { Document, Model } from 'mongoose';
import { IPluginDocument } from '../../plugins';

export interface IUser {
  username: string;
  fullName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  hash: string;
}

export interface IUserDocument
  extends IUser,
    IUserInstanceMethods,
    IPluginDocument {}

export interface IUserInstanceMethods {
  editInfo: (
    this: IUserDocument,
    playerInfo: Partial<IUser>
  ) => Promise<IUserDocument>;
}

export interface IUserStaticMethods {
  // findOneByIdentity: (
  //   this: IUserModel,
  //   identity: string /** username,id,fullName */,
  //   caseSensitive?: boolean
  // ) => Promise<IUserDocument>;
}

export interface IUserModel extends Model<IUserDocument>, IUserStaticMethods {}
