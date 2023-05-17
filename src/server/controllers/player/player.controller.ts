import {
  GameModel,
  IPlayerModel,
  PlayerModel,
  TeacherModel,
} from 'src/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CurdController } from '../crud';
import { IPlayerController } from './player.controller.types';
import { HttpError } from '../../../utils';
import { namesQuery } from '../../../database/db.utils';

class PlayerController
  extends CurdController<IPlayerModel>
  implements IPlayerController
{
  constructor(model) {
    super(model);
  }

  async playerSignup(req, res, next) {
    try {
      const { firstName, lastName, username, password, school, className } =
        req.body;
      const teacher = await this.model.findOne({ username });
      if (teacher) {
        throw new HttpError('this email is already exists', 401);
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newPlayer = await PlayerModel.createPlayer(
        { firstName, lastName, username, password: hashedPassword },
        school,
        className
      );
      res.status(200).json({ message: 'success', data: newPlayer });
    } catch (e) {
      next(e);
    }
  }

  async playerLogin(req, res, next) {
    try {
      const { username, password } = req.body;
      const player = await this.model.findOne({ username });
      if (!player) {
        throw new HttpError('User not exists', 401);
      }
      const passwordMatch = await bcrypt.compare(password, player.password);
      if (!passwordMatch) {
        throw new HttpError('Wrong password', 401);
      }
      const token = jwt.sign(
        { email: player.email, userId: player._id },
        process.env.AUTH_SECRET
      );

      res.status(200).json({
        message: 'success',
        data: { user: player.toObject({ virtuals: true }), token },
      });
    } catch (e) {
      next(e);
    }
  }

  async getPlayer(req, res, next) {
    try {
      const player = await PlayerModel.findOneByIdentity(req.params.identity);
      res.status(200).json({ message: 'success', data: player });
    } catch (e) {
      next(e);
    }
  }

  async joinGame(req, res, next) {
    console.log('JOIN_GAME');
    try {
      const game = await GameModel.addPlayerByGameCode(
        req.params.gameCode,
        req.params.identity
      );
      res.status(200).json({ message: 'success', data: game });
    } catch (e) {
      next(e);
    }
  }

  async getStatus(req, res, next) {
    try {
      // const status = await this.model.getPlayerStatus(req.params.identity);
      res.status(200).json({ message: 'success', data: null });
    } catch (e) {
      next(e);
    }
  }

  async setAchievement(req, res, next) {
    console.log('SET_ACHIEVEMENT');
    try {
      const achievement = await GameModel.setPlayerAchievement(
        req.params.gameCode,
        req.params.identity,
        req.params.missionId
      );
      res.status(200).json({ message: 'success', data: achievement });
    } catch (e) {
      next(e);
    }
  }

  /** ***************************************OLD********************************************* */
  async givePoints2(req, res, next) {
    try {
      console.log('GIVE_POINTS');
      const player = await PlayerModel.findOneAndUpdate(
        { _id: req.params.playerId },
        { $inc: { score: req.body.points } },
        { new: true }
      );

      res.status(200).json(player);
    } catch (e) {
      next(e);
    }
  }

  async getOrAdd2(req, res, next) {
    try {
      console.log('GET_OR_ADD_PLAYER');
      const player = await PlayerModel.findOneAndUpdate(
        namesQuery(req.params.identity),
        {
          $setOnInsert: {
            username: req.params.identity,
            email: req.params.identity,
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      res.status(200).json(player);
    } catch (e) {
      next(e);
    }
  }

  async getRandomColor2(req, res, next) {
    try {
      // array of 20 color names
      console.log('GET_RANDOM_COLOR');
      const player = await PlayerModel.findOneAndUpdate(
        { _id: req.params.playerId },
        {
          $set: {
            group: COLORS[Math.floor(Math.random() * req.params.colorCount)],
          },
        },
        { new: true }
      );
      res.status(200).json(player);
    } catch (e) {
      next(e);
    }
  }

  async getPlayer2(req, res, next) {
    try {
      console.log('GET_PLAYER');
      const player = await PlayerModel.findOne(
        namesQuery(req.params.identity),
        { createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }
      );
      res.status(200).json({ message: 'success', data: player });
    } catch (e) {
      next(e);
    }
  }

  async joinGame2(req, res, next) {
    console.log('JOIN_GAME');
    try {
      const game = await GameModel.addPlayerByGameCode(
        req.params.gameCode,
        req.params.identity
      );
      res.status(200).json({ message: 'success', data: game });
    } catch (e) {
      next(e);
    }
  }

  async setAchievement2(req, res, next) {
    console.log('SET_ACHIEVEMENT');
    try {
      const achievement = await GameModel.setPlayerAchievement(
        req.params.gameCode,
        req.params.identity,
        req.params.missionId
      );
      res.status(200).json({ message: 'success', data: achievement });
    } catch (e) {
      next(e);
    }
  }
}

const playerController = new PlayerController(PlayerModel);

export { playerController };

const COLORS = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Orange',
  'Purple',
  'Pink',
  'Brown',
  'Black',
  'White',
  'Gray',
  'Cyan',
  'Magenta',
  'Lime',
  'Maroon',
  'Navy',
  'Olive',
  'Aqua',
];
