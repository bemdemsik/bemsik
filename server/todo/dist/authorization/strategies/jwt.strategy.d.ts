import { Strategy } from 'passport-jwt';
import { UserService } from '../../users/user.service';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    validate(payload: any): Promise<{
        id: any;
    }>;
}
export {};
