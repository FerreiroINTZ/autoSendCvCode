/*
  Warnings:

  - You are about to drop the column `justificativa` on the `vagas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ai_analysis" ALTER COLUMN "macthes" SET DATA TYPE VARCHAR(100)[],
ALTER COLUMN "justificativa" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "vagas" DROP COLUMN "justificativa";
