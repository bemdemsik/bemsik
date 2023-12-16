import { Module } from '@nestjs/common';
import {TodoModule} from "./todos/todo.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {sequelizeConfigService} from "./config/sequelizeConfig.service";
import {databaseConfig} from "./config/configuration";

@Module({
  imports: [
      SequelizeModule.forRootAsync({
        imports: [ConfigModule],
        useClass: sequelizeConfigService,
      }),
      ConfigModule.forRoot({
        load: [databaseConfig],
      }),
      TodoModule,
  ],
})
export class AppModule {}
