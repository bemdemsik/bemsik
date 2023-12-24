import { User } from './modules/user.model';
import { CreateUser } from './dto/create-user.dto';
import { ChangeUser } from './dto/change-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    findOneByEmail(email: string): Promise<User | null>;
    create(createUser: CreateUser): Promise<User>;
    update(id: number, changeUser: ChangeUser): Promise<[affectedCount: number, affectedRows: User[]]>;
    remove(id: number): Promise<void>;
}
