import fs, { read } from "fs"
import {GoogleGenAI} from "@google/genai"
import {DescriptionSchemaParsed} from "../types/types$schemas"

export default class AIControler{
    #ai: GoogleGenAI

    constructor(aiKey: string){
        this.#ai = new GoogleGenAI({apiKey: aiKey})
        // precisa ser um async para dar certo!
        this.testeAiAPI()   // nao ta funcionando
    }

    // teste se a chave da API e valida
    async testeAiAPI(){
        try{
            await this.#ai.models.list()
        }catch(err){
            throw new Error("Chave de API invalida!")
        }
    }

    async askAiForGetDescriptionDetais(descText: string, keyWords: string[]){
        const readPrompt: string  = fs.readFileSync("./src/ai/prompt").toString()
        const keywordsFormated = keyWords.join("; ")
        const promptFormated = readPrompt
            .replace(/\${keywords}/, keywordsFormated)
            // .replace(/\${descText}/, descText)
        try{

            const resp = await this.#ai.models.generateContent({
                model: "gemini-3-flash-preview",
                // melhorar o prompt
                contents: promptFormated,
                config: {
                    responseMimeType: "application/json",
                    responseJsonSchema: DescriptionSchemaParsed
                }
            })
            return JSON.parse(resp.text!)
        }catch(e: any){
            const msg = JSON.parse(e.message).error.message
            // console.log(msg.includes("You exceeded"))
            // colocar um log aqui que avisa que a cota foi exedida
            // fazer com que, ao execeder a cota, ele use outro modelo
            return {}
        }
    }
}