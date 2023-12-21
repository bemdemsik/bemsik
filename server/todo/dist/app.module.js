"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const todo_module_1 = require("./todos/todo.module");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const sequelizeConfig_service_1 = require("./config/sequelizeConfig.service");
const configuration_1 = require("./config/configuration");
const user_module_1 = require("./users/user.module");
const token_module_1 = require("./token/token.module");
const authorization_module_1 = require("./authorization/authorization.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: sequelizeConfig_service_1.sequelizeConfigService,
            }),
            config_1.ConfigModule.forRoot({
                load: [configuration_1.databaseConfig],
            }),
            user_module_1.UserModule,
            todo_module_1.TodoModule,
            token_module_1.TokenModule,
            authorization_module_1.AuthorizationModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map