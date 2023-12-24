import api from './index';
import { LoginDTO, LoginResponse, RegisterDTO, RegisterResponse } from './dto/auth.dto';
import { parseCookies } from 'nookies';

export class AuthApi {
  static async login(values: LoginDTO):Promise<LoginResponse>  {
    return (await api.post('/auth/login', values)).data
  }

  static async register(values: RegisterDTO):Promise<RegisterResponse>  {
    return (await api.post('/auth/register', values)).data
  }

  static async logout()  {
    return await api.post('/auth/logout', parseCookies())
  }
}