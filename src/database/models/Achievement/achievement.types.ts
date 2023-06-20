import type { Model, Document } from 'mongoose';
import type { IPlayer } from '../User';
import type { IMission } from '../Mission';
import { IGame } from '../Game';

export interface IAchievement {
  id: string;
  game: IGame;
  mission: IMission;
  player: IPlayer;
  duration: number;
  score: number;
  playerTotal: number;
}

export interface IAchievementDocument
  extends IAchievement,
    Document,
    IAchievementInstanceMethods {
  _id: string;
  id: string;
}

export interface IAchievementInstanceMethods {
  editInfo: (
    this: IAchievementDocument,
    achievementInfo: Partial<IAchievement>
  ) => Promise<IAchievementDocument>;
}

export interface IAchievementStaticMethods {}

export interface IAchievementModel
  extends Model<IAchievementDocument>,
    IAchievementStaticMethods {}
