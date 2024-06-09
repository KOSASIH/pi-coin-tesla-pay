import { Pool } from 'pg';

// Database configuration
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'pi_coin_tesla_pay',
  user: 'pi_coin_tesla_pay_user',
  password: 'pi_coin_tesla_pay_password',
};

// Create a PostgreSQL pool
const pool = new Pool(dbConfig);

// Export the pool
export default pool;
