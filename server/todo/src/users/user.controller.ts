import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
import { AuthMiddleware } from '../middlewares/middlewares-auth';
@Controller('users')
@UseInterceptors(AuthMiddleware)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Get(':id')
  getOneUser(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createUser(@Body() createUser: CreateUser) {
    return this.userService.create(createUser);
  }
}
