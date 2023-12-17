import { IsNotEmpty } from 'class-validator';
export class ChangeUser {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;
}
