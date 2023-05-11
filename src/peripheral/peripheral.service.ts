import { Injectable } from '@nestjs/common';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Peripheral } from './schema/peripheral.schema';
import { Model } from 'mongoose';

@Injectable()
export class PeripheralService {
  constructor(@InjectModel(Peripheral.name) private gatewayModel: Model<Peripheral>) {}

  async create(createGatewayDto: CreatePeripheralDto): Promise<Peripheral> {
    const createdGateway = new this.gatewayModel(createGatewayDto);
    await createdGateway.validate();
    await createdGateway.save();
    return createdGateway;
  }

  async findAll(): Promise<Peripheral[]> {
    return this.gatewayModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} peripheral`;
  }

  update(id: number, updatePeripheralDto: UpdatePeripheralDto) {
    return `This action updates a #${id} peripheral`;
  }

  remove(id: number) {
    return `This action removes a #${id} peripheral`;
  }
}
