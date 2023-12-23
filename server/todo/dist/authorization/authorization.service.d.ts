import { UserService } from '../users/user.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { TokenService } from '../token/token.service';
import { UserDTO } from '../users/dto/user-dto';
export declare class AuthorizationService {
    private userService;
    private tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    validateUser(email: string, password: string): Promise<any>;
    register(dto: CreateUser): Promise<{
        id: any;
        accessToken: string;
        refreshToken: string;
    }>;
    login(user: UserDTO): Promise<{
        id: any;
        accessToken: string;
        refreshToken: string;
    }>;
    logout(refreshToken: any): Promise<number>;
}
