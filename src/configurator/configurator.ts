import {GoogleGenAI} from "@google/genai"
import {
    ConfigSchema, 
    Configuracao, 
    UserConfigSchema,
    UserConfig,
    ListaDeSites,
    Elements
} from "@Tipos/mainType.js"

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

    // ao invez de retornar as configuracoes, ele poderia retornar apenas o config da URL
    // configura a URL basica
    static transformUrlOnConfigProperty(configs: Configuracao){
        const newObj = {...configs}
        // cria o objeto de configuracao da URL
        const url = this.sitesDefaultsConfigs(configs.site, configs.searchWords)
        newObj.url = new URL(url.href)
        newObj.url = Object.assign(newObj.url, url)
        return {...newObj}
    }

    // configura a URL para cada opcao
    static sitesDefaultsConfigs(host: string, query: string[]){

        function linkedinFormat(data: any){
            const formater = new URLSearchParams()
            console.log(encodeURIComponent(data.join(" ")))
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
                lista: '/html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[1]/div/div',
                
                // /html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[1]/div/div/div[1]/div/div/div/div
                // /html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[1]/div/div/div[2]/div/div/div/div
                // /html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[1]/div/div/div[3]/div/div/div/div 
                // css
                singleVacancy: `:scope > div > div > div > div > div > div > div`,

                // //*[@id="workspace"]/div/div[2]/div/div[1]/div/div/div[2]/div/div/div/div/div/div/div[1]/div[1]/div/div[1]/p/span[2]

                title: `//*[@id="workspace"]/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/div[2]`,
                empresa: `//*[@id="workspace"]/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/div[1]/div/a/div/p/a`,
                regiao: `//*[@id="workspace"]/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/p/span[1]`,


                vacancyDescriptionTag: `/html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[4]/div[3]/div/div/div/p`,
                
                // //*[@id="workspace"]/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/p/span[4]

                // /html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[4]/div[3]/div/div/div/p/span
                // /html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/p/span[4]
                publishDate: '/html/body/div[1]/div[1]/div[2]/div[2]/main/div/div[2]/div/div[2]/div/div[2]/div/div/div/div[1]/div/div[2]/div/div[1]/p/span[4]',
                pagingTag: (site: string): string => {
                    switch (site) {
                        case "linkedin":
                                // usa arrray pra achar
                                return '//*[@id="workspace"]/div/div[2]/div/div[1]/div/div/div[26]/button[2]/span/span'
                        case "indeed":
                            // usa um query selector simples
                            return 'a[aria-label="Próxima página"'
                        default:
                            return ""
                    }
                }   
            },
            indeed: {
                lista: ``,
                singleVacancy: ``,
                title: ``,
                empresa: ``,
                regiao: ``,
                vacancyDescriptionTag: ``,
                publishDate: '',
                pagingTag: ''
            },
            infojobs: {
                lista: ``,
                singleVacancy: ``,
                title: ``,
                empresa: ``,
                regiao: ``,
                vacancyDescriptionTag: ``,
                publishDate: '',
                pagingTag: ''
            },
        }

        return opts[site]
    }
}

export default ControlerConfigurator