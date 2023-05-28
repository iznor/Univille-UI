import { Schema } from 'mongoose';
import type {
  IPlayerDocument as IPD,
  IPlayerInstanceMethods as IPIM,
  IPlayerModel as IPM,
  IPlayerStaticMethods as IPSM,
} from './user.player.types';
import { LocationSchema } from '../../Location';
import { IGame } from '../../Game';
import { IMission } from '../../Mission';
// import { LocationSchema, UserModel } from '../..';

export const PlayerSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    group: { type: {name: String, hex: String, heb: String} },
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    class: { type: Schema.Types.ObjectId, ref: 'Tclass' },
    avatar: { type: String },
    score: { type: Number, default: 0 },
    location: {
      type: LocationSchema,
      default: {
        lat: 0,
        lng: 0,
        address: '',
      },
    },
    achievements: [{ type: Schema.Types.ObjectId, ref: 'Achievement' }],
    currentGame: {
      game: { type: Schema.Types.ObjectId, ref: 'Game' },
      currentMission: {
        mission: { type: Schema.Types.ObjectId, ref: 'Mission' },
      },
      startTime: Date,
      endTime: Date,
    },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);
