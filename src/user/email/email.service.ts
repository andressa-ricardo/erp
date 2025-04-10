import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: 'smtp.seuservidor.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async sendVerificationEmail(to: string, code: string) {
    const url = `${process.env.URL}${code}`;
    await this.transporter.sendMail({
      from: `"ERP" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Verifique seu e-mail',
      html: `<p>Bem-vindo! Clique no link para verificar seu e-mail:</p><a href="${url}">Verificar</a>`,
    });
  }

  async sendResetPasswordEmail(to: string, code: string) {
    const url = `${process.env.URL}${code}`;
    await this.transporter.sendMail({
      from: `"ERP" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Redefinição de senha',
      html: `<p>Clique no link para redefinir sua senha:</p><a href="${url}">Redefinir senha</a>`,
    });
  }
}
