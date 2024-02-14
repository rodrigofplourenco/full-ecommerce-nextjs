/*
  Warnings:

  - The primary key for the `options` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `options` table. All the data in the column will be lost.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `subCategory` on the `products` table. All the data in the column will be lost.
  - You are about to alter the column `category` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[name]` on the table `options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_optiontoproduct` DROP FOREIGN KEY `_OptionToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_optiontoproduct` DROP FOREIGN KEY `_OptionToProduct_B_fkey`;

-- DropForeignKey
ALTER TABLE `_optiontosecondaryoption` DROP FOREIGN KEY `_OptionToSecondaryOption_A_fkey`;

-- DropForeignKey
ALTER TABLE `_producttotab` DROP FOREIGN KEY `_ProductToTab_A_fkey`;

-- AlterTable
ALTER TABLE `_optiontoproduct` MODIFY `A` VARCHAR(191) NOT NULL,
    MODIFY `B` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_optiontosecondaryoption` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `_producttotab` MODIFY `A` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `options` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`name`);

-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `subCategory`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    MODIFY `category` ENUM('vinyl', 'garments', 'business', 'design', 'signage') NOT NULL,
    ADD PRIMARY KEY (`name`);

-- CreateIndex
CREATE UNIQUE INDEX `options_name_key` ON `options`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `products_name_key` ON `products`(`name`);

-- AddForeignKey
ALTER TABLE `_ProductToTab` ADD CONSTRAINT `_ProductToTab_A_fkey` FOREIGN KEY (`A`) REFERENCES `products`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToSecondaryOption` ADD CONSTRAINT `_OptionToSecondaryOption_A_fkey` FOREIGN KEY (`A`) REFERENCES `options`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToProduct` ADD CONSTRAINT `_OptionToProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `options`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToProduct` ADD CONSTRAINT `_OptionToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `products`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
