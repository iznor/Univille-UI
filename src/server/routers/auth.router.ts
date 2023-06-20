import { Router } from 'express';
import { teacherController, playerController } from '../controllers';

class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {
    this.router.post('/teacher/signup', teacherController.teacherSignup); // POST /teacher/signup {firstName,lastName,email,password,school}
    this.router.post('/teacher/login', teacherController.teacherLogin); // POST /teacher/login {email,password}
    this.router.post('/player/signup', playerController.playerSignup); // POST /player/signup {firstName,lastName,username,password,school}
    this.router.post('/player/login', playerController.playerLogin); // POST /player/login {username,password}
  }
}

const authRouter = new AuthRouter();

export { authRouter };
