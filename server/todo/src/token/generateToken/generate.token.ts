import * as jwt from 'jsonwebtoken';
import * as process from 'process';

export const generateToken = (
  userId: string,
  name: string,
  expiresIn: string,
) => {
  const secretKey = process.env.SECRET_KEY;
  return jwt.sign({ userId, name }, secretKey, { expiresIn: expiresIn });
};
