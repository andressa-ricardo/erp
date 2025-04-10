import { IsString, Length } from 'class-validator';

export class CategoryDto {
  @IsString()
  @Length(2, 50, { message: 'O nome deve ter entre 2 e 50 caracteres.' })
  name: string;
}
