import { NextFunction, Request, Response } from 'express';
import { validate } from 'joi';

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const schema = req.route.schema;
  const data = req.body;

  const result = validate(data, schema);
  if (result.error) {
    return res.status(400).send({ error: result.error.details });
  }

  next();
};

export default validationMiddleware;
