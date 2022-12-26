import { Module } from '@nestjs/common';
import { SliceService } from './slice.service';
import { SliceResolver } from './slice.resolver';

@Module({
  providers: [SliceResolver, SliceService]
})
export class SliceModule {}
