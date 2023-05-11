import { Module } from '@nestjs/common';
import { PeripheralService } from './peripheral.service';
import { PeripheralController } from './peripheral.controller';
import { Peripheral, PeripheralSchema } from './schema/peripheral.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Peripheral.name, schema: PeripheralSchema }])],
  controllers: [PeripheralController],
  providers: [PeripheralService]
})
export class PeripheralModule {}
