import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateContentInput, CreateContentInput } from 'src/types/graphql';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}
  create({ slug, name }: CreateContentInput) {
    return this.prisma.content.create({
      data: {
        slug,
        name,
      },
    });
  }

  findAll() {
    return this.prisma.content.findMany({
      include: {
        slices: true,
      },
    });
  }

  findOne(slug: string) {
    return this.prisma.content.findFirst({
      where: { slug },
      include: {
        slices: true,
      },
    });
  }

  update(id: number, { slug, name }: UpdateContentInput) {
    return this.prisma.content.update({
      where: { id },
      data: {
        slug,
        name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.content.delete({
      where: { id },
    });
  }
}
