import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './supplier.dto';

@Controller('product/supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  async create(@Body() data: SupplierDto) {
    const supplier = await this.supplierService.create(data);
    return { message: 'Fornecedor criado com sucesso!', supplier };
  }

  @Get()
  async findAll() {
    const suppliers = await this.supplierService.findAll();
    return { message: 'Lista de fornecedores carregada!', suppliers };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const supplier = await this.supplierService.findById(id);
    return { message: 'Fornecedor encontrado!', supplier };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<SupplierDto>) {
    const supplier = await this.supplierService.update(id, data);
    return { message: 'Fornecedor atualizado com sucesso!', supplier };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.supplierService.delete(id);
    return { message: 'Fornecedor removido com sucesso!' };
  }
}
