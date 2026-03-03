import {z} from "zod"
import {GoogleGenAI} from "@google/genai"
import Configurator from "./ControlerConfigurator"
import {ConfigSchema, Configuracao} from "./types$schemas"

class Controler{
    #databaseConnection: Object;
    #configs: Configuracao;
    #driver: any;
    #elements: any;

    constructor(
        data: 
        {dbConn: any, userConfigs: Configuracao, driver: any}
    ){
        // faz as verificacoes basicas
        Configurator.basicVerificantionsOfUserConfigParam(data)

        this.#configs = Configurator.parseConfigs(data.userConfigs)
        // Configurator.transformUrlOnConfigProperty(data.userConfigs)
        this.#databaseConnection = data.dbConn
        this.#driver = data.driver
        this.#elements = Configurator.setElementsTag(data.userConfigs.site)
    }

    async getWebSite(){
        await this.#driver.get(this.#configs.url!.href)
    }

    async getRequirements(){
        console.log(this.#configs.ai)
    }

    getProperties(){
        console.log(this.#elements)
    }
}

export = Controler