import { Logger } from '../../utils';

export const isError = (error, req, res, next) => {
  const message = (error.statusCode&&error.statusCode<500)?error.message : 'שגיאה באימות הנתונים';
  console.log('isError', error);
  Logger.error(message);
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.statusCode || 500);
  res.json({ message });
};
