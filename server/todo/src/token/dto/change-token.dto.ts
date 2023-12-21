import { IsNotEmpty } from 'class-validator';
export class ChangeToken {
  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  readonly tokenRefresh: string;
}
