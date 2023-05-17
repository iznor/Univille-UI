import { Schema } from 'mongoose';
import { methods, statics } from './tclass.methods';
import type {
  IClassDocument as IPD,
  IClassInstanceMethods as IPIM,
  IClassModel as IPM,
  IClassStaticMethods as IPSM,
} from './tclass.types';

export const ClassSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    name: { type: String, required: true, unique: true },
    score: { type: Number, default: 0 },
    teachers: { type: [Schema.Types.ObjectId], default: [], ref: 'Teacher' },
    players: { type: [Schema.Types.ObjectId], default: [], ref: 'Player' },
    school: { type: Schema.Types.ObjectId, ref: 'School' },
  },
  { timestamps: true, statics, methods }
);
