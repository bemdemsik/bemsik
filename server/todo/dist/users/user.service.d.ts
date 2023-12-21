import { User } from './modules/user.model';
import { CreateUser } from './dto/create-user.dto';
import { ChangeUser } from './dto/change-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    findOneByName(name: string): Promise<User | null>;
    create(createUser: CreateUser): Promise<User>;
    update(id: string, changeUser: ChangeUser): Promise<[affectedCount: number, affectedRows: User[]]>;
    remove(id: string): Promise<void>;
}
