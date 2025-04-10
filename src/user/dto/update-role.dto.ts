import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateRoleDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsEnum(Role)
  role: Role;
}
