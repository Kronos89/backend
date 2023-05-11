import { Model } from 'mongoose';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { Gateway } from './schema/gateway.schema';

@Injectable()
export class GatewayService {
  constructor(
    @InjectModel(Gateway.name) private gatewayModel: Model<Gateway>,
  ) {}

  async create(createGatewayDto: CreateGatewayDto): Promise<Gateway> {
    const createdGateway = new this.gatewayModel(createGatewayDto);
    await createdGateway.validate();
    await createdGateway.save();
    return createdGateway;
  }

  async findAll(): Promise<Gateway[]> {
    return this.gatewayModel.find().exec();
  }

  async findOne(serialNumber: String): Promise<Gateway[]> {
    return this.gatewayModel.find({ serialNumber }).exec();
  }

  async update(serialNumber: string, updateGatewayDto: UpdateGatewayDto) {
    try {
      await this.gatewayModel.updateOne({ serialNumber }, updateGatewayDto).exec();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(`Gateway with serialNumber '${serialNumber}' already exists`);
      }
      throw error;
    }
  }

  remove(serialNumber: String) {
    return this.gatewayModel.findOneAndRemove({ serialNumber }).exec();
  }
}
