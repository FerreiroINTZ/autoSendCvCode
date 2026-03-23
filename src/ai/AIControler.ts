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
        const resp = await this.#ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `analise a seguinte descricao, identifique as informacoes do schema e retorne um json prenchido. Use como base as seguintes palavras chave para prencher a chave de "paridade": ${keyWords.join("; ")}. Descricao:
            ${descText}`,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: DescriptionSchemaParsed
            }
        })
        return JSON.parse(resp.text!)
    }
}