import { Module } from '@nestjs/common';
import { ProdutoController } from './product.controller';
import { ProductService } from './product.service';
import { ProductFornecedorController } from './product.fornecedor/product.fornecedor.controller';
import { ProductCategoriaController } from './product.categoria/product.categoria.controller';

@Module({
  controllers: [ProdutoController, ProductFornecedorController, ProductCategoriaController],
  providers: [ProductService],
})
export class ProductModule {}
