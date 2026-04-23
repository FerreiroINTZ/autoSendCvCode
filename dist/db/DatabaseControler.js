"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
class DatabaseControler {
    #conn;
    // recebe o id da vaga atual
    currentVacancyId = "";
    // se conecta via String de conexao
    constructor(connString) {
        const adapter = new adapter_pg_1.PrismaPg({ connectionString: connString });
        const db = new client_1.PrismaClient({ adapter });
        this.#conn = db;
        // precisa ser asincrono para funcionar
        this.testeDb();
    }
    async testeDb() {
        try {
            const data = await this.#conn.$executeRaw `SELECT NOW();`;
        }
        catch (err) {
            throw new Error("Problema com o Banco de Dados!");
        }
    }
    async verifyExistance(jobId) {
        const data = await this.#conn.vagas.findMany({
            where: {
                jobid: jobId
            }
        });
        if (data.length) {
            return true;
        }
        else {
            {
                return false;
            }
        }
    }
    // transformar em uma transaction
    // para deixar de gerenciar diretamente as descricoes
    async saveVacancyOnDataBase(data) {
        try {
            console.log(Object.keys(data));
            const query = await this.#conn.$transaction(async (tx) => {
                await tx.vagas.create({
                    data: {
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
                });
            });
            console.log("\x1b[32m Salvo no Banco! \x1b[0m ", `${data.paridade ? data.paridade : 0}/4`);
        }
        catch (e) {
            console.log(e);
            // se falhar ele apaga a descricao, pra ela nao ficar sozinha
            console.log("\x1b[31m Erro ao salvar no Banco! \x1b[0m");
            // throw e
        }
    }
    saveDescription() { }
}
exports.default = DatabaseControler;
//# sourceMappingURL=DatabaseControler.js.map