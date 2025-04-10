import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './category.dto';

@Controller('product/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategoryProduct(@Body() data: CategoryDto) {
    const category = await this.categoryService.create(data);
    return { message: 'Categoria criada com sucesso!', category };
  }

  @Get()
  async listCategories() {
    const categories = await this.categoryService.findAll();
    return {
      message: 'Lista de categorias carregada com sucesso!',
      categories,
    };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const category = await this.categoryService.findById(id);
    return { message: 'Categoria encontrada!', category };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<CategoryDto>) {
    const category = await this.categoryService.update(id, data);
    return { message: 'Categoria atualizada com sucesso!', category };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.categoryService.delete(id);
    return { message: 'Categoria deletada com sucesso!' };
  }
}
