import {
  GameModel,
  IPlayerModel,
  PlayerModel,
  TeacherModel,
} from '../../../database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CurdController } from '../crud';
import { IPlayerController } from './player.controller.types';
import { HttpError } from '../../../utils';
import { namesQuery } from '../../../database/db.utils';
const isHebrewText = (text) => {
  const hebrewChars = /[\u0590-\u05FF]/;
  return hebrewChars.test(text);
}
class PlayerController
    extends CurdController<IPlayerModel>
    implements IPlayerController {
  constructor(model) {
    super(model);
  }

  async playerSignup(req, res, next) {
    try {
      const {firstName, lastName, username, password, school, className, avatar} =req.body
      console.log({firstName, lastName, username, password, school, className, avatar})

      req.body;
      const teacher = await PlayerModel.findOne({username});
      if (teacher) {
        throw new HttpError('שם משתמש זה כבר תפוס', 401);
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newPlayer = await PlayerModel.createPlayer(
          {firstName:firstName.trim(), lastName:lastName.trim(), username:username.trim(), password: hashedPassword,avatar},
          school,
          className
      );
      res.status(200).json({message: 'success', data: newPlayer});
    } catch (e) {
      next(e);
    }
  }

  async playerLogin(req, res, next) {
    try {
      const {username, password} = req.body;
      console.log( {username, password})
      const player = await PlayerModel.findOne({username});
      if (!player) {
        throw new HttpError('משתמש זה אינו קיים', 401);
      }
      const passwordMatch = await bcrypt.compare(password, player.password);
      if (!passwordMatch) {
        throw new HttpError('סיסמה שגויה', 401);
      }
      const token = jwt.sign(
          {email: player.email, userId: player._id},
          "univillesecretstring19445"
      );

      res.status(200).json({
        message: 'success',
        data: {user: player.toObject({virtuals: true}), token},
      });
    } catch (e) {
      next(e);
    }
  }

  async getPlayer(req, res, next) {
    try {
      const player = await PlayerModel.findOneByIdentity(req.params.identity);
      res.status(200).json({message: 'success', data: player});
    } catch (e) {
      next(e);
    }
  }
  async getPlayers(req, res, next) {
    try {
      const players = await PlayerModel.find({}).populate('class').populate('school').populate('achievements');
      res.status(200).json({message: 'success', data: players});
    } catch (e) {
      next(e);
    }
  }

  async joinGame(req, res, next) {
    console.log('JOIN_GAME');
    console.log({gameCode:req.params.gameCode, identity:req.params.identity})
    try {
      const game = await GameModel.addPlayerByGameCode(
          req.params.gameCode,
          req.params.identity
      );
      res.status(200).json({message: 'success', data: game});
    } catch (e) {
      next(e);
    }
  }

  async getStatus(req, res, next) {
    try {
      // const status = await this.model.getPlayerStatus(req.params.identity);
      res.status(200).json({message: 'success', data: null});
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
          req.params.missionId,
          req.params.missionDuration
      );
      res.status(200).json({message: 'success', data: achievement});
    } catch (e) {
      next(e);
    }
  }

  async giveColor(req, res, next) {
    console.log('GIVE_COLOR');
    try {
      const color = await GameModel.giveColor(
          req.params.gameCode,
          req.params.identity
      );
      res.status(200).json({message: 'success', data: color});
    } catch (e) {
      next(e);
    }
  }
  async getLeaderboardPlayers(req, res, next) {
    try {
      /*
      get the top {req.params.limit} players , sorted by score, also populate achievements and get the shortest duration from the achievements array, and return only the fields: username, score, avatar, duration
       */
      const players = await PlayerModel.find({})
          .populate('achievements')
          .sort({score: -1})
          .limit(parseInt(req.params.limit))
          .select('username score avatar achievements')
          .lean();
      const playersWithShortestDuration = players.map((player) => {
        const shortestDuration = player.achievements.reduce(
            (acc, curr) => (acc < curr.duration ? acc : curr.duration),
            player.achievements[0].duration
        );
        return {
          username:player.username,
          avatar:player.avatar,
          score:player.score.toFixed(0),
          duration: shortestDuration
        };
      });

      res.status(200).json({message: 'success', data: playersWithShortestDuration});


    } catch (e) {
      next(e);
    }
  }
}

const playerController = new PlayerController(PlayerModel);

export { playerController };
//   /** ***************************************OLD********************************************* */
//   async givePoints2(req, res, next) {
//     try {
//       console.log('GIVE_POINTS');
//       const player = await PlayerModel.findOneAndUpdate(
//           { _id: req.params.playerId },
//           { $inc: { score: req.body.points } },
//           { new: true }
//       );
//
//       res.status(200).json(player);
//     } catch (e) {
//       next(e);
//     }
//   }
//
//   async getOrAdd2(req, res, next) {
//     try {
//       console.log('GET_OR_ADD_PLAYER');
//       const player = await PlayerModel.findOneAndUpdate(
//           namesQuery(req.params.identity),
//           {
//             $setOnInsert: {
//               username: req.params.identity,
//               email: req.params.identity,
//             },
//           },
//           { upsert: true, new: true, setDefaultsOnInsert: true }
//       );
//       res.status(200).json(player);
//     } catch (e) {
//       next(e);
//     }
//   }
//
//   async getRandomColor2(req, res, next) {
//     try {
//       // array of 20 color names
//       console.log('GET_RANDOM_COLOR');
//       const player = await PlayerModel.findOneAndUpdate(
//           { _id: req.params.playerId },
//           {
//             $set: {
//               group: COLORS[Math.floor(Math.random() * req.params.colorCount)],
//             },
//           },
//           { new: true }
//       );
//       res.status(200).json(player);
//     } catch (e) {
//       next(e);
//     }
//   }
//
//   async getPlayer2(req, res, next) {
//     try {
//       console.log('GET_PLAYER');
//       const player = await PlayerModel.findOne(
//           namesQuery(req.params.identity),
//           { createdAt: 0, updatedAt: 0, __v: 0, _id: 0 }
//       );
//       res.status(200).json({ message: 'success', data: player });
//     } catch (e) {
//       next(e);
//     }
//   }
//
//   async joinGame2(req, res, next) {
//     console.log('JOIN_GAME');
//     try {
//       const game = await GameModel.addPlayerByGameCode(
//           req.params.gameCode,
//           req.params.identity
//       );
//       res.status(200).json({ message: 'success', data: game });
//     } catch (e) {
//       next(e);
//     }
//   }
//
//   async setAchievement2(req, res, next) {
//     console.log('SET_ACHIEVEMENT');
//     try {
//       const achievement = await GameModel.setPlayerAchievement(
//           req.params.gameCode,
//           req.params.identity,
//           req.params.missionId
//       );
//       res.status(200).json({ message: 'success', data: achievement });
//     } catch (e) {
//       next(e);
//     }
//   }
// }
//
// const playerController = new PlayerController(PlayerModel);
//
// export { playerController };
//
// const COLORS = [
//   'Red',
//   'Blue',
//   'Green',
//   'Yellow',
//   'Orange',
//   'Purple',
//   'Pink',
//   'Brown',
//   'Black',
//   'White',
//   'Gray',
//   'Cyan',
//   'Magenta',
//   'Lime',
//   'Maroon',
//   'Navy',
//   'Olive',
//   'Aqua',
// ];
