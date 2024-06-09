import { Request, Response, NextFunction } from 'express';
import { PiCoinTransactionService } from '../services/PiCoinTransactionService';

class PiCoinTransactionController {
  private piCoinTransactionService: PiCoinTransactionService;

  constructor() {
    this.piCoinTransactionService = new PiCoinTransactionService();
  }

  async createPiCoinTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const piCoinTransaction = await this.piCoinTransactionService.createPiCoinTransaction(req.body);
      res.send(piCoinTransaction);
    } catch (err) {
      next(err);
    }
  }

  async getPiCoinTransactions(req: Request, res: Response, next: NextFunction) {
    try {
      const piCoinTransactions = await this.piCoinTransactionService.getPiCoinTransactions();
      res.send(piCoinTransactions);
    } catch (err) {
      next(err);
    }
  }

  async getPiCoinTransactionById(req: Request, res: Response, next: NextFunction) {
    try {
      const piCoinTransaction = await this.piCoinTransactionService.getPiCoinTransactionById(req.params.id);
      res.send(piCoinTransaction);
    } catch (err) {
      next(err);
    }
  }

  async updatePiCoinTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const piCoinTransaction = await this.piCoinTransactionService.updatePiCoinTransaction(req.params.id, req.body);
      res.send(piCoinTransaction);
    } catch (err) {
      next(err);
    }
  }

  async deletePiCoinTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      await this.piCoinTransactionService.deletePiCoinTransaction(req.params.id);
      res.send({ message: 'Pi Coin Transaction deleted successfully' });
    } catch (err) {
      next(err);
    }
  }
}

export default PiCoinTransactionController;
