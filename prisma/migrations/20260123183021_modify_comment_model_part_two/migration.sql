/*
  Warnings:

  - You are about to drop the column `anime_rating` on the `comment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `anime_rating`,
    ADD COLUMN `rating` VARCHAR(191) NULL;
