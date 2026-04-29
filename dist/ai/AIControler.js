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
    #ai_models = types_schemas_1.modelsAvailable.map((x) => ({ name: x, isUsable: true }));
    #current_ai_model = {
        nome: this.#ai_models[0].name,
        indx: 0
    };
    #isUsable = true;
    constructor(aiKey) {
        this.#ai = new genai_1.GoogleGenAI({ apiKey: aiKey });
        // precisa ser um async para dar certo!
        // this.testeAiAPI()   // nao ta funcionando
    }
    changeAiModel(descText, keyWords, otherInfos) {
        // invalida o modelo atual
        this.#ai_models[this.#current_ai_model.indx].isUsable = false;
        // verifica se o modelo atul e o ultimo
        // pois, se for, ele invalida o uso da IA para a pesquisa
        if (this.#ai_models.length == this.#current_ai_model.indx + 1) {
            // console.log("\x1b[32m inutilizavel! \x1b[0m")
            this.#isUsable = false;
            return;
        }
        // busca o proximo modelo usavel disponivel
        const currUsable = this.#ai_models.findIndex((element, index) => {
            if (element.isUsable) {
                return true;
            }
        });
        console.log(this.#ai_models[currUsable]);
        console.log(currUsable);
        console.log(this.#current_ai_model);
        console.log(this.#ai_models);
        this.#current_ai_model = {
            nome: this.#ai_models[currUsable].name,
            indx: currUsable
        };
        // console.log("Curr Index")
        // console.log(currUsable)
        // console.log(this.#ai_models.length == this.#current_ai_model.indx + 1)
        // console.log(currUsable)
        // console.log("Current Model: ")
        // console.log(this.#current_ai_model.nome)
        console.log("Modelo novo: ");
        // tenta de novo
        this.askAiForGetDescriptionDetais(descText, keyWords, otherInfos);
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
    async askAiForGetDescriptionDetais(descText, keyWords, otherInfos) {
        // se nao for usavel ele retornar false
        if (!this.#isUsable) {
            process.stdout.write("\n \x1b[32m IA indisponiel! \x1b[0m");
            return false;
        }
        // console.log()
        const readPrompt = fs_1.default.readFileSync("./src/ai/prompt").toString();
        const keywordsFormated = keyWords.join("; ");
        const promptFormated = readPrompt
            .replace(/\${keywords}/, keywordsFormated)
            .replace(/\${descText}/, descText) + otherInfos;
        try {
            // throw new Error(JSON.stringify({
            //     error: {
            //         message: "You exceeded"
            //     }
            // }))
            const resp = await this.#ai.models.generateContent({
                model: this.#current_ai_model.nome,
                // melhorar o prompt
                contents: promptFormated,
                config: {
                    responseMimeType: "application/json",
                    responseJsonSchema: types_schemas_1.DescriptionSchemaParsed
                }
            });
            const json = JSON.parse(resp.text);
            // console.log(resp)
            // console.log(json)
            return json;
        }
        catch (e) {
            const msg = JSON.parse(e.message).error.message;
            // console.log(msg)
            if (msg.includes("You exceeded")) {
                console.log("tokens maximos atingidos para: ", this.#current_ai_model.nome);
                this.changeAiModel(descText, keyWords, otherInfos);
                if (!this.#isUsable) {
                    return false;
                }
            }
            // colocar um log aqui que avisa que a cota foi exedida
            // fazer com que, ao execeder a cota, ele use outro modelo
            return {};
        }
    }
}
exports.default = AIControler;
//# sourceMappingURL=AIControler.js.map