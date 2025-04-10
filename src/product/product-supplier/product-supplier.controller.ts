import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplierDto } from './product-supplier.dto';

@Controller('product/product-supplier')
export class ProductSupplierController {
  constructor(
    private readonly productSupplierService: ProductSupplierService,
  ) {}

  @Post()
  async create(@Body() data: ProductSupplierDto) {
    const relation = await this.productSupplierService.create(data);
    return { message: 'Relação produto-fornecedor criada!', relation };
  }

  @Get()
  async findAll() {
    const relations = await this.productSupplierService.findAll();
    return { message: 'Relações carregadas!', relations };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<ProductSupplierDto>,
  ) {
    const updated = await this.productSupplierService.update(id, data);
    return { message: 'Associação atualizada com sucesso!', updated };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.productSupplierService.delete(id);
    return { message: 'Relação removida com sucesso!' };
  }
}
