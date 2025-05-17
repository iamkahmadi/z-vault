import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Password } from './schemas/password.schema';
import { Model } from 'mongoose';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class PasswordService {
  constructor(@InjectModel(Password.name) private model: Model<Password>) {}

  async create(data: CreatePasswordDto, userId: string) {
    return this.model.create({ ...data, owner: userId });
  }

  async findAll(userId: string) {
    return this.model.find({ owner: userId });
  }

  async findOne(id: string, userId: string) {
    return this.model.findOne({ _id: id, owner: userId });
  }

  async update(id: string, dto: UpdatePasswordDto, userId: string) {
    return this.model.findOneAndUpdate({ _id: id, owner: userId }, dto, { new: true });
  }

  async remove(id: string, userId: string) {
    return this.model.findOneAndDelete({ _id: id, owner: userId });
  }
}
