import { IsNotEmpty } from 'class-validator';

export class CreatePasswordDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
