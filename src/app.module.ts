import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
@Module({
  imports: [ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
