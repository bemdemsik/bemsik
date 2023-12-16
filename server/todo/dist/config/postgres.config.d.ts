import { Dialect } from "sequelize";
export declare const pgConfig: (() => {
    dialect: Dialect;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    dialect: Dialect;
    logging: boolean;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    autoLoadEntities: boolean;
    synchronize: boolean;
}>;
