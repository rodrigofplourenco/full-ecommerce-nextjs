/*
  Warnings:

  - You are about to drop the column `productId` on the `options` table. All the data in the column will be lost.
  - You are about to drop the column `optionId` on the `secondary_options` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `tabs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `options` DROP FOREIGN KEY `options_productId_fkey`;

-- DropForeignKey
ALTER TABLE `secondary_options` DROP FOREIGN KEY `secondary_options_optionId_fkey`;

-- DropForeignKey
ALTER TABLE `tabs` DROP FOREIGN KEY `tabs_productId_fkey`;

-- AlterTable
ALTER TABLE `options` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `secondary_options` DROP COLUMN `optionId`;

-- AlterTable
ALTER TABLE `tabs` DROP COLUMN `productId`;

-- CreateTable
CREATE TABLE `_ProductToTab` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ProductToTab_AB_unique`(`A`, `B`),
    INDEX `_ProductToTab_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_OptionToSecondaryOption` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_OptionToSecondaryOption_AB_unique`(`A`, `B`),
    INDEX `_OptionToSecondaryOption_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_OptionToProduct` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_OptionToProduct_AB_unique`(`A`, `B`),
    INDEX `_OptionToProduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ProductToTab` ADD CONSTRAINT `_ProductToTab_A_fkey` FOREIGN KEY (`A`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ProductToTab` ADD CONSTRAINT `_ProductToTab_B_fkey` FOREIGN KEY (`B`) REFERENCES `tabs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToSecondaryOption` ADD CONSTRAINT `_OptionToSecondaryOption_A_fkey` FOREIGN KEY (`A`) REFERENCES `options`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToSecondaryOption` ADD CONSTRAINT `_OptionToSecondaryOption_B_fkey` FOREIGN KEY (`B`) REFERENCES `secondary_options`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToProduct` ADD CONSTRAINT `_OptionToProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `options`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OptionToProduct` ADD CONSTRAINT `_OptionToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
