import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ProductDto) {
    return this.prisma.produto.create({ data });
  }

  async findAll() {
    return this.prisma.produto.findMany();
  }

  async findById(id: string) {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async update(id: string, data: Partial<ProductDto>) {
    const produtoExistente = await this.prisma.produto.findUnique({
      where: { id },
    });

    if (!produtoExistente)
      throw new NotFoundException('Produto não encontrado.');

    return this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const produtoExistente = await this.prisma.produto.findUnique({
      where: { id },
    });
    if (!produtoExistente)
      throw new NotFoundException('Produto não encontrado.');

    return this.prisma.produto.delete({ where: { id } });
  }
}
