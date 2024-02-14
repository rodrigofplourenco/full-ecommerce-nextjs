/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `tabs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tabs_label_key` ON `tabs`(`label`);
