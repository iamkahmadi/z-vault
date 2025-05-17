import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PasswordService } from './password.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@UseGuards(JwtAuthGuard)
@Controller('passwords')
export class PasswordController {
  constructor(private service: PasswordService) {}

  @Post()
  create(@Body() dto: CreatePasswordDto, @CurrentUser() user) {
    return this.service.create(dto, user.userId);
  }

  @Get()
  findAll(@CurrentUser() user) {
    return this.service.findAll(user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user) {
    return this.service.findOne(id, user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePasswordDto, @CurrentUser() user) {
    return this.service.update(id, dto, user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user) {
    return this.service.remove(id, user.userId);
  }
}
