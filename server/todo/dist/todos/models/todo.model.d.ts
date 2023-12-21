import { Model } from 'sequelize-typescript';
export declare class Todo extends Model {
    title: string;
    userId: string;
    done: boolean;
}
