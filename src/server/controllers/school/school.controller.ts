import { SchoolModel, ISchoolModel, ClassModel } from 'src/database';
import { ISchoolController } from './school.controller.types';
import { CurdController } from '../crud';

class SchoolController // @ts-ignore
  extends CurdController<ISchoolModel>
  implements ISchoolController
{
  constructor(model) {
    super(model);
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
      const newClass = await ClassModel.create({ name: req.body.className });
      school.classes.push(newClass);
      await school.save();
      res.status(200).json({ message: 'success', data: school });
    } catch (e) {
      next(e);
    }
  }
}

const schoolController = new SchoolController(SchoolModel);

export { schoolController };
