import { Schema } from 'mongoose';
import type {
  IGameDocument as IPD,
  IGameInstanceMethods as IPIM,
  IGameModel as IPM,
  IGameStaticMethods as IPSM,
} from './game.types';
import { methods, statics } from './game.methods';

export const GameSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    code: { type: String, unique: true },
    name: { type: String },
    startTime: { type: Date },
    duration: { type: Number },
    colors: [{ type: String }],
    groupCount: { type: Number },
    missions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Mission',
        autopopulate: true,
      },
    ],
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    class: { type: Schema.Types.ObjectId, ref: 'Class' },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: 'Teacher',
      autopopulate: true,
    },
  },
  { timestamps: true, statics, methods }
);
