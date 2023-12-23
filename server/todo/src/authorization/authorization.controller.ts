import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { Response, Request } from 'express';
import { UserDTO } from '../users/dto/user-dto';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response, @Body() dto: UserDTO) {
    const userData = await this.authorizationService.login(dto);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  @Post('register')
  async register(
    @Req() req: Request,
    @Res() res: Response,
    @Body() dto: CreateUser,
  ) {
    const userData = await this.authorizationService.register(dto);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    const { refreshToken } = req.cookies;
    const token = await this.authorizationService.logout(refreshToken);
    res.clearCookie('refreshToken');
    return res.json(token);
  }

  @Get('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await this.authorizationService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    return res.json(userData);
  }
}
