/*
  Warnings:

  - Made the column `text` on table `Slice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Slice" ALTER COLUMN "text" SET NOT NULL;
