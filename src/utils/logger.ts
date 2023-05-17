import winston from 'winston';
import * as process from 'process';

require('winston-mongodb').MongoDB;

const loggerOptions = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
  },
  formats: {
    timestamp: winston.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
    colorize: winston.format.colorize({ all: true }),
    printf: winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    ),
    json: winston.format.json(),
    splat: winston.format.splat(),
    metadata: winston.format.metadata(),
    stack: winston.format.errors({ stack: true }),
    printWithErrors: winston.format((info) => {
      if (info.meta && info.meta instanceof Error) {
        info.message = `${info.message} ${info.meta.stack}`;
      }
      return info;
    }),
  },
  files: {
    error: 'logs/error.log',
    combined: 'logs/all.log',
  },
};

const { levels, colors, formats } = loggerOptions;

winston.addColors(colors);

// @ts-ignore
const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      formats.timestamp,
      formats.colorize,
      formats.splat,
      formats.stack,
      formats.printWithErrors()
    ),
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: winston.format.combine(formats.timestamp, formats.json),
  }),
  new winston.transports.File({
    filename: 'logs/all.log',
    format: winston.format.combine(formats.timestamp, formats.json),
  }),
  // @ts-ignore
  new winston.transports.MongoDB({
    // mongo database connection links
    db: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o1xmm.mongodb.net`,
    options: {
      useUnifiedTopology: true,
    },
    // A collection to save json formatted logs
    collection: 'logs',
    format: winston.format.combine(formats.timestamp, formats.json),
  }),
];

const Logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'warn',
  levels,
  transports,
});

export { Logger };
