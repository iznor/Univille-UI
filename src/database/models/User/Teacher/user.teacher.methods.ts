import type { ITeacherInstanceMethods, ITeacherStaticMethods } from '../..';
import { identityQuery } from '../../../db.utils';
import { SchoolModel } from '../..';

/** ****************************************
 *              METHODS
 ***************************************** */
export const teacherMethods: ITeacherInstanceMethods = {
  editInfo(this, teacherInfo) {
    Object.assign(this, teacherInfo);
    return this.save();
  },

  async setClass(this, classId) {
    this.class = classId;
    return this.save();
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const teacherStatics: ITeacherStaticMethods = {
  async filterTeachers(teacherObj) {
    return this.find(teacherObj);
  },

  async createTeacher(this, teacherObj, schoolName) {
    const newTeacher = new this(teacherObj);
    const school = await SchoolModel.findOne({ name: schoolName });
    school.teachers.push(newTeacher._id);
    await school.save();
    return newTeacher.save();
  },

  async deleteTeacher(this, identity) {
    const teacher = await this.findOneByIdentity(identity);
    return teacher.remove();
  },
};
