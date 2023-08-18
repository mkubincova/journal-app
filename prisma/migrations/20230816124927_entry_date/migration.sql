-- DropForeignKey
ALTER TABLE "journal_entries" DROP CONSTRAINT "journal_entries_userId_fkey";

-- AlterTable
ALTER TABLE "journal_entries" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
