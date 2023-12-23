import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenModule } from '../token/token.module';
import { TokenService } from '../token/token.service';

@Module({
  imports: [UserModule, PassportModule, TokenModule],
  providers: [AuthorizationService, LocalStrategy, JwtStrategy],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
