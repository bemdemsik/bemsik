import { Token } from './models/token.model';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
export declare class TokenService {
    private tokenModel;
    private readonly configService;
    constructor(tokenModel: typeof Token, configService: ConfigService);
    saveToken(userId: number, refreshToken: string): Promise<Token>;
    removeToken(refreshToken: any): Promise<number>;
    generateToken(name: string, email: string): {
        accessToken: string;
        refreshToken: string;
    };
    findToken(refreshToken: any): Promise<Token>;
    validateAssessToken(token: string): string | jwt.JwtPayload;
    validateRefreshToken(token: string): string | jwt.JwtPayload;
}
