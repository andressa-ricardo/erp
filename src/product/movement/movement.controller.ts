import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { MovementService } from './movement.service';
  import { MovementDto } from './movement.dto';
  
  @Controller('product/movement')
  export class MovementController {
    constructor(private readonly movementService: MovementService) {}
  
    @Post()
    async create(@Body() data: MovementDto) {
      const movement = await this.movementService.create(data);
      return { message: 'Movimentação registrada com sucesso!', movement };
    }
  
    @Get()
    async findAll() {
      const movements = await this.movementService.findAll();
      return { message: 'Lista de movimentações carregada!', movements };
    }
  
    @Get(':id')
    async findById(@Param('id') id: string) {
      const movement = await this.movementService.findById(id);
      return { message: 'Movimentação encontrada!', movement };
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<MovementDto>) {
      const movement = await this.movementService.update(id, data);
      return { message: 'Movimentação atualizada com sucesso!', movement };
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      await this.movementService.delete(id);
      return { message: 'Movimentação excluída com sucesso!' };
    }
  }
  