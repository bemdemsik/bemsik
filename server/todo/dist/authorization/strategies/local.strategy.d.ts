import { Strategy } from 'passport-local';
import { AuthorizationService } from '../authorization.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthorizationService);
    validate(name: string, password: string): Promise<any>;
}
export {};
