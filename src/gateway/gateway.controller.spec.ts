import { Test, TestingModule } from '@nestjs/testing';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { CreateGatewayDto } from './dto/create-gateway.dto';
import { UpdateGatewayDto } from './dto/update-gateway.dto';
import { Gateway } from './schema/gateway.schema';  

describe('GatewayController', () => {
  let controller: GatewayController;
  let service: GatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatewayController],
      providers: [GatewayService],
    }).compile();

    controller = module.get<GatewayController>(GatewayController);
    service = module.get<GatewayService>(GatewayService);
  });

  describe('create', () => {
    it('should create a new gateway', async () => {
      const createGatewayDto: CreateGatewayDto = {
        name: 'Gateway 1',
        serialNumber: '123',
        ipAddress: '192.168.1.1',
      };
      const expectedResult: Gateway = {
        name: createGatewayDto.name,
        serialNumber: createGatewayDto.serialNumber,
        ipAddress: createGatewayDto.ipAddress,
        peripherals: [],
      };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(createGatewayDto);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return an array of gateways', async () => {
      const expectedResult: Gateway[] = [
        {
          name: 'Gateway 1',
          serialNumber: '123',
          ipAddress: '192.168.1.1',
          peripherals: [],
        },
        {
          name: 'Gateway 2',
          serialNumber: '456',
          ipAddress: '192.168.1.2',
          peripherals: [],
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);

      const result = await controller.findAll();

      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single gateway', async () => {
      const expectedSerialNumber = '123';
      const expectedResult: Gateway[] = [
        {
          name: 'Gateway 1',
          serialNumber: '123',
          ipAddress: '192.168.1.1',
          peripherals: [],
        }
      ];
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      const result = await controller.findOne(expectedSerialNumber);

      expect(result).toEqual(expectedResult);
    });
  });
});