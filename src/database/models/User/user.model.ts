import { model } from 'mongoose';
import type { IUserDocument, IUserModel } from './user.types';
import { UserSchema } from './user.schema';
import { userMethods, userStatics } from './user.methods';
import {
  IPlayerDocument,
  IPlayerModel,
  PlayerSchema,
  playerStatics,
  playerMethods,
} from './Player';
import {
  ITeacherDocument,
  ITeacherModel,
  TeacherSchema,
  teacherStatics,
  teacherMethods,
} from './Teacher';

UserSchema.methods = userMethods;
UserSchema.statics = { ...UserSchema.statics, ...userStatics };
PlayerSchema.methods = playerMethods;
PlayerSchema.statics = { ...PlayerSchema.statics, ...playerStatics };
TeacherSchema.methods = teacherMethods;
TeacherSchema.statics = { ...TeacherSchema.statics, ...teacherStatics };

const UserModel = model<IUserDocument, IUserModel>('User', UserSchema, 'users');

const PlayerModel = UserModel.discriminator<IPlayerDocument, IPlayerModel>(
  'Player',
  PlayerSchema
);
const TeacherModel = UserModel.discriminator<ITeacherDocument, ITeacherModel>(
  'Teacher',
  TeacherSchema
);

export { UserModel, PlayerModel, TeacherModel };
