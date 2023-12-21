import { Injectable } from '@nestjs/common';
import { User } from './modules/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUser } from './dto/create-user.dto';
import { ChangeUser } from './dto/change-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async findOne(id: string): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }
  async findOneByName(name: string): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        name,
      },
    });
  }
  create(createUser: CreateUser): Promise<User> {
    const user = new User();
    user.name = createUser.name;
    user.email = createUser.email;
    user.password = createUser.password;
    return user.save();
  }

  update(
    id: string,
    changeUser: ChangeUser,
  ): Promise<[affectedCount: number, affectedRows: User[]]> {
    return this.userModel.update(
      {
        ...changeUser,
      },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
  }
  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
