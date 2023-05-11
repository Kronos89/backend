import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateGatewayDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsString()
    serialNumber: string;
  
    @IsNotEmpty()
    @IsString()
    @Matches(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/, {
      message: 'Invalid IP address',
    })
    ipAddress: string;
  }