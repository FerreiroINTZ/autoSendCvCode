"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const configurator_1 = __importDefault(require("./configurator/configurator"));
const DatabaseControler_1 = __importDefault(require("./db/DatabaseControler"));
const AIControler_1 = __importDefault(require("./ai/AIControler"));
const utils_1 = __importDefault(require("./utils/utils"));
const selenium_webdriver_1 = require("selenium-webdriver");
function composition(...clases) {
    const Clases = [];
    for (let y = 0; y < clases.length; y++) {
    }
}
class Controler extends configurator_1.default {
    #driver;
    #elements;
    #configs;
    constructor(data) {
        // faz as verificacoes basicas
        configurator_1.default.basicVerificantionsOfUserConfigParam(data);
        // seta as propriedades da classe Utils
        const elements = configurator_1.default.setElementsTag(data.userConfigs.site);
        super({
            db: {
                class: DatabaseControler_1.default,
                data: data.dbConn
            },
            ai: {
                class: AIControler_1.default,
                data: data.userConfigs.aiKey
            },
            utils: {
                class: utils_1.default,
                data: { elements, driver: data.driver }
            }
        });
        // instacia os outros valores
        this.#configs = configurator_1.default.parseConfigs(data.userConfigs);
        this.#configs.paginas = data.userConfigs.paginas || 1;
        this.#driver = data.driver;
        this.#elements = elements;
    }
    // acessa o site
    async getWebSite() {
        await this.#driver.manage().window().setRect({ width: 1000, heigth: 700 });
        await this.#driver.get(this.#configs.url.href);
        console.log(this.#configs.url.href);
        this.#driver.sleep(6000);
        // await this.doResearch()
    }
    // new name: "start_to_get_vacancies"
    async startToGetVacancies() {
        // pega a lista <ul>
        const lista = await this.#driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath(this.#elements.lista)), 20 * 1000);
        // <li>s
        const elements = await lista.findElements(selenium_webdriver_1.By.css(":scope > *"));
        console.log("pegou a lista");
        console.log(elements.length);
        // return null
        let qtd = 1;
        const p = async () => new Promise((resolve) => {
            setTimeout(() => {
                resolve("resolvido");
            }, 3000);
        });
        // sistema de paginacao
        // provavelmente vai variar dependendo do site
        // for await (let page of Array(this.#configs.paginas).keys()){
        //     console.log(`\x1b[1;32m${this.#elements.pagingTag}`)
        //     const paging = await this.#driver.wait(until.elementLocated(By.xpath(this.#elements.pagingTag)), 6000)
        //     const pagingElements = await paging.findElements(By.css(":scope > *"))
        //     console.log("pagina: ", page)
        //     console.log(await pagingElements[1].getTagName())
        //     // await pagingElements[1].click()
        // }
        for await (const item of elements) {
            //     // lista quantos ja foram em comparacao aos que faltam
            process.stdout.write(`${qtd}/${elements.length}`);
            qtd++;
            //     // scrolla ate o elemento atual
            await this.#driver.executeScript("arguments[0].scrollIntoView()", item);
            await item.click();
            const mainElementsTag = await item.findElements(selenium_webdriver_1.By.css(":scope > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div"));
            //     // separar em outro metodo (verify on Data Base)
            //     // para isso sera preciso instancias o "DatabaseControler" tambem
            //     // (pendencia futura)
            const currentUrl = await this.#driver.getCurrentUrl();
            const url = new URL(currentUrl).searchParams;
            const jobId = url.get("currentJobId");
            const existance = await this.modules.db.verifyExistance(jobId);
            // se o titulo ja existir passa pro proximo
            if (existance) {
                console.log("\x1b[33m Ja existe essa vaga! \x1b[0m");
                continue;
            }
            let title = await mainElementsTag[0].getText();
            title = title.split("\n")[0];
            const empresa = await mainElementsTag[1].getText();
            const regiao = await mainElementsTag[2].getText();
            let macthModalidade = regiao.match(/\((?<modalidade>[a-zA-ZÀ-ú]+)\)$/);
            // se o REGEX der certo ele pega o valor do grupo
            if (macthModalidade) {
                macthModalidade = macthModalidade.groups.modalidade;
            }
            const dt_publicado = await this.modules.utils.getANDTranformPublishedDate();
            // pega a descricao, e os requisitos com IA
            const descricao = await this.modules.utils.getDescriptionsInfos();
            const aiResponse = await this.modules.ai.askAiForGetDescriptionDetais(descricao, this.#configs.keywords);
            // criar um tipo para os dados recebidos, e verificar com o zod
            // verificacao 
            const data = {
                title,
                empresa,
                regiao,
                descricao,
                keywords: this.#configs.keywords,
                site: this.#configs.site,
                jobId,
                currentUrl,
                macthModalidade,
                dt_publicado,
                salario: aiResponse?.salario,
                area: aiResponse?.area,
                ...aiResponse,
                // paridade: aiResponse?.paridade,
                // justificativa: aiResponse?.justificativa,
                // requisitos: aiResponse?.requisitos,
                // matches: aiResponse?.matches,
                // summary: aiResponse?.sumarry,
                // weaknesses: aiResponse?.weaknesses,
            };
            // salva no banco
            await this.modules.db.saveVacancyOnDataBase(data);
        }
        console.log("\x1b[1;35mTerminou!");
    }
    getProperties() {
        console.log(this.#driver);
    }
}
module.exports = Controler;
//# sourceMappingURL=Controler.js.map