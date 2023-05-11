import { PartialType } from '@nestjs/swagger';
import { CreatePeripheralDto } from './create-peripheral.dto';

export class UpdatePeripheralDto extends PartialType(CreatePeripheralDto) {}
