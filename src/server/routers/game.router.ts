import { Router } from 'express';
import { gameController } from '../controllers';

class GameRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setup();
  }

  getRouter() {
    return this.router;
  }

  private setup() {
    this.router.get('/', gameController.getGames); // GET /api/v2/game
    this.router.post('/', gameController.createGame); // GET /api/v2/game  -  {teacherId, className, missions:[{name,description,hint:{text,image,title},target:{objectTag,image,title},image,score}],metadata:{name,duration,groupCount,colors,code,startTime}}
    this.router.put('/:gameId/start', gameController.startGame); // GET /api/v2/game/{gameId}  -  {timestamp}
    this.router.put('/:gameId/meta', gameController.updateGameMeta); // PUT /api/v2/game/{gameId}  -  {name,duration,groupCount,colors,code,startTime}
    this.router.delete('/:gameId', gameController.deleteGame); // DELETE /api/v2/game/{gameId}
    this.router.get('/teacher/:teacherId', gameController.getTeacherGames); // GET /api/v2/game/{teacherId}
    this.router.post('/:gameId/mission', gameController.addMission); // POST /api/v2/game/{gameId}/mission  -  {name,description,hint:{text,image,title},target:{objectTag,image,title},image,score}
    this.router.post('/:gameId/missions', gameController.addMissions); // POST /api/v2/game/{gameId}/mission  -  {name,description,hint:{text,image,title},target:{objectTag,image,title},image,score}
    this.router.put('/mission/:missionId', gameController.updateMission); // PUT /api/v2/game/{gameId}/mission  -  {name,description,hint:{text,image,title},target:{objectTag,image,title},image,score}
    this.router.delete('/mission/:missionId', gameController.deleteMission); // DELETE /api/v2/game/mission/{missionId}
    this.router.post('/join', gameController.joinGame); // POST /api/v2/game/join  -  {playerId, gameCode}
    this.router.get('/active/:gameCode', gameController.isActive); // GET /api/v2/game/active/{gameCode}
    this.router.get('/timeleft/:gameCode', gameController.timeLeft); // GET /api/v2/game/timeleft/{gameCode}
    // old
    this.router.get('/dummyApi/hint/:index', gameController.getHint2);
    this.router.get('/dummyApi/tag/:index', gameController.getObjectTag2);
    this.router.get('/dummyApi/missions', gameController.getMissions2);
    this.router.get('/:gameCode/join/:identity', gameController.joinGame2);
    this.router.put(
      '/:gameCode/target/:missionId/:identity',
      gameController.finishMission2
    );
  }
}

const gameRouter = new GameRouter();

export { gameRouter };
