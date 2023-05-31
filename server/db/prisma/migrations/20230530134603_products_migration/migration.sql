-- CreateTable
CREATE TABLE `Iphone` (
    `id` VARCHAR(191) NOT NULL,
    `device_name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `img_0` VARCHAR(191) NOT NULL,
    `img_1` VARCHAR(191) NOT NULL,
    `img_2` VARCHAR(191) NOT NULL,
    `colors` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `price_number` INTEGER NOT NULL,
    `display` VARCHAR(191) NOT NULL,
    `new_technology` VARCHAR(191) NOT NULL,
    `sos` VARCHAR(191) NOT NULL,
    `camera` VARCHAR(191) NOT NULL,
    `action_mode` VARCHAR(191) NOT NULL,
    `battery` VARCHAR(191) NOT NULL,
    `chip` VARCHAR(191) NOT NULL,
    `internet` VARCHAR(191) NOT NULL,
    `gb` VARCHAR(191) NOT NULL,
    `gb_multiple_price` INTEGER NOT NULL,

    UNIQUE INDEX `Iphone_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mac` (
    `id` VARCHAR(191) NOT NULL,
    `device_name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `img_0` VARCHAR(191) NOT NULL,
    `img_1` VARCHAR(191) NOT NULL,
    `img_2` VARCHAR(191) NOT NULL,
    `colors` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `price_number` INTEGER NOT NULL,
    `display` VARCHAR(191) NOT NULL,
    `camera` VARCHAR(191) NOT NULL,
    `battery` VARCHAR(191) NOT NULL,
    `chip` VARCHAR(191) NOT NULL,
    `core_cpu` VARCHAR(191) NOT NULL,
    `core_gpu` VARCHAR(191) NOT NULL,
    `ram` VARCHAR(191) NOT NULL,
    `storage` VARCHAR(191) NOT NULL,
    `mic` VARCHAR(191) NOT NULL,
    `weight` VARCHAR(191) NOT NULL,
    `touchid` VARCHAR(191) NOT NULL,
    `internet` VARCHAR(191) NOT NULL,
    `gb_multiple_price` INTEGER NOT NULL,

    UNIQUE INDEX `Mac_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ipad` (
    `id` VARCHAR(191) NOT NULL,
    `device_name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `img_0` VARCHAR(191) NOT NULL,
    `img_1` VARCHAR(191) NOT NULL,
    `img_2` VARCHAR(191) NOT NULL,
    `colors` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `price_number` INTEGER NOT NULL,
    `display` VARCHAR(191) NOT NULL,
    `width` VARCHAR(191) NOT NULL,
    `camera` VARCHAR(191) NOT NULL,
    `chip` VARCHAR(191) NOT NULL,
    `connector` VARCHAR(191) NOT NULL,
    `touchid` VARCHAR(191) NOT NULL,
    `internet` VARCHAR(191) NOT NULL,
    `gb_multiple_price` INTEGER NOT NULL,

    UNIQUE INDEX `Ipad_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
