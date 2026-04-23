"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const genai_1 = require("@google/genai");
const types_schemas_1 = require("../types/types$schemas");
class AIControler {
    #ai;
    #ai_models = ["gemini-3-flash-preview", "|", "Gemini 2.5 Flash", "Gemini 3.1 Flash Lite"];
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
        const readPrompt = fs_1.default.readFileSync("./src/ai/prompt").toString();
        const keywordsFormated = keyWords.join("; ");
        const promptFormated = readPrompt
            .replace(/\${keywords}/, keywordsFormated);
        // .replace(/\${descText}/, descText)
        try {
            const resp = await this.#ai.models.generateContent({
                model: "gemini-3-flash-preview",
                // melhorar o prompt
                contents: promptFormated,
                config: {
                    responseMimeType: "application/json",
                    responseJsonSchema: types_schemas_1.DescriptionSchemaParsed
                }
            });
            const json = JSON.parse(resp.text);
            // console.log(resp)
            console.log(json);
            return json;
        }
        catch (e) {
            const msg = JSON.parse(e.message).error.message;
            console.log(msg);
            console.log(msg.includes("You exceeded"));
            // colocar um log aqui que avisa que a cota foi exedida
            // fazer com que, ao execeder a cota, ele use outro modelo
            return {};
        }
    }
}
exports.default = AIControler;
//# sourceMappingURL=AIControler.js.map