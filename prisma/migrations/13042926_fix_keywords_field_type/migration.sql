-- AlterTable
ALTER TABLE "descricoes" DROP COLUMN "requisitos";

-- AlterTable
ALTER TABLE "vagas" DROP COLUMN "keywords",
ADD COLUMN     "keywords" VARCHAR(200)[];

-- DropTable
DROP TABLE "teste";

