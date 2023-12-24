import api from './index';
import { IUser, IUserState } from '../types/types';
export class UserApi {
  static async getAllUsers():Promise<IUser[]>  {
      return (await api.get('/users')).data;
  }
}