import { UserService } from './user.service';
import { CreateUser } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUser(): Promise<import("./modules/user.model").User[]>;
    getOneUser(id: number): Promise<import("./modules/user.model").User>;
    createUser(createUser: CreateUser): Promise<import("./modules/user.model").User>;
}
