import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './product.dto';

@Controller('product')
export class ProdutoController {
  constructor(private readonly produtoService: ProductService) {}

  @Post()
  async createProductBase(@Body() data: ProductDto) {
    const produto = await this.produtoService.create(data);
    return { message: 'Produto criado com sucesso!', produto };
  }

  @Get()
  async listProducts() {
    const produtos = await this.produtoService.findAll();
    return { message: 'Lista de produtos carregada com sucesso!', produtos };
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    const produto = await this.produtoService.findById(id);
    return { message: 'Produto encontrado!', produto };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<ProductDto>,
  ) {
    const produto = await this.produtoService.update(id, data);
    return { message: 'Produto atualizado com sucesso!', produto };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.produtoService.delete(id);
    return { message: 'Produto deletado com sucesso!' };
  }
}
