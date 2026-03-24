"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_schemas_1 = require("../types/types$schemas");
class ControlerConfigurator {
    modules;
    constructor(clases) {
        const ai = new clases["ai"].class(clases["ai"].data);
        const db = new clases["db"].class(clases["db"].data);
        const utils = new clases["utils"].class(clases["utils"].data);
        this.modules = { ai, db, utils };
    }
    // verifica se os dados recebidos sao validos
    static basicVerificantionsOfUserConfigParam({ userConfigs, dbConn, driver }) {
        if (typeof userConfigs != "object") {
            throw new Error("Configuracoes tem que ser um Objeto!");
        }
        if (typeof dbConn != "string") {
            throw new Error("Banco de dados invalido!");
        }
        if (!driver) {
            throw new Error("Driver invalido!");
        }
        // verifica os dados recebidos pelo usuario
        const statement = types_schemas_1.UserConfigSchema.safeParse(userConfigs);
        if (!statement.success) {
            console.log(statement.error);
            throw new Error("Configuracoes invalidas");
        }
    }
    // ao invez de retornar as configuracoes, ele poderia retornar apenas o config da URL
    // configura a URL basica
    static transformUrlOnConfigProperty(configs) {
        const newObj = { ...configs };
        // cria o objeto de configuracao da URL
        const url = this.sitesDefaultsConfigs(configs.site, configs.searchWords);
        newObj.url = new URL(url.href);
        newObj.url = Object.assign(newObj.url, url);
        return { ...newObj };
    }
    // configura a URL para cada opcao
    static sitesDefaultsConfigs(host, query) {
        function linkedinFormat(data) {
            const formater = new URLSearchParams();
            console.log(encodeURIComponent(data.join(" ")));
            formater.set("keywords", data.join(" "));
            formater.set("geoId", "103451405"); // sumare, spp
            return formater.toString();
        }
        // tem que tipar esse objeto com o "Record<>"
        // aqui provavelmente vai precisar receber uma funcao que ja formata o search
        const opts = {
            linkedin: {
                href: `https://${host}.com`,
                pathname: "jobs/search",
                search: (() => linkedinFormat(query))(),
            },
            indeed: {
                href: `https://${host}.com`,
                pathname: "jobs",
                search: "q="
            },
            infojobs: {
                href: `https://${host}.com.br`,
                pathname: "empregos.aspx",
                search: "palabra="
            }
        };
        return opts[host];
    }
    // pega todos os dados e transformar no Objeto valido de configuracao
    // basicamente: transformar a URL e cria a instancia da AI
    static parseConfigs(userData) {
        let config = this.transformUrlOnConfigProperty(userData);
        return config;
    }
    static setElementsTag(site) {
        const opts = {
            linkedin: {
                // xpath
                lista: '//*[@id="main"]/div/div[2]/div[1]/div/ul',
                // css
                singleVacancy: `:scope > li`,
                title: `//div[@class="ember-view"]/span[1]/strong`,
                empresa: `//*[@id="ember153"]/span`,
                regiao: `//*[@id="ember154"]/ul/li/span`,
                vacancyDescriptionTag: `//*[@id="job-details"]/div/p`,
                publishDate: '//*[@id="main"]/div/div[2]/div[2]/div/div[2]/div/div[2]/div[1]/div/div[1]/div/div[1]/div/div[3]/div/span'
            },
            indeed: {
                lista: ``,
                singleVacancy: ``,
                title: ``,
                empresa: ``,
                regiao: ``,
                vacancyDescriptionTag: ``,
                publishDate: ''
            },
            infojobs: {
                lista: ``,
                singleVacancy: ``,
                title: ``,
                empresa: ``,
                regiao: ``,
                vacancyDescriptionTag: ``,
                publishDate: ''
            },
        };
        return opts[site];
    }
}
exports.default = ControlerConfigurator;
//# sourceMappingURL=configurator.js.map