"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../users/user.service");
const user_model_1 = require("../users/modules/user.model");
const token_service_1 = require("../token/token.service");
const bcrypt = require("bcrypt");
let AuthorizationService = class AuthorizationService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findOneByEmail(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async register(dto) {
        try {
            if (await this.userService.findOneByEmail(dto.email)) {
                throw new common_1.ForbiddenException('Пользователь с таким email уже существует');
            }
            const user = new user_model_1.User();
            user.name = dto.name;
            user.email = dto.email;
            user.password = await bcrypt.hash(dto.password, 7);
            const dataUser = await this.userService.create(user);
            const tokens = this.tokenService.generateToken(dataUser.name, dataUser.email);
            await this.tokenService.saveToken(dataUser.id, tokens.refreshToken);
            const payload = {
                ...tokens,
                id: user.id,
            };
            console.log(payload);
            return payload;
        }
        catch (err) {
            console.log(err);
            throw new common_1.ForbiddenException('Ошибка при регистрации');
        }
    }
    async login(user) {
        console.log(user);
        const userData = await this.userService.findOneByEmail(user.email);
        console.log(user, userData);
        if (!userData) {
            throw new common_1.UnauthorizedException('Пользователь с таким email не найден');
        }
        if (!(await bcrypt.compare(user.password, userData.password))) {
            throw new common_1.UnauthorizedException('Неверно введены данные');
        }
        const tokens = this.tokenService.generateToken(userData.name, user.email);
        await this.tokenService.saveToken(userData.id, tokens.refreshToken);
        const payload = {
            ...tokens,
            id: userData.id,
        };
        console.log(payload);
        return payload;
    }
    async logout(refreshToken) {
        const token = await this.tokenService.removeToken(refreshToken);
        return token;
    }
};
exports.AuthorizationService = AuthorizationService;
exports.AuthorizationService = AuthorizationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthorizationService);
//# sourceMappingURL=authorization.service.js.map