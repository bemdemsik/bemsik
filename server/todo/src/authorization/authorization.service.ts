import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../users/user.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { User } from '../users/modules/user.model';
import { TokenService } from '../token/token.service';
import * as bcrypt from 'bcrypt';
import { UserDTO } from '../users/dto/user-dto';

@Injectable()
export class AuthorizationService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(dto: CreateUser) {
    try {
      if (await this.userService.findOneByEmail(dto.email)) {
        throw new ForbiddenException('Пользователь с таким email уже существует',);
      }
      const user = new User();
      user.name = dto.name;
      user.email = dto.email;
      user.password = await bcrypt.hash(dto.password, 7);
      const dataUser = await this.userService.create(user);
      const tokens = this.tokenService.generateToken(
        dataUser.name,
        dataUser.email,
      );
      await this.tokenService.saveToken(dataUser.id, tokens.refreshToken);
      const payload = {
        ...tokens,
        id: user.id,
      };
      return payload;
    } catch (err) {
      console.log(err);
      throw new ForbiddenException('Ошибка при регистрации');
    }
  }

  async login(user: UserDTO) {
    const userData = await this.userService.findOneByEmail(user.email);
    if (!userData) {
      throw new UnauthorizedException('Пользователь с таким email не найден');
    }
    if (!(await bcrypt.compare(user.password, userData.password))) {
      throw new UnauthorizedException('Неверно введены данные');
    }
    const tokens = this.tokenService.generateToken(userData.name, user.email);
    await this.tokenService.saveToken(userData.id, tokens.refreshToken);
    const payload = {
      ...tokens,
      id: userData.id,
    };
    return payload;
  }

  async logout(refreshToken: string){
    const token = await this.tokenService.removeToken(refreshToken);
    return token;
  }


  async refresh(refreshToken: string) {
    if (!refreshToken)
      throw new UnauthorizedException('Вы не авторизованы')
    const userData = this.tokenService.validateRefreshToken(refreshToken);
    const tokenFromDatabase = await this.tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDatabase) {
      throw new UnauthorizedException('Вы не авторизованы');
    }
    const user = await this.userService.findOne(tokenFromDatabase.id);
    const tokens = this.tokenService.generateToken(user.name, user.email);
    await this.tokenService.saveToken(user.id, tokens.refreshToken);
    const payload = {
      ...tokens,
      id: user.id,
    };
    return payload;
  }
}
