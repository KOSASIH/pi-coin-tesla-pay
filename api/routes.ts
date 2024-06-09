import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';

const router = express.Router();
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'pi_coin_tesla_pay',
  user: 'pi_coin_tesla_pay_user',
  password: 'pi_coin_tesla_pay_password',
});

router.post('/api/pay', async (req: Request, res: Response) => {
  const { piAddress, amount, userId } = req.body;
  const payment = await pool.query(`INSERT INTO pi_coin_payments (user_id, pi_address, amount) VALUES ($1, $2, $3) RETURNING *`, [userId, piAddress, amount]);
  res.json(payment.rows[0]);
});

router.get('/api/products', async (req: Request, res: Response) => {
  const products = await pool.query('SELECT * FROM tesla_products');
  res.json(products.rows);
});

router.get('/api/products/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await pool.query(`SELECT * FROM tesla_products WHERE id = $1`, [id]);
  res.json(product.rows[0]);
});

export default router;
