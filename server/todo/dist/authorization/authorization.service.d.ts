import { UserService } from '../users/user.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { User } from '../users/modules/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthorizationService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(name: string, password: string): Promise<any>;
    register(dto: CreateUser): Promise<{
        token: string;
    }>;
    login(user: User): Promise<{
        token: string;
    }>;
}
