import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CategoryDto) {
    return this.prisma.category.create({ data });
  }

  async findAll() {
    return this.prisma.category.findMany();
  }

  async findById(id: string) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<CategoryDto>) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    return this.prisma.category.delete({ where: { id } });
  }
}
