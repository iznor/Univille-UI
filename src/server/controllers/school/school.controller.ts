import {SchoolModel, ISchoolModel, ClassModel, TeacherModel, PlayerModel, GameModel} from '../../../database';
import { ISchoolController } from './school.controller.types';
import { CurdController } from '../crud';

class SchoolController // @ts-ignore
    extends CurdController<ISchoolModel>
    implements ISchoolController
{
  constructor(model) {
    super(model);
  }

  async getMeta(req, res, next) {
    try {
      const schools = await SchoolModel.find();
      const classes = await ClassModel.find();
      const teachers = await TeacherModel.find();
      const students = await PlayerModel.find();
      const games = await GameModel.find();
      res.status(200).json({ message: 'success', data: {schools: schools.length, classes: classes.length, teachers: teachers.length, students: students.length, games: games.length} });
    } catch (e) {
      next(e);
    }
  }
  async getSchool(req, res, next) {
    try {
      const school = await SchoolModel.findById(req.params.schoolId);

      res.status(200).json({ message: 'success', data: school });
    } catch (e) {
      next(e);
    }
  }

  async getSchools(req, res, next) {
    try {
      const schools = await SchoolModel.find();
      res.status(200).json({ message: 'success', data: schools });
    } catch (e) {
      next(e);
    }
  }

  async getClasses(req, res, next) {
    try {
      const school = await SchoolModel.findById(req.params.schoolId).populate(
          'classes'
      );
      res.status(200).json({ message: 'success', data: school.classes });
    } catch (e) {
      next(e);
    }
  }

  async addClass(req, res, next) {
    try {
      const school = await SchoolModel.findById(req.params.schoolId);
      const newClass = await school.createClass(req.body.className);
      res.status(200).json({ message: 'success', data: newClass });
    } catch (e) {
      next(e);
    }
  }
}

const schoolController = new SchoolController(SchoolModel);

export { schoolController };
