-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL,
    `cart` JSON NULL,
    `customer` JSON NULL,

    UNIQUE INDEX `Order_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
