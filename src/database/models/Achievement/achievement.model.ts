import { model } from 'mongoose';

import type {
  IAchievementModel,
  IAchievementDocument as IPD,
} from './achievement.types';
import { AchievementSchema } from './achievement.schema';

export const AchievementModel = model<IPD, IAchievementModel>(
  'Achievement',
  AchievementSchema
);
