"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationModule = void 0;
const common_1 = require("@nestjs/common");
const authorization_controller_1 = require("./authorization.controller");
const authorization_service_1 = require("./authorization.service");
const local_strategy_1 = require("./strategies/local.strategy");
const user_module_1 = require("../users/user.module");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const token_module_1 = require("../token/token.module");
let AuthorizationModule = class AuthorizationModule {
};
exports.AuthorizationModule = AuthorizationModule;
exports.AuthorizationModule = AuthorizationModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, passport_1.PassportModule, token_module_1.TokenModule],
        providers: [authorization_service_1.AuthorizationService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [authorization_controller_1.AuthorizationController],
    })
], AuthorizationModule);
//# sourceMappingURL=authorization.module.js.map