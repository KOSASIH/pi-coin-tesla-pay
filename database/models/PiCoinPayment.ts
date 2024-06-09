import { pool } from '../config';

// Pi Coin payment model
class PiCoinPayment {
  id: number;
  userId: number;
  piAddress: string;
  amount: number;
  transactionHash: string;
  createdAt: Date;
  updatedAt: Date;

  static async create(piAddress: string, amount: number, userId: number) {
    const query = {
      text: `INSERT INTO pi_coin_payments (user_id, pi_address, amount) VALUES ($1, $2, $3) RETURNING *`,
      values: [userId, piAddress, amount],
    };
    const result = await pool.query(query);
    return result.rows[0];
  }

  static async getByUserId(userId: number) {
    const query = {
      text: `SELECT * FROM pi_coin_payments WHERE user_id = $1`,
      values: [userId],
    };
    const result = await pool.query(query);
    return result.rows;
  }
}

export default PiCoinPayment;
