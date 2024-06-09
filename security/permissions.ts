import { NextFunction, Request, Response } from 'express';

const permissionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const userRole = req.user.role;
  const requiredRole = req.route.requiredRole;

  if (userRole!== requiredRole) {
    return res.status(403).send({ error: 'Forbidden' });
  }

  next();
};

export default permissionMiddleware;
