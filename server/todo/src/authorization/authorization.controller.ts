import {
  Controller,
  Post,
  Res,
  Body,
  Req,
  Get,
  UseGuards,
} from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { Response, Request, NextFunction } from 'express';
import { UserDTO } from '../users/dto/user-dto';
import { LocalAuthGuard } from './guards/local.guar';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}
  @Post('login')
  async login(
    @Req() req: Request,
    @Res() res: Response,
    @Body() dto: UserDTO,
    next: NextFunction,
  ) {
    try {
      const userData = await this.authorizationService.login(dto);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {
      next(err);
    }
  }

  @Post('register')
  async register(@Res() res: Response, @Body() dto: CreateUser) {
    try {
      const userData = await this.authorizationService.register(dto);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    try {
      console.log(req);
      const refreshToken = req.cookies._token;
      console.log(refreshToken);
      const token = await this.authorizationService.logout(refreshToken);
      res.clearCookie('_token');
      return res.json(token);
    } catch (err) {}
  }

  @Get('refresh')
  @UseGuards(LocalAuthGuard)
  async refresh(@Req() req: Request, @Res() res: Response) {
    try {
      const refreshToken = req.cookies._token;
      const userData = await this.authorizationService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (err) {}
  }
}
