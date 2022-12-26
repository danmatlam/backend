import { Test, TestingModule } from '@nestjs/testing';
import { SliceResolver } from './slice.resolver';
import { SliceService } from './slice.service';

describe('SliceResolver', () => {
  let resolver: SliceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SliceResolver, SliceService],
    }).compile();

    resolver = module.get<SliceResolver>(SliceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
