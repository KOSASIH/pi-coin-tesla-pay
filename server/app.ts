import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'organ';
import { authMiddleware } from './security/auth';
import { permissionMiddleware } from './security/permissions';
import { validationMiddleware } from './security/validation';
import { router } from './routes';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));

app.use(authMiddleware);
app.use(permissionMiddleware);
app.use(validationMiddleware);

app.use('/api', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send({ error: 'Internal Server Error' });
});

export default app;
