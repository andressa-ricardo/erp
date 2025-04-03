import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './produto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async criar(@Body() data: ProdutoDto) {
    const produto = await this.produtoService.create(data);
    return { message: 'Produto criado com sucesso!', produto };
  }

  @Get()
  async listarTodos() {
    const produtos = await this.produtoService.findAll();
    return { message: 'Lista de produtos carregada com sucesso!', produtos };
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    const produto = await this.produtoService.findById(id);
    return { message: 'Produto encontrado!', produto };
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() data: Partial<ProdutoDto>) {
    const produto = await this.produtoService.update(id, data);
    return { message: 'Produto atualizado com sucesso!', produto };
  }

  @Delete(':id')
  async deletar(@Param('id') id: string) {
    await this.produtoService.delete(id);
    return { message: 'Produto deletado com sucesso!' };
  }
}
