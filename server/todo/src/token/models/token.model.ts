import {
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Token extends Model {
  @PrimaryKey
  @Column
  id: string; // Добавляем уникальный ключ для токена

  @Column
  userId: string;

  @Column
  tokenRefresh: string;
}
