import { model } from 'mongoose';
import type { IClassModel, IClassDocument as IPD } from './tclass.types';
import { ClassSchema } from './tclass.schema';

const ClassModel = model<IPD, IClassModel>('Tclass', ClassSchema);
export { ClassModel };
