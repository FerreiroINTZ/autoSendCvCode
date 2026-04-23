-- AlterTable
ALTER TABLE "ai_analysis" DROP COLUMN "macthes",
ADD COLUMN     "matches" VARCHAR(100)[];

-- AlterTable
ALTER TABLE "vagas" ADD COLUMN     "searchwords" VARCHAR(100)[];

