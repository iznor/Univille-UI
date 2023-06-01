import { Router } from 'express';
import { playerController } from '../controllers';

class PlayerRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {

    this.router.get('/', playerController.getPlayers);
    this.router.get('/join/:identity/:gameCode', playerController.joinGame);
    this.router.get('/achieve/:identity/:gameCode/:missionId', playerController.setAchievement);
    this.router.get('/color/:identity/:gameCode', playerController.giveColor);
    this.router.get('/:identity', playerController.getPlayer);
    /** ****************OLD*********************** */
    // this.router.put(
    //   '/dummyApi/givePoints/:playerId',
    //   playerController.givePoints2
    // );
    // this.router.get(
    //   '/dummyApi/getRandomColor/:playerId/:colorCount',
    //   playerController.getRandomColor2
    // );
    // this.router.get('/dummyApi/getOrAdd/:identity', playerController.getOrAdd2);
    // this.router.get('/:identity', playerController.getPlayer2);
    // this.router.get('/:gameCode/join/:identity', playerController.joinGame2);
    // this.router.get(
    //   '/found/:identity/:gameCode/:missionId',
    //   playerController.setAchievement2
    // );
  }
}

const playerRouter = new PlayerRouter();

export { playerRouter };
