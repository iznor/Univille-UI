/** ****************************************
 *              METHODS
 ***************************************** */
import { IGameInstanceMethods, IGameStaticMethods } from './game.types';
import { PlayerModel, TeacherModel } from '../User';
import { MissionModel } from '../Mission';
import { AchievementModel } from '../Achievement';
import { namesQuery } from '../../db.utils';
import { SchoolModel } from '../School';
import { GameModel } from './game.model';

export const methods: IGameInstanceMethods = {
  editInfo(this, gameInfo) {
    Object.assign(this, gameInfo);
    return this.save();
  },
  addMission(this, missionId) {
    this.missions.push(missionId);
    return this.save();
  },

  addPlayer(this, playerId) {
    this.players.push(playerId);
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: IGameStaticMethods = {
  async createGame(this, gameObj, teacherId, className) {
    const teacher = await TeacherModel.findById(teacherId);
    const school = await SchoolModel.findById(teacher.school);
    const classDoc = await school.findOrCreateClass(className);
    const newGame = new this({ ...gameObj, class: classDoc._id });
    newGame.teacher = teacher._id;
    return newGame.save();
  },

  async addPlayerByGameCode(this, gameCode, playerId) {
    const game = await this.findOne({ code: gameCode.trimEnd() });
    // console.log('game', game)
    const player = await PlayerModel.findOne({ _id: playerId });
    if(!game.players ||  game.players.length === 0){
      game.players = [];
    }
    game.players.push(player._id);
    return game.save();
  },
  async isActive(this, gameCode) {
    const game = await this.findOne({ code: gameCode });
    const now = new Date();
    return now.getTime() < game.startTime.getTime() + game.duration * 60000;
  },
  async deleteGame(this, gameId) {
    await this.deleteOne({ id: gameId });
  },
  async getTimeLeft(this, gameCode) {
    const game = await this.findOne({ code: gameCode });
    const now = new Date();
    return game.startTime.getTime() + game.duration * 60000 - now.getTime();
  },
  async createMission(this, gameId, missionObj) {
    const game = await this.findById(gameId);
    const newMission = await MissionModel.createMission(missionObj);
    game.missions.push(newMission._id);
    await game.save();
    return game;
  },



  async setPlayerAchievement(this, gameCode, playerIdentity, missionIdentity, missionDuration=1) {
    const game = await this.findOne({ code: gameCode });
    const player = await PlayerModel.findOneByIdentity(playerIdentity);
    const mission = await MissionModel.findById(missionIdentity);
    const gameDuration = game.duration;
    const score = mission.score * (1 - missionDuration / gameDuration) * 1000;
    const achievement = new AchievementModel({
      player,
      mission: mission._id,
      game: game._id,
      duration: missionDuration,
      score: score,
      playerTotal: player.score + mission.score,
    });
    const savedAchievement = await achievement.save();
    await player.addNewAchievement(savedAchievement);
    return achievement;
  },
  async giveColor(this, gameCode, playerIdentity) {
    const game = await this.findOne({ code: gameCode });
    const player = await PlayerModel.findById(playerIdentity);
    console.log('player', player)
    const randomColorIndex = Math.floor(Math.random() * game.colors.length);
    const color = game.colors[randomColorIndex];
    player.group = color;
    await player.save();
    return color;
  },
};
