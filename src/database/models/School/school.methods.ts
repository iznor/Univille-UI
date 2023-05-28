import type {
  ISchoolInstanceMethods,
  ISchoolStaticMethods,
} from './school.types';
import { ClassModel } from '../Tclass';
import { identityQuery } from '../../db.utils';

/** ****************************************
 *              METHODS
 ***************************************** */
export const methods: ISchoolInstanceMethods = {
  editInfo(this, schoolInfo) {
    Object.assign(this, schoolInfo);
    return this.save();
  },
  async createClass(this, className) {
    const newClass = await ClassModel.createClass({ name: className, school: this._id });
    this.classes.push(newClass);
    await this.save();
    return newClass;

  },
  async findOrCreateClass(this, className) {
    const existingClass = await ClassModel.findOne({
      name: className,
      _id: { $in: this.classes },
    });
    if (existingClass) {
      return existingClass;
    }
    const newClass = await ClassModel.createClass({
      name: className,
      school: this._id,
    });
    this.classes.push(newClass);
    await this.save();
    return newClass;
  },
};

/** ****************************************
 *              STATICS
 ***************************************** */

export const statics: ISchoolStaticMethods = {
  filterSchools(schoolObj) {
    return this.find(schoolObj);
  },
  createSchool(this, schoolObj) {
    const newSchool = new this(schoolObj);
    newSchool.id = newSchool._id;
    return newSchool.save();
  },
  async deleteSchool(this, identity) {
    const school = await this.findOneByIdentity(identity);
    await school.remove();
  },
};
