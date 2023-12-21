import { IsBoolean, IsNotEmpty } from 'class-validator';
export class CreateTodo {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly userId: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly done: boolean;
}
