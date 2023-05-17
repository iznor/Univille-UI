import { Schema } from 'mongoose';
import type { IMissionDocument as IPD, IMissionInstanceMethods as IPIM, IMissionModel as IPM, IMissionStaticMethods as IPSM } from './mission.types';
import { methods, statics } from './mission.methods';
import { HintSchema } from './Hint';
import { TargetSchema } from './Target';
import { preSave } from '../../db.utils';
import { pluginStatics } from '../../plugins';

export const MissionSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    index: { type: Number, default: 0 },
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    target: TargetSchema,
    hint: HintSchema,
    hints: [HintSchema],
    score: { type: Number, default: 1 },
    scoreRatio: { type: Number, default: 1 },
  },
  { timestamps: true }
);
Object.assign(MissionSchema.statics, statics);
Object.assign(MissionSchema.methods, methods);
// MissionSchema.pre('save', preSave);
