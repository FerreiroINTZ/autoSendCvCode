"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
class DatabaseControler {
    #conn;
    // recebe o id da vaga atual
    currentVacancyId = "";
    // se conecta via String de conexao
    constructor(connString) {
        this.#conn = new pg_1.Pool({
            connectionString: connString
        });
        // precisa ser asincrono para funcionar
        this.testeDb();
    }
    async testeDb() {
        try {
            const { rows } = await this.#conn.query("SELECT NOW()");
        }
        catch (err) {
            throw new Error("Problema com o Banco de Dados!");
        }
    }
    async verifyExistance(jobId) {
        const { rows } = await this.#conn.query("SELECT jobid FROM vagas WHERE jobid = $1", [jobId]);
        if (rows.length) {
            return true;
        }
        else {
            {
                return false;
            }
        }
    }
    async saveVacancyOnDataBase(data) {
        const conn = await this.#conn.connect();
        // await this.#databaseConnection.connect()
        const { rows: desc } = await conn.query("INSERT INTO descricoes (descricao) VALUES ($1) RETURNING id", [data.descricao]);
        const desc_id = desc[0].id;
        try {
            // prencher dinamicamente
            // sem ter que escrever tudo na unha, no caso
            await conn.query("INSERT INTO vagas(titulo, empresa, cidade, keywords, plataforma, jobid, link, descricao_fk, modalidade, dt_vac_published, justificativa, area, paridade, salario, requisitos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)", [data.title, data.empresa, data.regiao, data.keywords, data.site, data.jobId, data.currentUrl, desc[0].id, data.modalidade, data.dt_publicado, data?.justificativa, data?.area, data?.paridade, data?.slario, data?.requisitos]);
            console.log("\x1b[32m Salvo no Banco! \x1b[30m ");
        }
        catch (e) {
            console.log(e);
            // se falhar ele apaga a descricao, pra ela nao ficar sozinha
            console.log("\x1b[32m Erro ao salvar no Banco! \x1b[30m");
            await conn.query("DELETE FROM descricoes WHERE id = $1", [desc_id]);
        }
        finally {
            conn.release();
        }
    }
    saveDescription() {
    }
}
exports.default = DatabaseControler;
//# sourceMappingURL=DatabaseControler.js.map