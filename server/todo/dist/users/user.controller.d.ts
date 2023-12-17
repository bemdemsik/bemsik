import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
import { ChangeUser } from './dto/change-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUser(): Promise<import("./modules/user.model").User[]>;
    getOneUser(id: string): Promise<import("./modules/user.model").User>;
    createUser(createUser: CreateUser): Promise<import("./modules/user.model").User>;
    changeUser(changeUser: ChangeUser, id: string): Promise<[affectedCount: number, affectedRows: import("./modules/user.model").User[]]>;
    deleteUser(id: string): Promise<void>;
}
