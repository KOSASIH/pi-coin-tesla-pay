import { Request, Response } from 'express';
import PiCoinApi from '../api/PiCoinApi';

class PiCoinController {
  async getBalance(req: Request, res: Response) {
    const piCoinApi = new PiCoinApi('https://api.pi-coin.com', 'YOUR_PI_COIN_ACCESS_TOKEN');
    const balance = await piCoinApi.getBalance();
    res.json(balance);
  }

  async transfer(req: Request, res: Response) {
    const piCoinApi = new PiCoinApi('https://api.pi-coin.com', 'YOUR_PI_COIN_ACCESS_TOKEN');
    const { amount, recipient } = req.body;
    const transfer = await piCoinApi.transfer(amount, recipient);
    res.json(transfer);
  }
}

export default PiCoinController;
