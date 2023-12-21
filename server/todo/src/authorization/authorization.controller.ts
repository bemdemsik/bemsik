import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { UserService } from '../users/user.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUser } from '../users/dto/create-user.dto';
import { User } from '../users/modules/user.model';
import { LocalAuthGuard } from './guards/local.guar';
@Controller('auth')
export class AuthorizationController {
  constructor(
    private readonly authorizationService: AuthorizationService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authorizationService.login(req.user as User);
  }

  @Post('register')
  async register(@Body() dto: CreateUser) {
    return this.authorizationService.register(dto);
  }
}
