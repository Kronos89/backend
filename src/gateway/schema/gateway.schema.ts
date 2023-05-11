import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Peripheral, PeripheralSchema } from '../../peripheral/schema/peripheral.schema';
import { Document, Types } from 'mongoose';
import { ValidationError } from 'class-validator';

@Schema()
export class Gateway {
  @Prop()
  name: string;

  @Prop()
  serialNumber: string;

  @Prop()
  ipAddress: string;

  @Prop()
  peripherals: Peripheral[];
}

export const GatewaySchema = SchemaFactory.createForClass(Gateway);

export type GatewayDocument = Gateway & Document;
