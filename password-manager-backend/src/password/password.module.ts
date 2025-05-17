import { Module } from '@nestjs/common';
import { PasswordController } from './password.controller';
import { PasswordService } from './password.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Password, PasswordSchema } from './schemas/password.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Password.name, schema: PasswordSchema }]),
  ],
  controllers: [PasswordController],
  providers: [PasswordService]
})
export class PasswordModule { }
