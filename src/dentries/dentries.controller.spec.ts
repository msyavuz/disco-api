import { Test, TestingModule } from '@nestjs/testing';
import { DentriesController } from './dentries.controller';
import { DentriesService } from './dentries.service';

describe('DentriesController', () => {
  let controller: DentriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DentriesController],
      providers: [DentriesService],
    }).compile();

    controller = module.get<DentriesController>(DentriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
