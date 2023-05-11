import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post()
  create(@Body() createGatewayDto: CreateGatewayDto) {
    return this.gatewayService.create(createGatewayDto);
  }

  @Get()
  findAll() {
    return this.gatewayService.findAll();
  }

  @Get(':serialNumber')
  findOne(@Param('serialNumber') serialNumber: string) {
    return this.gatewayService.findOne(serialNumber);
  }

  @Put(':serialNumber')
  update(@Param('serialNumber') serialNumber: string, @Body() updateGatewayDto: UpdateGatewayDto) {
    return this.gatewayService.update(serialNumber, updateGatewayDto);
  }

  @Delete(':serialNumber')
  remove(@Param('serialNumber') serialNumber: string) {
    return this.gatewayService.remove(serialNumber);
  }
}
