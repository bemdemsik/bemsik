import { AuthorizationService } from './authorization.service';
import { CreateUser } from '../users/dto/create-user.dto';
export declare class AuthorizationController {
    private readonly authorizationService;
    constructor(authorizationService: AuthorizationService);
    login(req: any): Promise<{
        token: string;
    }>;
    register(dto: CreateUser): Promise<{
        token: string;
    }>;
}
