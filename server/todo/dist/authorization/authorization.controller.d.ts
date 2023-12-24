import { AuthorizationService } from './authorization.service';
import { CreateUser } from '../users/dto/create-user.dto';
import { Response, Request, NextFunction } from 'express';
import { UserDTO } from '../users/dto/user-dto';
export declare class AuthorizationController {
    private readonly authorizationService;
    constructor(authorizationService: AuthorizationService);
    login(req: Request, res: Response, dto: UserDTO, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    register(res: Response, dto: CreateUser): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    refresh(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
