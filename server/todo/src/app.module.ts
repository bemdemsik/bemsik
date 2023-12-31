import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todo.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { sequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { UserModule } from './users/user.module';
import { TokenModule } from './token/token.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: sequelizeConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UserModule,
    TodoModule,
    TokenModule,
    AuthorizationModule,
  ],
})
export class AppModule {}
