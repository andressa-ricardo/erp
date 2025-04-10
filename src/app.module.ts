import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  imports: [AuthModule],
})
export class UserModule {}
