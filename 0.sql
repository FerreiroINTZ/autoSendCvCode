-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."ai_analysis" (
    "id" SERIAL NOT NULL,
    "paridade" INTEGER,
    "macthes" VARCHAR(50)[],
    "weaknesses" VARCHAR(100)[],
    "justificativa" VARCHAR(200),
    "summary" VARCHAR(100)
);

-- CreateTable
CREATE TABLE "public"."descricoes" (
    "descricao" TEXT,
    "id" SERIAL NOT NULL,
    "requisitos" VARCHAR(50)[],

    CONSTRAINT "descricoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."teste" (
    "id" SERIAL NOT NULL,
    "msg" TEXT,
    "slw" INTEGER
);

-- CreateTable
CREATE TABLE "public"."vagas" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(100),
    "empresa" VARCHAR(100),
    "cidade" VARCHAR(100),
    "link" VARCHAR(200),
    "dt_publicacao" DATE,
    "keywords" VARCHAR(200),
    "area" VARCHAR(50),
    "salario" VARCHAR(12),
    "plataforma" VARCHAR(20),
    "jobid" VARCHAR(50),
    "modalidade" VARCHAR(10),
    "dt_register" DATE DEFAULT CURRENT_TIMESTAMP,
    "justificativa" TEXT,
    "paridade" INTEGER,
    "requisitos" VARCHAR(200)[],
    "descricao_fk" INTEGER,
    "acesso" VARCHAR(20) DEFAULT 'salvo',
    "disponibilidade" BOOLEAN DEFAULT true,

    CONSTRAINT "vagas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."vagas" ADD CONSTRAINT "vagas_descricao_fk_fkey" FOREIGN KEY ("descricao_fk") REFERENCES "public"."descricoes"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

