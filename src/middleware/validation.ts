import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

export const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ errors: result.array() });
  }
  next();
};
