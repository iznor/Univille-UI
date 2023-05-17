import { model } from 'mongoose';
import type { ILogModel, ILogDocument as IPD } from './log.types';
import { LogSchema } from './log.schema';

const LogModel = model<IPD, ILogModel>('log', LogSchema);
export { LogModel };
