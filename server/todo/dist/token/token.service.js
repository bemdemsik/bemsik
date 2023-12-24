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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
const token_model_1 = require("./models/token.model");
const process_1 = require("process");
const jwt = require("jsonwebtoken");
const config_1 = require("@nestjs/config");
let TokenService = class TokenService {
    constructor(tokenModel, configService) {
        this.tokenModel = tokenModel;
        this.configService = configService;
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await this.tokenModel.findOne({
            where: {
                userId: userId,
            },
        });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const createToken = await this.tokenModel.create({
            userId: userId,
            refreshToken,
        });
        return createToken.save();
    }
    async removeToken(refreshToken) {
        const tokenData = await this.tokenModel.destroy({
            where: {
                refreshToken,
            },
        });
        return tokenData;
    }
    generateToken(name, email) {
        const accessToken = jwt.sign({ name, email }, this.configService.get('JWT_ACCESS_SECRET_KEY'), {
            expiresIn: '5m',
        });
        const refreshToken = jwt.sign({ name, email }, this.configService.get('JWT_REFRESH_SECRET_KEY'), {
            expiresIn: '30m',
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async findToken(refreshToken) {
        const tokenData = await this.tokenModel.findOne({
            where: {
                refreshToken,
            },
        });
        return tokenData;
    }
    validateAssessToken(token) {
        try {
            const userData = jwt.verify(token, process_1.default.env.JWT_ACCESS_SECRET_KEY);
            return userData;
        }
        catch (err) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process_1.default.env.JWT_REFRESH_SECRET_KEY);
            return userData;
        }
        catch (err) {
            return null;
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(token_model_1.Token)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], TokenService);
//# sourceMappingURL=token.service.js.map