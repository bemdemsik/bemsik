import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthorizationService) {
    super({
      usernameField: 'name',
    });
  }

  async validate(name: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(name, password);

    if (!user) {
      throw new UnauthorizedException('Неверный логин или пароль');
    }

    return user;
  }
}
