import express, { Request, Response, NextFunction } from 'express';
import { PiCoinTransactionController } from './controllers/PiCoinTransactionController';
import { TeslaVehicleController } from './controllers/TeslaVehicleController';
import { UserController } from './controllers/UserController';
import { PiCoinWalletController } from './controllers/PiCoinWalletController';

const router = express.Router();

router.get('/healthcheck', (req: Request, res: Response) => {
  res.send({ message: 'Server is up and running!' });
});

router.use('/pi-coin-transactions', PiCoinTransactionController);
router.use('/tesla-vehicles', TeslaVehicleController);
router.use('/users', UserController);
router.use('/pi-coin-wallets', PiCoinWalletController);

export default router;
