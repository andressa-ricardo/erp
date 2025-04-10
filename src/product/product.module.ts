import { Module } from '@nestjs/common';
import { SupplierModule } from './supplier/supplier.module';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';
import { MovementModule } from './movement/movement.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    CategoryModule,
    SupplierModule,
    ProductSupplierModule,
    MovementModule,
  ],
})
export class ProductModule {}
