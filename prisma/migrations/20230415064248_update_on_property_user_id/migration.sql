/*
  Warnings:

  - Made the column `userId` on table `properties` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "properties" DROP CONSTRAINT "properties_userId_fkey";

-- AlterTable
ALTER TABLE "properties" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "properties" ADD CONSTRAINT "properties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
