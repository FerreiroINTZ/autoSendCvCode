import {z} from "zod"
import {GoogleGenAI} from "@google/genai"

import Configurator from "./configurator/configurator"
import DataBaseContoler from "./db/DatabaseControler"
import AIControler from "./ai/AIControler"
import Utils from "./utils/utils"

import {
    ConfigSchema, 
    Configuracao, 
    Elements, 
    DescriptionSchemaParsed
} from "./types/types$schemas"

import {By, until, Key} from "selenium-webdriver"
import {Pool} from "pg"
import fs from "fs"

function composition(...clases: any[]){

    const Clases = []
    for(let y = 0; y < clases.length; y++){
        
    }

}

class Controler extends Configurator{
    #driver: any;
    #elements: Elements;
    #configs: Configuracao;

    constructor(
        data: 
        {dbConn: any, userConfigs: Configuracao, driver: any}
    ){
        // faz as verificacoes basicas
        Configurator.basicVerificantionsOfUserConfigParam(data)
        
        // seta as propriedades da classe Utils
        const elements = Configurator.setElementsTag(data.userConfigs.site)
        super({
            db: {
                class: DataBaseContoler,
                data: data.dbConn
            },
            ai: {
                class: AIControler,
                data: data.userConfigs.aiKey
            },
            utils: {
                class: Utils,
                data: {elements, driver: data.driver}
            }
        })

        // instacia os outros valores
        this.#configs = Configurator.parseConfigs(data.userConfigs)
        this.#configs.paginas = data.userConfigs.paginas || 1
        this.#driver = data.driver
        this.#elements = elements

    }

    // acessa o site
    async getWebSite(){
        await this.#driver.manage().window().setRect({width: 1000, heigth: 700})
        await this.#driver.get(this.#configs.url!.href)
        console.log(this.#configs.url!.href)
        this.#driver.sleep(6000)
        // await this.doResearch()
    }

    // new name: "start_to_get_vacancies"
    async startToGetVacancies(){

        // pega a lista <ul>
        const lista = await this.#driver.wait(until.elementLocated(By.xpath(this.#elements.lista)), 20 * 1000)

        // <li>s
        const elements = await lista.findElements(By.css(":scope > *"))
        console.log("pegou a lista")
        console.log(elements.length)
        // return null
        let qtd = 1
        const p = async () => new Promise((resolve) =>{
            setTimeout(() =>{
                resolve("resolvido")
            }, 3000)
        })
        for(let page = 1; page <= this.#configs.paginas!; page++){
            console.log("pagina: ", page)
        }
        for await (const item of elements){
            
        //     // lista quantos ja foram em comparacao aos que faltam
            process.stdout.write(`${qtd}/${elements.length}`)
            qtd++

        //     // scrolla ate o elemento atual
            await this.#driver.executeScript("arguments[0].scrollIntoView()", item)
            await item.click()
            const mainElementsTag = await item.findElements(By.css(":scope > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div"))

        //     // separar em outro metodo (verify on Data Base)
        //     // para isso sera preciso instancias o "DatabaseControler" tambem
        //     // (pendencia futura)
            const currentUrl = await this.#driver.getCurrentUrl()
            const url = new URL(currentUrl).searchParams
            const jobId = url.get("currentJobId")
            const existance: Boolean = await this.modules.db.verifyExistance(jobId)
            
            // se o titulo ja existir passa pro proximo
            if(existance){
                console.log("\x1b[33m Ja existe essa vaga! \x1b[30m")
                continue
            }
            
            
            let title = await mainElementsTag[0].getText()
            title = title.split("\n")[0]
            const empresa = await mainElementsTag[1].getText()
            const regiao = await mainElementsTag[2].getText()
            let macthModalidade = regiao.match(/\((?<modalidade>[a-zA-ZÀ-ú]+)\)$/)

            // se o REGEX der certo ele verifica se existe o grupo
            if(macthModalidade){
                macthModalidade = macthModalidade.groups.modalidade
            }
            // modalidade = modalidade[0].slice(1, modalidade[0].length - 1)
            const dt_publicado = await this.modules.utils.getANDTranformPublishedDate()
            // pega a descricao, e os requisitos com IA
            const descricao = await this.modules.utils.getDescriptionsInfos()

            // const aiResponse = await this.modules.ai.askAiForGetDescriptionDetais(descricao, this.#configs.keywords)

            // criar um tipo para os dados recebidos, e verificar com o zod
            // verificacao 

            const data: any = {
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

                // area: aiResponse.area,
                // paridade: aiResponse?.paridade,
                // justificativa: aiResponse?.justificativa,
                // salario: aiResponse?.salario,
                // requisitos: aiResponse?.requisitos,
                
            }
            console.log(data)
            //     // salva no banco
            await this.modules.db.saveVacancyOnDataBase(data)
            break
            // break
    }
    console.log("Terminou!")
    }

    getProperties(){
        console.log(this.#driver)
    }
}

export = Controler