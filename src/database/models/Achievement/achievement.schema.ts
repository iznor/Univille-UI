import { Schema } from 'mongoose';

import type {
  IAchievementDocument as IPD,
  IAchievementInstanceMethods as IPIM,
  IAchievementModel as IPM,
  IAchievementStaticMethods as IPSM,
} from './achievement.types';
import { methods, statics } from './achievement.methods';

export const AchievementSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    game: { type: Schema.Types.ObjectId, ref: 'Game' },
    mission: { type: Schema.Types.ObjectId, ref: 'Mission' },
    player: { type: Schema.Types.ObjectId, ref: 'player' },
    duration: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    playerTotal: { type: Number, default: 0 },
  },
  { timestamps: true, statics, methods }
);
