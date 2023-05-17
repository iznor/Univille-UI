import { identityQuery } from '../../db.utils';
import { IClassInstanceMethods, IClassStaticMethods } from './tclass.types';
import { PlayerModel, TeacherModel } from '../User';

export const methods: IClassInstanceMethods = {
  async editInfo(this, gradeInfo) {
    Object.assign(this, gradeInfo);
    return this.save();
  },
  async addTeacher(this, teacherIdentity) {
    const teacher = await TeacherModel.findOneByIdentity(teacherIdentity);
    this.teachers.push(teacher);
    return this.save();
  },
  removeTeacher(this, teacherId) {
    const index = this.teachers.indexOf(teacherId);
    if (index !== -1) {
      this.teachers.splice(index, 1);
      return this.save();
    }
    return Promise.resolve();
  },

  async addPlayer(this, playerIdentity) {
    const player = await PlayerModel.findOneByIdentity(playerIdentity);
    console.log('class.addPlayer player', player);
    this.players.push(player);
    return this.save();
  },
  removePlayer(this, playerId) {
    const index = this.players.indexOf(playerId);
    if (index !== -1) {
      this.players.splice(index, 1);
      return this.save();
    }
    return Promise.resolve();
  },
  async addScore(this, score) {
    this.score += score;
    return this.save();
  },
  async addPlayers(this, players) {
    this.players.push(...players);
    return this.save();
  },
  async removePlayers(this, players) {
    this.players = this.players.filter((player) => !players.includes(player));
    return this.save();
  },
};

export const statics: IClassStaticMethods = {
  async filterClasses(gradeObj) {
    return this.find(gradeObj);
  },

  createClass(gradeObj) {
    const newGrade = new this(gradeObj);
    newGrade.id = newGrade._id;
    return newGrade.save();
  },

  async deleteClass(identity) {
    const fetchedClass = await this.findOneByIdentity(identity);
    this.deleteOne({ _id: fetchedClass._id });
  },
};
