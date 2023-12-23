import { Token } from './models/token.model';
export declare class TokenService {
    private tokenModel;
    constructor(tokenModel: typeof Token);
    saveToken(userId: number, refreshToken: string): Promise<Token>;
    removeToken(refreshToken: any): Promise<number>;
    generateToken(name: string, email: string): {
        accessToken: string;
        refreshToken: string;
    };
}
