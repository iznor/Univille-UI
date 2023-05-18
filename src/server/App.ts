import express, { Application } from 'express';
// import AuthRouter from './routers/auth.router';
// import UserRouter from './routers/user.router';
import cors from "cors";
import { Logger } from 'src/utils';
import {
  playerRouter,
  authRouter,
  gameRouter,
  dataRouter,
  logRouter,
} from './routers';
import { isError, isAlive } from './middleware';
import { httpLog } from './middleware/http-log';
import path from "path";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.setupGlobalMiddleware();
    this.setupRouters();
  }

  start(port: string | number = 5000) {
    return this.app.listen(port, () => {
      Logger.info(`Server started on port ${port}`);
    });
  }

  private setupGlobalMiddleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(httpLog);
  }

  private setupRouters() {
    this.app.get('/test', isAlive);
    this.app.use('/api/v1/players', playerRouter.getRouter());
    this.app.use('/api/v2/auth', authRouter.getRouter());
    this.app.use('/api/v2/data', dataRouter.getRouter());
    this.app.use('/api/v2/game', gameRouter.getRouter());
    this.app.use('/api/v1/game', gameRouter.getRouter());
    this.app.use('/api/v2/log', logRouter.getRouter());
    this.app.use('/api/v1/log', logRouter.getRouter());
    this.app.use(isError);
    if (process.env.NODE_ENV === 'production') {
      this.app.use(express.static(path.join(__dirname, '../../client/build')));

      this.app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
      });
    }
  }
}

export default new App();
