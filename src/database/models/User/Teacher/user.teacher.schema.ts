import { Schema } from 'mongoose';
import type {
  ITeacherDocument as IPD,
  ITeacherInstanceMethods as IPIM,
  ITeacherModel as IPM,
  ITeacherStaticMethods as IPSM,
} from './user.teacher.types';

export const TeacherSchema = new Schema<IPD, IPM, IPIM, any, any, IPSM>(
  {
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    class: { type: Schema.Types.ObjectId, ref: 'Tclass', autopopulate: true },
  },
  { timestamps: true, discriminatorKey: 'kind' }
);
