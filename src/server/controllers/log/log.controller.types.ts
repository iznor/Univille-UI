import { ILogModel } from '../../../database';

export interface ILogController {
  log: IControlFn<Partial<ILogModel>, never>;
}

// 45972333
