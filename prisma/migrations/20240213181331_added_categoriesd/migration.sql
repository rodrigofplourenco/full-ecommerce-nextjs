/*
  Warnings:

  - Added the required column `category` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subCategory` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `subCategory` VARCHAR(191) NOT NULL;
