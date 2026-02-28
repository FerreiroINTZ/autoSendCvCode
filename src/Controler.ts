import {z} from "zod"

const Sites = [
    'linkedin',
    'indeed',
    'infojobs'
] as const

const EnumSites = z.enum(Sites)

const ConfigSchema = z.object({
    site: EnumSites,
    url: z.instanceof(URL).optional(),
    keywords: z.array(z.string()).min(1, "Pecisa de pelo menos 1 Item"),
    area: z.string().optional(),
    knowledge: z.array(z.string()).optional(),
    cidade: z.string().optional()
}).strict()

type Configuracao = z.infer<typeof ConfigSchema>

// type Configuracao = {
//     site: Sites, 
//     keywords: string[],
//     area?: string,
//     knowledge?: string[],
//     cidade?: string
// }

type SiteDefaultConfigs = {
    host: string,
    pathname: string,
    search: string
}

const sitesDefaultsConfigs = (word: string):SiteDefaultConfigs => {

    const opts: any = 
    {
        linkedin: {
            host: `https://${word}.com`,
            pathname: "jobs/search/",
            search: "keywords="
        },
        indeed: {
            host: `https://${word}.com`,
            pathname: "jobs",
            search: "q="
        },
        infojobs: {
            host: `https://${word}.com.br`,
            pathname: "empregos.aspx",
            search: "palabra="
        }
    }

    return opts[word]
}

class Controler{
    #databaseConnection: Object;
    #configs: Configuracao;
    #driver: any;

    constructor(
        {dbConn, configs, driver}: 
        {dbConn: Object, configs: Configuracao, driver: any}
    ){

        if(typeof configs != "object"){
            throw new Error("Configuracoes tem que ser um Objeto!")
        }
        if(typeof dbConn != "object"){
            throw new Error("Banco de dados invalido!")
        }
        if(!driver){
            throw new Error("Driver invalido!")
        }

        const statement = ConfigSchema.safeParse(configs)
        if(!statement.success){
            // console.log(statement.error)
            throw new Error("Configuracoes invalidas")
        }

        this.#configs = configs
        this.#databaseConnection = dbConn
        this.#driver = driver
        this.transformUrlOnConfigProperty(configs)
    }
    
    // configura a URL basica
    transformUrlOnConfigProperty(configs: Configuracao){
        const newObj = {...configs}
        newObj.url = new URL(sitesDefaultsConfigs(configs.site).host)
        newObj.url.pathname = sitesDefaultsConfigs(configs.site).pathname
        newObj.url.search = sitesDefaultsConfigs(configs.site).search + configs.keywords[0]
        this.#configs = {...newObj}
    }

    async getWebSite(){
        await this.#driver.get(this.#configs.url!.href)
    }

    getProperties(){
        console.log(this.#configs)
    }
}

export = Controler