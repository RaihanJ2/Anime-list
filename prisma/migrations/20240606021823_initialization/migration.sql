/*
  Warnings:

  - A unique constraint covering the columns `[user_email,mal_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_mal_id_key` ON `Collection`(`user_email`, `mal_id`);
