/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `secondary_options` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `secondary_options_label_key` ON `secondary_options`(`label`);
