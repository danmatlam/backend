-- CreateTable
CREATE TABLE "Slice" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "markup" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "markdown" TEXT NOT NULL,

    CONSTRAINT "Slice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Slice" ADD CONSTRAINT "Slice_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
