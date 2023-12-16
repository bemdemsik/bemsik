import { SequelizeModuleOptions, SequelizeOptionsFactory } from "@nestjs/sequelize";
import { ConfigService } from "@nestjs/config";
export declare class sequelizeConfigService implements SequelizeOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createSequelizeOptions(connectionName?: string): SequelizeModuleOptions;
}
