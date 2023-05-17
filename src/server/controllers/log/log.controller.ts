import * as fs from 'fs';
import * as path from 'path';
import { CurdController } from '../crud';
import { ILogController } from './log.controller.types';
import { GameModel, ILogModel, LogModel } from '../../../database';
import { HttpError } from '../../../utils';

class LogController
  extends CurdController<ILogModel>
  implements ILogController
{
  constructor(model) {
    super(model);
  }

  async log(req, res, next) {
    try {
      const log = new LogModel(req.body);
      await log.save();
      res.status(200).json({ message: 'success', data: log });
    } catch (e) {
      next(e);
    }
  }

  async getLogFiles(req, res, next) {
    try {
      const directoryPath = path.join(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        'logs'
      );
      console.log(directoryPath);
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          throw new HttpError(`Unable to scan directory: ${err}`, 401);
        }
        const fileContents = files.map((file) => {
          const fileContent = fs.readFileSync(
            path.join(directoryPath, file),
            'utf8'
          );
          return fileContent;
        });
        res.status(200).json({ message: 'success', data: fileContents });
      });
    } catch (e) {
      next(e);
    }
  }
}

const logController = new LogController(LogModel);

export { logController };
