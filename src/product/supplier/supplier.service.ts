import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SupplierDto } from './supplier.dto';

@Injectable()
export class SupplierService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: SupplierDto) {
    return this.prisma.supplier.create({ data });
  }

  async findAll() {
    return this.prisma.supplier.findMany();
  }

  async findById(id: string) {
    return this.prisma.supplier.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<SupplierDto>) {
    return this.prisma.supplier.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.supplier.delete({ where: { id } });
  }
}
