import morgan from 'morgan';
import { Logger } from '../../utils';

const httpLog = morgan((tokens, req, res) => {
  const msg = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ');
  Logger.http(msg);
  return null;
  // return msg;
});

export { httpLog };
