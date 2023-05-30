import jwt from 'jsonwebtoken';
import { HttpError } from '../../utils';
import { UserModel } from '../../database';

export const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      throw new HttpError('Not authenticated', 401);
    }
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, "univillesecretstring19445");
    if (!decodedToken) {
      throw new HttpError('Not authenticated', 401);
    }
    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      throw new HttpError('Cant find user', 404);
    }
    return next();
  } catch (e) {
    next(e);
  }
};
