import { pool } from '../config';

// Tesla product model
class TeslaProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  static async getAll() {
    const query = {
      text: `SELECT * FROM tesla_products`,
    };
    const result = await pool.query(query);
    return result.rows;
  }

  static async getById(id: number) {
    const query = {
      text: `SELECT * FROM tesla_products WHERE id = $1`,
      values: [id],
    };
    const result = await pool.query(query);
    return result.rows[0];
  }
}

export default TeslaProduct;
