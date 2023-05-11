import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gateway, GatewaySchema } from './schema/gateway.schema';
import { Peripheral, PeripheralSchema } from 'src/peripheral/schema/peripheral.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Gateway.name, schema: GatewaySchema },
    { name: Peripheral.name, schema: PeripheralSchema }
  ])],
  controllers: [GatewayController],
  providers: [GatewayService]
})
export class GatewayModule {}
