export declare const databaseConfig: (() => {
    pg: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchronize: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    pg: {
        dialect: import("sequelize").Dialect;
        logging: boolean;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        autoLoadEntities: boolean;
        synchronize: boolean;
    };
}>;
