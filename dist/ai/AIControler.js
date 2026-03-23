"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genai_1 = require("@google/genai");
const types_schemas_1 = require("../types/types$schemas");
class AIControler {
    #ai;
    constructor(aiKey) {
        this.#ai = new genai_1.GoogleGenAI({ apiKey: aiKey });
        // precisa ser um async para dar certo!
        this.testeAiAPI(); // nao ta funcionando
    }
    // teste se a chave da API e valida
    async testeAiAPI() {
        try {
            await this.#ai.models.list();
        }
        catch (err) {
            throw new Error("Chave de API invalida!");
        }
    }
    async askAiForGetDescriptionDetais(descText, keyWords) {
        const resp = await this.#ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `analise a seguinte descricao, identifique as informacoes do schema e retorne um json prenchido. Use como base as seguintes palavras chave para prencher a chave de "paridade": ${keyWords.join("; ")}. Descricao:
            ${descText}`,
            config: {
                responseMimeType: "application/json",
                responseJsonSchema: types_schemas_1.DescriptionSchemaParsed
            }
        });
        return JSON.parse(resp.text);
    }
}
exports.default = AIControler;
//# sourceMappingURL=AIControler.js.map