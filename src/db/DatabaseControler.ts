import { Pool } from "pg";
import {PrismaClient} from "../generated/prisma/client"
import {PrismaPg} from "@prisma/adapter-pg"

export default class DatabaseControler {
  #conn: PrismaClient;
  // recebe o id da vaga atual
  private currentVacancyId: string = "";

  // se conecta via String de conexao
  constructor(connString: any) {
    const adapter = new PrismaPg({connectionString: connString})
    const db = new PrismaClient({adapter})
    this.#conn = db
    // precisa ser asincrono para funcionar
    this.testeDb();
  }

  async testeDb() {
    try {
      const data = await this.#conn.$executeRaw`SELECT NOW();`
    } catch (err) {
      throw new Error("Problema com o Banco de Dados!");
    }
  }

  async verifyExistance(jobId: string) {
    const data = await this.#conn.vagas.findMany({
      where: {
        jobid: jobId
      }
    })

    if (data.length) {
      return true;
    } else {
      {
        return false;
      }
    }
  }

  // transformar em uma transaction
  // para deixar de gerenciar diretamente as descricoes
  async saveVacancyOnDataBase(data: any) {
    try {
      console.log(Object.keys(data))
      const query = await this.#conn.$transaction(async tx =>{
        await tx.vagas.create({
          data:{
            titulo: data.title,
            empresa: data.empresa,
            cidade: data.cidade,
            keywords: data.keywords,
            plataforma: data.site,
            link: data.currentUrl,
            modalidade: data.macthModalidade,
            dt_publicacao: data.dt_publicado,
            area: data?.area,
            salario: String(data?.salario),
            descricoes: {
              create: {
                descricao: data.descricao,
              }
            },
            ai_analysis: {
              create: {
                paridade: data?.paridade,
                justificativa: data?.justificativa,
                matches: data?.matches,
                requisitos: data?.requisitos,
                summary: data?.summary,
                weaknesses: data?.weaknesses
              }
            }
          }
        })
    });
      console.log("\x1b[32m Salvo no Banco! \x1b[0m ", `${data.paridade ? data.paridade : 0}/4`);
    } catch (e) {
      console.log(e);
      // se falhar ele apaga a descricao, pra ela nao ficar sozinha
      console.log("\x1b[31m Erro ao salvar no Banco! \x1b[0m");
      // throw e
    }
  }

  saveDescription() {}
}
