import { Schema } from 'mongoose';
import { methods, statics } from './log.methods';
import type {
  ILogDocument as IPD,
  ILogInstanceMethods as IPIM,
  ILogModel as IPM,
  ILogStaticMethods as IPSM,
} from './log.types';
import { ILogInstanceMethods } from './log.types';

export const LogSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    id: { type: String },
    type: { type: String },
    source: { type: String },
    text: { type: String },
    data: { type: Schema.Types.Mixed },
    teacher: { type: [Schema.Types.ObjectId], default: [], ref: 'Teacher' },
    player: { type: [Schema.Types.ObjectId], default: [], ref: 'Player' },
    school: { type: Schema.Types.ObjectId, ref: 'School' },
  },
  { timestamps: true, statics, methods }
);
