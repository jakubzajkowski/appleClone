-- CreateTable
CREATE TABLE `News` (
    `id` VARCHAR(191) NOT NULL,
    `device_name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `price_number` INTEGER NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `bg_color` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `News_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
