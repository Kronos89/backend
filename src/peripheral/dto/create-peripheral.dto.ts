import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

enum Status {
    Online = 'online',
    Offline = 'offline',
  }

export class CreatePeripheralDto {
    @IsNotEmpty()
    @IsNumber()
    uid: number;
  
    @IsNotEmpty()
    @IsString()
    vendor: string;
  
    @IsEnum(Status)
    @IsNotEmpty()
    status: Status;
  }