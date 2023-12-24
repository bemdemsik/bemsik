import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TokenModule } from '../token/token.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from '../todos/todo.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    TokenModule,
    TodoModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_REFRESH_SECRET_KEY'),
        signOptions: { expiresIn: configService.get('EXPIRES_IN') },
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  providers: [AuthorizationService, LocalStrategy, JwtStrategy],
  controllers: [AuthorizationController],
})
export class AuthorizationModule {}
