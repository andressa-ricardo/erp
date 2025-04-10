import { IsEnum, IsInt, IsString, IsOptional } from 'class-validator';
import { MovementType } from '@prisma/client';

export class MovementDto {
  @IsEnum(MovementType)
  type: MovementType;

  @IsInt()
  quantity: number;

  @IsString()
  productId: string;

  @IsOptional()
  @IsString()
  supplierId?: string;
}
