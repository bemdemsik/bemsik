import { IsNotEmpty } from 'class-validator';
export class CreateToken {
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly tokenRefresh: string;
}
