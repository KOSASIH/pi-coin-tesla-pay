import express, { Request, Response } from 'express';
import { PiNetworkAPI } from './pi-network-api';
import { TeslaAPI } from './tesla-api';

const app = express();

app.use(express.json());

// Pi Coin payment endpoint
app.post('/pay-with-pi', async (req: Request, res: Response) => {
  const { amount, piAddress } = req.body;
  const piNetworkAPI = new PiNetworkAPI();
  const transaction = await piNetworkAPI.createTransaction(amount, piAddress);
  res.json(transaction);
});

// Tesla payment endpoint
app.post('/pay-with-tesla', async (req: Request, res: Response) => {
  const { amount, teslaToken } = req.body;
  const teslaAPI = new TeslaAPI();
  const payment = await teslaAPI.createPayment(amount, teslaToken);
  res.json(payment);
});

app.listen(3000, () => console.log('API listening on port 3000'));
