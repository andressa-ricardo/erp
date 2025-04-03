import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUUID,
  IsDateString,
} from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  barcode?: string;

  @IsString()
  eamCode: string;

  @IsString()
  unit: string;

  @IsUUID()
  categoryId: string;

  @IsNumber()
  minimumStock: number;

  @IsOptional()
  @IsNumber()
  maximumStock?: number;

  @IsNumber()
  costPrice: number;

  @IsNumber()
  salePrice: number;

  @IsOptional()
  @IsNumber()
  promotionalPrice?: number;

  @IsOptional()
  @IsDateString()
  promotionalPriceValidUntil?: Date;

  @IsBoolean()
  promotionalPriceActive: boolean;

  @IsBoolean()
  active: boolean;
}
