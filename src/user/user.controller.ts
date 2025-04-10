import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ToggleAccessDto } from './dto/toggle-access.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Patch('update-password')
  updatePassword(@Body() dto: UpdatePasswordDto) {
    const { code, newPassword } = dto;
    return this.userService.updatePassword(code, newPassword);
  }

  @Patch('update-role')
  updateRole(@Body() dto: UpdateRoleDto) {
    return this.userService.updateUserRole(dto);
  }

  @Patch('toggle-access')
  toggleAccess(@Body() dto: ToggleAccessDto) {
    return this.userService.toggleAccess(dto);
  }

  @Post('send-verification/:id')
  sendVerification(@Param('id') userId: string) {
    return this.userService.sendVerificationEmail(userId);
  }
}
