import {GoogleGenAI} from "@google/genai"
import {
    ConfigSchema, 
    Configuracao, 
    UserConfigSchema,
    UserConfig,
    ListaDeSites,
    Elements
} from "../types/types$schemas"
import { config } from "dotenv"

class ControlerConfigurator{

    protected modules: any

    constructor(clases: any){
        const ai = new clases["ai"].class(clases["ai"].data)
        const db = new clases["db"].class(clases["db"].data)
        const utils = new clases["utils"].class(clases["utils"].data)

        this.modules = {ai, db, utils}
    }
    
    // verifica se os dados recebidos sao validos
    static basicVerificantionsOfUserConfigParam(
        {userConfigs, dbConn, driver}: 
        {userConfigs: UserConfig, dbConn: any, driver: any}){
        
        if(typeof userConfigs != "object"){
            throw new Error("Configuracoes tem que ser um Objeto!")
        }
        if(typeof dbConn != "string"){
            throw new Error("Banco de dados invalido!")
        }
        if(!driver){
            throw new Error("Driver invalido!")
        }

        // verifica os dados recebidos pelo usuario
        const statement = UserConfigSchema.safeParse(userConfigs)
        if(!statement.success){
            console.log(statement.error)
            throw new Error("Configuracoes invalidas")
        }

    }

    // da pra, ao invez de definir cada apropriedade, retornar um objeto com tudo ja configurado em apenas um
    // configura a URL basica
    static transformUrlOnConfigProperty(configs: Configuracao){
        const newObj = {...configs}
        // cria a url
        const url = this.sitesDefaultsConfigs(configs.site, configs.searchWords)
        newObj.url = new URL(url.href)
        newObj.url = Object.assign(newObj.url, url)
        console.log(newObj.url)
        // newObj.url = new URL(this.sitesDefaultsConfigs(configs.site))
        // configura os outros campos
        // newObj.url = this.sitesDefaultsConfigs(configs.site)
        return {...newObj}
    }

    // configura a URL para cada opcao
    static sitesDefaultsConfigs(host: string, query: string[]){

        function linkedinFormat(data: any){
            const formater = new URLSearchParams()
            console.log(data)
            formater.set("keywords", data.join(" "))
            formater.set("geoId", "103451405") // sumare, spp
            return formater.toString()
        }

        // tem que tipar esse objeto com o "Record<>"
        // aqui provavelmente vai precisar receber uma funcao que ja formata o search
        const opts: any = 
        {
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
        }

        return opts[host]
    }

    // pega todos os dados e transformar no Objeto valido de configuracao
    // basicamente: transformar a URL e cria a instancia da AI
    static parseConfigs(userData: UserConfig){
        let config = this.transformUrlOnConfigProperty(userData)
        return config
    }

    static setElementsTag(site: string){
        const opts: any = 
        {
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
        }

        return opts[site]
    }
}

export default ControlerConfigurator