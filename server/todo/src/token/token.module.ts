import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Token } from './models/token.model';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';

@Module({
  imports: [SequelizeModule.forFeature([Token])],
  providers: [TokenService],
  controllers: [TokenController],
  exports: [TokenService],
})
export class TokenModule {}
