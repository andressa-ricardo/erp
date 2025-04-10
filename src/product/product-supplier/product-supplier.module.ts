import { Module } from '@nestjs/common';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService, PrismaService],
  exports: [ProductSupplierService],
})
export class ProductSupplierModule {}
