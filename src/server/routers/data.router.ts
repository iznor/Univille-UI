import { Router } from 'express';
import { schoolController } from '../controllers';

class DataRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {
    this.router.get('/meta', schoolController.getMeta); // GET /api/v2/data/meta
    this.router.get('/schools', schoolController.getSchools); // GET /api/v2/data/schools
    this.router.get('/school/:schoolId', schoolController.getSchool); // GET /api/v2/data/school/{schoolId}
    this.router.get('/school/:schoolId/classes', schoolController.getClasses); // GET /api/v2/data/school/{schoolId}/classes
    this.router.post('/school/:schoolId/class', schoolController.addClass); // POST /api/v2/data/school/{schoolId}/class
    this.router.post('/school/:schoolId/players', schoolController.getPlayers); // POST /api/v2/data/school/{schoolId}/class
  }
}

const dataRouter = new DataRouter();

export { dataRouter };
