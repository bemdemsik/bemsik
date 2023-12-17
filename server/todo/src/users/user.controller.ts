import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
import { ChangeUser } from './dto/change-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUser() {
    return this.userService.findAll();
  }

  @Get(':id')
  getOneUser(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createUser(@Body() createUser: CreateUser) {
    return this.userService.create(createUser);
  }

  @Patch(':id')
  changeUser(@Body() changeUser: ChangeUser, @Param('id') id: string) {
    return this.userService.update(id, changeUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
