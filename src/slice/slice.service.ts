import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSliceInput, UpdateSliceInput } from 'src/types/graphql';

@Injectable()
export class SliceService {
  constructor(private prisma: PrismaService) {}
  create({ contentId, markdown, text, order }: CreateSliceInput) {
    return this.prisma.slice.create({
      data: {
        contentId,
        markdown,
        text,
        order,
      },
    });
  }
  findAll() {
    return this.prisma.slice.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} slice`;
  }

  update(id: number, updateSliceInput: UpdateSliceInput) {
    return `This action updates a #${id} slice`;
  }

  remove(id: number) {
    return this.prisma.slice.delete({
      where: { id },
    });
  }
}
