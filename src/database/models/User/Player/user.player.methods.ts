import type {
  IPlayerInstanceMethods,
  IPlayerStaticMethods,
} from './user.player.types';
import { ClassModel } from '../../Tclass';
import { SchoolModel } from '../../School';
import { MissionModel } from '../../Mission';
import { AchievementModel } from '../../Achievement';
import { GameModel } from '../../Game';

/** ****************************************
 *              METHODS
 ***************************************** */
export const playerMethods: IPlayerInstanceMethods = {
  async editInfo(this, playerInfo) {
    if (playerInfo.class && typeof playerInfo.class === 'string') {
      this.class = await ClassModel.findOneByIdentity(playerInfo.class);
    }
    if (playerInfo.school && typeof playerInfo.school === 'string') {
      this.school = await SchoolModel.findOneByIdentity(playerInfo.school);
    }
    Object.assign(this, playerInfo);
    return this.save();
  },
  async setClass(this, classIdentity) {
    this.class = await ClassModel.findOneByIdentity(classIdentity);
    return this.save();
  },
  async setSchool(this, schoolIdentity) {
    this.school = await SchoolModel.findOneByIdentity(schoolIdentity);
    return this.save();
  },
  async addNewAchievement(this, achievement) {
    this.achievements.push(achievement);
    this.score += achievement.score;
    return this.save();
  },

  async setCurrentGame(this, game) {
    // const firstMission = game.missions.find((m) => m.index === 1);
    this.currentGame = {
      game,
      currentMission: {
        mission: game.missions[0],
        startTime: new Date(),
        endTime: new Date(),
      },
    };
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const playerStatics: IPlayerStaticMethods = {
  filterPlayers(formObj) {
    return this.find(formObj);
  },
  async createPlayer(this, playerObj, schoolName, className) {
    const mock = {
      schoolName: "בן גוריון",
      className: "ד2",
    }
    const newPlayer = new this(playerObj);
    // const school = await SchoolModel.findOne({ name: schoolName });
    const classDoc = await ClassModel.findById(className);
    classDoc.players.push(newPlayer._id);
    // await school.save();
    return newPlayer.save();
  },
  async givePoints(this, identity, amount) {
    const player = await this.findOneByIdentity(identity);
    player.score += Number(amount);
    return player.save();
  },
};
