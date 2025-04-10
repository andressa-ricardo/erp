import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductSupplierDto } from './product-supplier.dto';

@Injectable()
export class ProductSupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProductSupplierDto) {
    return this.prisma.productSupplier.create({ data });
  }

  async update(id: string, data: Partial<ProductSupplierDto>) {
    return this.prisma.productSupplier.update({
      where: { id },
      data,
    });
  }

  async findAll() {
    return this.prisma.productSupplier.findMany({
      include: {
        product: true,
        supplier: true,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.productSupplier.delete({ where: { id } });
  }
}
