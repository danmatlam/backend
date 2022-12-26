import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { UpdateContentInput, CreateContentInput } from 'src/types/graphql';

@Resolver('Content')
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation('createContent')
  create(@Args('createContentInput') createContentInput: CreateContentInput) {
    return this.contentService.create(createContentInput);
  }

  @Query('contents')
  findAll() {
    return this.contentService.findAll();
  }

  @Query('content')
  findOne(@Args('slug') slug: string) {
    return this.contentService.findOne(slug);
  }

  @Mutation('updateContent')
  update(@Args('updateContentInput') updateContentInput: UpdateContentInput) {
    return this.contentService.update(
      updateContentInput.id,
      updateContentInput,
    );
  }

  @Mutation('removeContent')
  remove(@Args('id') id: number) {
    return this.contentService.remove(id);
  }
}
