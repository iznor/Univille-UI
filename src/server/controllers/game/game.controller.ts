import { CurdController } from '../crud';
import { IGameController } from './game.controller.types';
import {
  IGameModel,
  GameModel,
  MissionModel,
  LogModel,
} from '../../../database';
import { idGenerator } from '../../../utils';

class GameController
  extends CurdController<IGameModel>
  implements IGameController
{
  constructor(model) {
    super(model);
  }

  async getGames(req, res, next) {
    try {
      const games = await GameModel.find({});
      res.status(200).json({ message: 'success', data: games });
    } catch (e) {
      next(e);
    }
  }

  async getTeacherGames(req, res, next) {
    try {
      const games = await GameModel.find({ teacher: req.params.teacherId });
      res.status(200).json({ message: 'success', data: games });
    } catch (e) {
      next(e);
    }
  }

  async createGame(req, res, next) {
    const {
      teacherId,
      className,
      metadata,
      missions: missionsArr = [],
    } = req.body;
    try {
      const newMissions = await MissionModel.createMissions(missionsArr);
      const missions = newMissions.map((m) => m._id);
      const newGame = await GameModel.createGame(
        { ...metadata, code: idGenerator(), missions },
        teacherId,
        className
      );
      res
        .status(200)
        .json({ message: 'Game created successfully', data: newGame });
    } catch (e) {
      next(e);
    }
  }

  async updateGameMeta(req, res, next) {
    try {
      const game = await GameModel.findOne({ code: req.params.gameId });
      Object.assign(game, req.body);
      const updatedGame = await game.save();
      res
        .status(200)
        .json({ message: 'Game updated successfully', data: updatedGame });
    } catch (e) {
      next(e);
    }
  }

  async deleteGame(req, res, next) {
    try {
      await GameModel.deleteGame(req.params.gameId);
      res
        .status(200)
        .json({ message: 'Game deleted successfully', data: null });
    } catch (e) {
      next(e);
    }
  }

  async startGame(req, res, next) {
    try {
      const { gameId } = req.params;
      const { timestamp } = req.body;
      const game = await GameModel.findById(gameId);
      game.startTime = timestamp;
      const updatedGame = await game.save();
      res
        .status(200)
        .json({ message: 'Game started successfully', data: updatedGame });
    } catch (e) {
      next(e);
    }
  }

  async addMission(req, res, next) {
    try {
      const { gameId } = req.params;
      const updatedGame = await GameModel.createMission(gameId, req.body);
      res
        .status(200)
        .json({ message: 'Mission added successfully', data: updatedGame });
    } catch (e) {
      next(e);
    }
  }

  async updateMission(req, res, next) {
    try {
      const { missionId } = req.params;
      const updatedGame = await MissionModel.updateMission(missionId, req.body);
      res
        .status(200)
        .json({ message: 'Mission added successfully', data: updatedGame });
    } catch (e) {
      next(e);
    }
  }

  async deleteMission(req, res, next) {
    try {
      const { missionId } = req.params;
      await MissionModel.deleteMission(missionId);
      res
        .status(200)
        .json({ message: 'Mission added successfully', data: null });
    } catch (e) {
      next(e);
    }
  }

  async joinGame(req, res, next) {
    const { playerId, gameCode } = req.body;

    try {
      const game = await GameModel.addPlayerByGameCode(gameCode, playerId);
      res.status(200).json(game);
    } catch (e) {
      next(e);
    }
  }

  async isActive(req, res, next) {
    try {
      const { gameCode } = req.body;
      const activeState = await this.model.isActive(gameCode);
      res.status(200).json({ message: 'success', data: activeState });
    } catch (e) {
      next(e);
    }
  }

  timeLeft = async (req, res, next) => {
    try {
      const { gameCode } = req.body;
      const game = await this.model.getTimeLeft(gameCode);
      res.status(200).json(game);
    } catch (e) {
      next(e);
    }
  };

  getHint2 = async (req, res, next) => {
    console.log('GET_HINT');
    try {
      const hints = [
        'bus station, its in front of an empty parking lot !',
        'look for the street light close to the corner of the parking lot !',
        'its very close, right at the street light at the corner of the street !',
      ];
      const { index } = req.params;
      res.status(200).json({ message: 'success', data: hints[index] });
    } catch (e) {
      next(e);
    }
  };

  getObjectTag2 = async (req, res, next) => {
    console.log('GET_OBJECT_TAG');
    try {
      const tags = ['BusStation1', 'StreetLight1', 'StreetLight2'];
      const { index } = req.params;
      res.status(200).json(tags[index]);
    } catch (e) {
      next(e);
    }
  };

  getMissions2 = async (req, res, next) => {
    console.log('GET_OBJECT_TAG');

    try {
      const Missions = [
        {
          hint: 'היום נלך לנקות את גן המלך דוד, עליך להגיע לתחנת האוטובוס הקרובה לקבלת הרמז הבא',
          objectTag: 'BusStation1',
          isActive: false,
        },
        {
          hint: ' ישנם שיבושים בתחבורה הציבורית, הגיעו לבנין הכי גבוה בעיר לקבלת הוראות נוספות',
          objectTag: '100_MosheAvivBuilding',
          isActive: false,
        },
        {
          hint: 'אוטובוס מיוחד ממתין לכם, המשיכו לאורך הכביש הרחב ביותר, עד שתגיעו לאוטובוס',
          objectTag: '101_BusOnStation',
          isActive: false,
        },
        {
          hint: 'האוטובוס התחמם, הנהג ביקש עזרה בהחלפת המים למנוע. המשיכו באותו כיוון על הכביש עד שתפגשו בשדרת עצים המובילה למזרקה של גן דוד המלך',
          objectTag: '102_DavidParkFountain',
          isActive: false,
        },
      ];
      res.status(200).json(Missions);
    } catch (e) {
      next(e);
    }
  };

  joinGame2 = async (req, res, next) => {
    console.log('game JOIN_GAME');
    try {
      const { identity, gameCode } = req.params;
      const game = await GameModel.addPlayerByGameCode(gameCode, identity);
      res.status(200).json({ message: 'success', data: game });
    } catch (e) {
      next(e);
    }
  };

  finishMission2 = async (req, res, next) => {
    console.log('FINISH_MISSION');
    try {
      const { identity, gameCode, missionId } = req.params;
      const achievement = await GameModel.setPlayerAchievement(
        gameCode,
        identity,
        missionId
      );
      res.status(200).json({ message: 'success', data: achievement });
    } catch (e) {
      next(e);
    }
  };
}

const gameController = new GameController(GameModel);

export { gameController };
