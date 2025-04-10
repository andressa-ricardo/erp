import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovementDto } from './movement.dto';

@Injectable()
export class MovementService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MovementDto) {
    return this.prisma.movement.create({ data });
  }

  async findAll() {
    return this.prisma.movement.findMany({
      include: {
        product: true,
        supplier: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return this.prisma.movement.findUnique({
      where: { id },
      include: {
        product: true,
        supplier: true,
      },
    });
  }

  async update(id: string, data: Partial<MovementDto>) {
    return this.prisma.movement.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.movement.delete({ where: { id } });
  }
}
