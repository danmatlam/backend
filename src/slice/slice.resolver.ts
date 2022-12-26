import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SliceService } from './slice.service';
import { CreateSliceInput, UpdateSliceInput } from 'src/types/graphql';

@Resolver('Slice')
export class SliceResolver {
  constructor(private readonly sliceService: SliceService) {}

  @Mutation('createSlice')
  create(@Args('createSliceInput') createSliceInput: CreateSliceInput) {
    return this.sliceService.create(createSliceInput);
  }

  @Query('slices')
  findAll() {
    return this.sliceService.findAll();
  }

  @Query('slice')
  findOne(@Args('id') id: number) {
    return this.sliceService.findOne(id);
  }

  @Mutation('updateSlice')
  update(@Args('updateSliceInput') updateSliceInput: UpdateSliceInput) {
    return this.sliceService.update(updateSliceInput.id, updateSliceInput);
  }

  @Mutation('removeSlice')
  remove(@Args('id') id: number) {
    return this.sliceService.remove(id);
  }
}
