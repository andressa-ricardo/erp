import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class ToggleAccessDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsBoolean()
  active: boolean;

  code: string;
  newPassword: string;
}
