import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Peripheral {
  @Prop()
  uid: number;

  @Prop()
  vendor : string;

  @Prop()
  status : string;

}

export const PeripheralSchema = SchemaFactory.createForClass(Peripheral);

export type PeripheralDocument = Peripheral & Document;
