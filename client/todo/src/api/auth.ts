import axios from './index';
import { LoginDTO, LoginResponse, RegisterDTO, RegisterResponse } from './dto/auth.dto';

export class AuthApi {
  static async login(values: LoginDTO):Promise<LoginResponse>  {
    return (await axios.post('/auth/login', values)).data
  }

  static async register(values: RegisterDTO):Promise<RegisterResponse>  {
    return (await axios.post('/auth/register', values)).data
  }
}