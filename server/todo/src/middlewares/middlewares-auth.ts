import { Request, Response, NextFunction } from 'express';
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenService } from '../token/token.service';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly tokenService: TokenService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(new UnauthorizedException('Вы не авторизованы'));
    }

    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      return next(new UnauthorizedException('Вы не авторизованы'));
    }

    const userData = this.tokenService.validateAssessToken(accessToken);
    if (!userData) {
      return next(new UnauthorizedException('Вы не авторизованы'));
    }

    req.user = userData;
    next();
  }
}
