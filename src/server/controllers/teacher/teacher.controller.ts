import {
  GameModel,
  TeacherModel,
  ITeacherModel,
  PlayerModel,
} from '../../../database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CurdController } from '../crud';
import { ITeacherController } from './teacher.controller.types';
import { HttpError } from '../../../utils';

class TeacherController
  extends CurdController<ITeacherModel>
  implements ITeacherController
{
  constructor(model) {
    super(model);
  }

  async teacherSignup(req, res, next) {
    try {
      const { firstName, lastName, email, password, school } = req.body;
      const teacher = await TeacherModel.findOne({ email });
      if (teacher) {
        throw new HttpError('this email is already exists', 401);
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newTeacher = await TeacherModel.createTeacher(
        { firstName, lastName, email, password: hashedPassword },
        school
      );
      res.status(200).json({ message: 'success', data: newTeacher });
    } catch (e) {
      next(e);
    }
  }

  async teacherLogin(req, res, next) {
    try {
      const { email, password } = req.body;
      const teacher = await TeacherModel.findOne({ email });
      if (!teacher) {
        throw new HttpError('User not exists', 401);
      }
      const passwordMatch = await bcrypt.compare(password, teacher.password);
      if (!passwordMatch) {
        throw new HttpError('Wrong password', 401);
      }
      const token = jwt.sign(
        { email: teacher.email, userId: teacher._id },
        process.env.AUTH_SECRET
      );

      res.status(200).json({
        message: 'success',
        data: { user: teacher.toObject({ virtuals: true }), token },
      });
    } catch (e) {
      next(e);
    }
  }
}

const teacherController = new TeacherController(TeacherModel);

export { teacherController };
