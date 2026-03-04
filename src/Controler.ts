import {z} from "zod"
import {GoogleGenAI} from "@google/genai"
import Configurator from "./ControlerConfigurator"
import {
    ConfigSchema, 
    Configuracao, 
    Elements, 
    DescriptionSchemaParsed
} from "./types$schemas"
import {By} from "selenium-webdriver"

class Controler{
    #databaseConnection: Object;
    #configs: Configuracao;
    #driver: any;
    #elements: Elements;
    #iaSDK: GoogleGenAI;

    constructor(
        data: 
        {dbConn: any, userConfigs: Configuracao, driver: any}
    ){
        // faz as verificacoes basicas
        Configurator.basicVerificantionsOfUserConfigParam(data)

        this.#configs = Configurator.parseConfigs(data.userConfigs)
        this.#databaseConnection = data.dbConn
        this.#driver = data.driver
        this.#elements = Configurator.setElementsTag(data.userConfigs.site)
        this.#iaSDK = Configurator.instantiateGoogleGenAI(data.userConfigs.aiKey)
    }

    async getWebSite(){
        await this.#driver.get(this.#configs.url!.href)
    }

    async getDescriptionsInfos(){
        const descriptionTag = this.#driver.findElement(By.xpath(this.#elements.vacancyDescriptionTag))
        const descText = await descriptionTag.getText()
        console.log(descText)
        const resp = await this.#iaSDK.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `analise a seguinte descricao, identifique as informacoes do schema e retorne um josn com o schema prenchido: 
            ${descText}`,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: DescriptionSchemaParsed
            }
        })
        console.log(resp.text)
    }

    async getBasicInfos(){
        // pega a lista
        const lista = await this.#driver.findElement(By.xpath(this.#elements.lista))
        // <li>s
        const elements = await lista.findElements(By.css(":scope > *"))
        
        console.log(elements.length)
        for await (const item of elements){
            await this.#driver.executeScript("arguments[0].scrollIntoView()", item)
            await item.click()
            const slw = await item.findElements(By.css(":scope > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div"))
            console.log(slw.length)
            const title = await slw[0].getText()
            const empresa = await slw[1].getText()
            const regiao = await slw[2].getText()
            console.log(title.split("\n")[0])
            console.log(empresa)
            console.log(regiao)
            const currentUrl = await this.#driver.getCurrentUrl()
            const url = new URLSearchParams(currentUrl)
            const jobId = url.get("currentJobId")
            console.log(jobId)
            console.log("\n")
            // await this.getDescriptionsInfos()
            break
        }
    }

    async getRequirements(){
        const lista = await this.#driver.findElement(By.xpath(this.#elements.lista))
    }

    getProperties(){
        console.log(this.#driver)
    }
}

export = Controler