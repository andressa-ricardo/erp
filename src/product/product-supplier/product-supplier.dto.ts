import { IsString, IsOptional, IsNumber } from 'class-validator';

export class ProductSupplierDto {
  @IsString()
  productId: string;

  @IsString()
  supplierId: string;

  @IsOptional()
  @IsNumber()
  purchasePrice?: number;
}
