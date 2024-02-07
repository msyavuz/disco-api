import { Test, TestingModule } from '@nestjs/testing';
import { DentriesService } from './dentries.service';

describe('DentriesService', () => {
  let service: DentriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DentriesService],
    }).compile();

    service = module.get<DentriesService>(DentriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
