import { Test, TestingModule } from '@nestjs/testing';
import { SliceService } from './slice.service';

describe('SliceService', () => {
  let service: SliceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliceService],
    }).compile();

    service = module.get<SliceService>(SliceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
