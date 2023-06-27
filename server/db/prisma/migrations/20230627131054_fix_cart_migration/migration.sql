/*
  Warnings:

  - Added the required column `price` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` ADD COLUMN `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `token` VARCHAR(60000) NOT NULL;
