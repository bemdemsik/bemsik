import { Model } from 'sequelize-typescript';
export declare class Token extends Model {
    id: string;
    userId: string;
    tokenRefresh: string;
}
