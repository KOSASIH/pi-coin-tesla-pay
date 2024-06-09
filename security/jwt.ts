import jwt from 'jsonwebtoken';

// JSON Web Token configuration
const jwtConfig = {
  secretKey: 'pi_coin_tesla_pay_secret_key',
  expiresIn: '1h',
};

// Generate a JWT token
export const generateToken = (user: any) => {
  const payload = {
    iss: 'pi_coin_tesla_pay',
    sub: user.id,
    email: user.email,
    aud: 'https://www.pi-coin-tesla-pay.com',
    exp: Math.floor(Date.now() / 1000) + jwtConfig.expiresIn,
  };
  return jwt.sign(payload, jwtConfig.secretKey);
};

// Verify a JWT token
export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, jwtConfig.secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

// Middleware for authentication
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).send({ error: 'Invalid token' });
  }
  req.user = decoded;
  next();
};
