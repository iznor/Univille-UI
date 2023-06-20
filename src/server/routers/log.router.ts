import { Router } from 'express';
import { schoolController } from '../controllers';
import { logController } from '../controllers/log';

class LogRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {
    this.router.post('/', logController.log); // POST /api/v2/log /{type,source,text,data,teacher,player,school}/class
    this.router.get('/:logfiles', logController.getLogFiles); // GET /api/v2/log
  }
}

const logRouter = new LogRouter();

export { logRouter };
