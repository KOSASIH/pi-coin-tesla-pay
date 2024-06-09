import { createLogger, format, transports } from 'winston';
import { v4 as uuidv4 } from 'uuid';

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.errors({ stack: true }),
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
    }),
    new transports.File({
      filename: 'logs/app.log',
      level: 'info',
      handleExceptions: true,
    }),
  ],
});

// Advanced logging features
logger.uuid = uuidv4();

logger.logRequest = (req, res, next) => {
  const requestLog = {
    uuid: logger.uuid,
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  };
  logger.info(requestLog);
  next();
};

logger.logResponse = (req, res, next) => {
  const responseLog = {
    uuid: logger.uuid,
    status: res.statusCode,
    headers: res.headers,
    body: res.body,
  };
  logger.info(responseLog);
  next();
};

logger.logError = (err, req, res, next) => {
  const errorLog = {
    uuid: logger.uuid,
    error: err.message,
    stack: err.stack,
  };
  logger.error(errorLog);
  next();
};

export default logger;
