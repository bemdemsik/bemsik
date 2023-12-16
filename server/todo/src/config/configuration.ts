import {registerAs} from "@nestjs/config";
import {EnumConfig} from "./enumCongig/enumConfig";
import {pgConfig} from "./postgres.config";

export const databaseConfig = registerAs(
    EnumConfig.DATABASE,
    () => ({
        pg: {
            ...pgConfig(),
        },
    }));