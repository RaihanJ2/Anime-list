/*
  Warnings:

  - Added the required column `review` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `review` ADD COLUMN `review` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;
