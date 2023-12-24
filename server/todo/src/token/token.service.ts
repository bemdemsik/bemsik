import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Token } from './models/token.model';
import process from 'process';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token)
    private tokenModel: typeof Token,
    private readonly configService: ConfigService,
  ) {}

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await this.tokenModel.findOne({
      where: {
        userId: userId,
      },
    });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const createToken = await this.tokenModel.create({
      userId: userId,
      refreshToken,
    });
    return createToken.save();
  }

  async removeToken(refreshToken) {
    const tokenData = await this.tokenModel.destroy({
      where: {
        refreshToken,
      },
    });
    return tokenData;
  }
  generateToken(name: string, email: string) {
    const accessToken = jwt.sign(
      { name, email },
      this.configService.get('JWT_ACCESS_SECRET_KEY'),
      {
        expiresIn: '5m',
      },
    );
    const refreshToken = jwt.sign(
      { name, email },
      this.configService.get('JWT_REFRESH_SECRET_KEY'),
      {
        expiresIn: '30m',
      },
    );
    return {
      accessToken,
      refreshToken,
    };
  }
  async findToken(refreshToken) {
    const tokenData = await this.tokenModel.findOne({
      where: {
        refreshToken,
      },
    });
    return tokenData;
  }

  validateAssessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }
  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }
}
