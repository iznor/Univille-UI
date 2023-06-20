import { Schema } from 'mongoose';
import { preSave } from '../../db.utils';
import type {
  IUserDocument as IPD,
  IUserInstanceMethods as IPIM,
  IUserModel as IPM,
  IUserStaticMethods as IPSM,
} from './user.types';

export const UserSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    username: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    fullName: { type: String },
    password: { type: String },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);

UserSchema.pre('save', preSave);
