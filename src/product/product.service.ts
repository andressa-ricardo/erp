import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProductDto) {
    return this.prisma.product.create({ data });
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findById(id: string) {
    const produto = await this.prisma.product.findUnique({ where: { id } });
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async update(id: string, data: Partial<ProductDto>) {
    const produtoExistente = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!produtoExistente)
      throw new NotFoundException('Produto não encontrado.');

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const produtoExistente = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!produtoExistente)
      throw new NotFoundException('Produto não encontrado.');

    return this.prisma.product.delete({ where: { id } });
  }
}
