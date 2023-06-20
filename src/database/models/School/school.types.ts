import type { Document, Model, Schema } from 'mongoose';
import type { ITeacher } from '../User';
import { IClassDocument, IClass } from '../Tclass';

export interface ISchool {
  name: string;
  city: string;
  address: string;
  location: { x: number; y: number };
  classes: Schema.Types.ObjectId[] | IClass[] | any[];
  teachers: Schema.Types.ObjectId[] | ITeacher[];
}

export interface ISchoolDocument
  extends ISchool,
    Document,
    ISchoolInstanceMethods {
  _id: string;
  id: string;
}

export interface ISchoolInstanceMethods {
  editInfo: (
    this: ISchoolDocument,
    schoolInfo: Partial<ISchool>
  ) => Promise<ISchoolDocument>;
  createClass: (
    this: ISchoolDocument,
    className: string
  ) => Promise<IClassDocument>;
  findOrCreateClass: (
    this: ISchoolDocument,
    className: string
  ) => Promise<IClassDocument>;
}

export interface ISchoolStaticMethods {
  filterSchools: (schoolObj: Partial<ISchool>) => Promise<ISchoolDocument[]>;
  createSchool: (
    this: ISchoolModel,
    schoolObj: Partial<ISchoolDocument>
  ) => Promise<ISchoolDocument>;
  deleteSchool: (this: ISchoolModel, identity: string) => Promise<any>;
}

export interface ISchoolModel
  extends Model<ISchoolDocument>,
    ISchoolStaticMethods {}
