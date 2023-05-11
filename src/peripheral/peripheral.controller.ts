import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeripheralService } from './peripheral.service';
import { CreatePeripheralDto } from './dto/create-peripheral.dto';
import { UpdatePeripheralDto } from './dto/update-peripheral.dto';

@Controller('peripheral')
export class PeripheralController {
  constructor(private readonly peripheralService: PeripheralService) {}

  @Post()
  create(@Body() createPeripheralDto: CreatePeripheralDto) {
    return this.peripheralService.create(createPeripheralDto);
  }

  @Get()
  findAll() {
    return this.peripheralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peripheralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeripheralDto: UpdatePeripheralDto) {
    return this.peripheralService.update(+id, updatePeripheralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peripheralService.remove(+id);
  }
}
