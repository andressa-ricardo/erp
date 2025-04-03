import { IsString, IsOptional, IsNumber, IsBoolean, IsUUID, IsDateString } from 'class-validator';

export class ProdutoDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  codigoBarras?: string;

  @IsString()
  codigoEAM: string;

  @IsString()
  unidade: string;

  @IsUUID()
  categoriaId: string;

  @IsNumber()
  estoqueMinimo: number;

  @IsOptional()
  @IsNumber()
  estoqueMaximo?: number;

  @IsNumber()
  precoCusto: number;

  @IsNumber()
  precoVenda: number;

  @IsOptional()
  @IsNumber()
  precoPromocao?: number;

  @IsOptional()
  @IsDateString()
  precoPromocaoValidoAte?: Date;

  @IsBoolean()
  precoPromocaoAtivo: boolean;

  @IsBoolean()
  ativo: boolean;
}
