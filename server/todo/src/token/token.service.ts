import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import { Token } from './models/token.model';
@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token)
    private tokenModel: typeof Token,
  ) {}
}
