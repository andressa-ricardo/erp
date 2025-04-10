import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ToggleAccessDto } from './dto/toggle-access.dto';
import { v4 as uuid } from 'uuid';
import { EmailService } from './email/email.service';

@Injectable()
export class UserService {
  sendVerificationEmail(userId: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
  ) {}

  async createUser(data: CreateUserDto) {
    const code = uuid();
    const user = await this.prisma.user.create({
      data: {
        ...data,
        verificationCode: code,
      },
    });

    await this.emailService.sendVerificationEmail(user.email, code);
    return { message: 'Usuário criado. Verifique seu e-mail.' };
  }

  async verifyEmail(code: string) {
    const user = await this.prisma.user.findFirst({
      where: { verificationCode: code },
    });
    if (!user) throw new Error('Código inválido');

    await this.prisma.user.update({
      where: { id: user.id },
      data: { isVerified: true, verificationCode: null },
    });

    return { message: 'E-mail verificado com sucesso.' };
  }

  async sendPasswordResetEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');

    const code = uuid();
    await this.prisma.user.update({
      where: { id: user.id },
      data: { verificationCode: code },
    });

    await this.emailService.sendResetPasswordEmail(email, code);
    return { message: 'E-mail de redefinição enviado.' };
  }

  getAllUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async updatePassword(code: string, newPassword: string) {
    const user = await this.prisma.user.findFirst({
      where: { verificationCode: code },
    });
    if (!user) throw new Error('Código inválido');

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: newPassword,
        verificationCode: null,
      },
    });

    return { message: 'Senha atualizada com sucesso.' };
  }

  updateUserRole(dto: UpdateRoleDto) {
    return this.prisma.user.update({
      where: { id: dto.userId },
      data: { role: dto.role },
    });
  }

  toggleAccess(dto: ToggleAccessDto) {
    return this.prisma.user.update({
      where: { id: dto.userId },
      data: { active: dto.active },
    });
  }
}
