import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './modules/user.model';
import { AuthMiddleware } from '../middlewares/middlewares-auth';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [
    UserService,
    {
      provide: 'JwtAuthGuard',
      useValue: AuthMiddleware,
    },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
