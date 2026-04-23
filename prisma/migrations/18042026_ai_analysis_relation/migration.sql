-- AlterTable
ALTER TABLE "ai_analysis" ADD COLUMN     "requisitos" TEXT[],
ADD CONSTRAINT "ai_analysis_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "vagas" DROP COLUMN "paridade",
DROP COLUMN "requisitos",
ADD COLUMN     "ai_analysis_fk" INTEGER;

-- AddForeignKey
ALTER TABLE "vagas" ADD CONSTRAINT "vagas_ai_analysis_fk_fkey" FOREIGN KEY ("ai_analysis_fk") REFERENCES "ai_analysis"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

