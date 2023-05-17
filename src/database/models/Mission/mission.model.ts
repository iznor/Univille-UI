import { model } from 'mongoose';
import type { IMissionDocument, IMissionModel } from './mission.types';
import { MissionSchema } from './mission.schema';

const MissionModel = model<IMissionDocument, IMissionModel>(
  'Mission',
  MissionSchema,
  'missions'
);
export { MissionModel };
