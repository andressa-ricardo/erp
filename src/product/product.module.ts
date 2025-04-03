import { Module } from '@nestjs/common';
import { ProdutoController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProdutoController],
  providers: [PrismaService, ProductService],
})
export class ProductModule {}
