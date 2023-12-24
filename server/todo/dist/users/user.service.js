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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./modules/user.model");
const sequelize_1 = require("@nestjs/sequelize");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll() {
        return this.userModel.findAll();
    }
    async findOne(id) {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }
    async findOneByEmail(email) {
        const qwe = await this.userModel.findOne({
            where: {
                email: email,
            },
        });
        console.log(qwe);
        return qwe;
    }
    create(createUser) {
        const user = new user_model_1.User();
        user.name = createUser.name;
        user.email = createUser.email;
        user.password = createUser.password;
        return user.save();
    }
    update(id, changeUser) {
        return this.userModel.update({
            ...changeUser,
        }, {
            where: {
                id,
            },
            returning: true,
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map