-- DropForeignKey
ALTER TABLE `options` DROP FOREIGN KEY `options_productId_fkey`;

-- DropForeignKey
ALTER TABLE `secondary_options` DROP FOREIGN KEY `secondary_options_optionId_fkey`;

-- DropForeignKey
ALTER TABLE `tabs` DROP FOREIGN KEY `tabs_productId_fkey`;

-- AddForeignKey
ALTER TABLE `tabs` ADD CONSTRAINT `tabs_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `options` ADD CONSTRAINT `options_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `secondary_options` ADD CONSTRAINT `secondary_options_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `options`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
