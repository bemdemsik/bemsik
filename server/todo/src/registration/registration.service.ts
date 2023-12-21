import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/modules/user.model';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
}