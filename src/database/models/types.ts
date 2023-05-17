import { IPlayerModel, ITeacherModel, IUserModel } from './User';
import { ISchoolModel } from './School';
import { IClassModel } from './Tclass';
import { IMissionModel } from './Mission';
import { IGameModel } from './Game';
import { ILogModel } from './Log';

export * from './Achievement/achievement.types';
export * from './Game/game.types';
export * from './Location/location.types';
export * from './Mission/mission.types';
export * from './Mission/Hint/hint.types';
export * from './Mission/Target/target.types';
export * from './School/school.types';
export * from './Tclass/tclass.types';
export * from './User/user.types';
export * from './User/Teacher/user.teacher.types';
export * from './User/Player/user.player.types';
export * from './Log/log.types';

type Models = {
  GameModel: IGameModel;
  MissionModel: IMissionModel;
  ClassModel: IClassModel;
  SchoolModel: ISchoolModel;
  UserModel: IUserModel;
  PlayerModel: IPlayerModel;
  TeacherModel: ITeacherModel;
  LogModel: ILogModel;
};

export type {Models};
