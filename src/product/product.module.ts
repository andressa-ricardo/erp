import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  controllers: [ProductController, CategoryController],
  providers: [PrismaService, ProductService, CategoryService],
})
export class ProductModule {}
