-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "name" TEXT,
ALTER COLUMN "slug" DROP NOT NULL;
