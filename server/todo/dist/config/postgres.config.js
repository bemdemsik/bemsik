"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgConfig = void 0;
const config_1 = require("@nestjs/config");
const enumConfig_1 = require("./enumCongig/enumConfig");
exports.pgConfig = (0, config_1.registerAs)(enumConfig_1.EnumConfig.DATABASE, () => {
    return {
        dialect: process.env.SQL_DIALECT || 'postgres',
        logging: process.env.SQL_LOGGING === 'true' ? true : false,
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true
    };
});
//# sourceMappingURL=postgres.config.js.map