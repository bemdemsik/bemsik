import { Model } from 'sequelize-typescript';
export declare class Token extends Model {
    userId: number;
    refreshToken: string;
}
