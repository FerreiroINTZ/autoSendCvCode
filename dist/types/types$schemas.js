"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsAvailable = exports.DescriptionSchemaParsed = exports.ConfigSchema = exports.UserConfigSchema = exports.Sites = void 0;
const zod_1 = require("zod");
const genai_1 = require("@google/genai");
// isso cria um Enum
// isso precisa virar um tipo como um Enum, e nao um array
exports.Sites = [
    'linkedin',
    'indeed',
    'infojobs'
];
const EnumSites = zod_1.z.enum(exports.Sites);
// ============= configs do usuario
// precisa unificar os "UserConfigSchema" com o "ConfigSchema"
// da pra fazer isso com UserConfigSchema.extends({...})
exports.UserConfigSchema = zod_1.z.object({
    site: EnumSites,
    searchWords: zod_1.z.array(zod_1.z.string()).min(1, "Precisa de pelo menos 1 item"),
    aiKey: zod_1.z.string(),
    paginas: zod_1.z.number().default(1).optional(),
    area: zod_1.z.string().optional(),
    keywords: zod_1.z.array(zod_1.z.string()).optional(),
    knowledge: zod_1.z.array(zod_1.z.string()).optional(),
    cidade: zod_1.z.string().optional(),
    aiRequired: zod_1.z.boolean().optional()
}).strict();
// ============= configs do Controler
exports.ConfigSchema = zod_1.z.object({
    site: EnumSites,
    searchWords: zod_1.z.array(zod_1.z.string()).min(1, "Precisa de pelo menos 1 item"),
    aiKey: zod_1.z.string(),
    // sao obrigatorios
    ai: zod_1.z.instanceof(genai_1.GoogleGenAI),
    url: zod_1.z.instanceof(URL),
    paginas: zod_1.z.number().default(1).optional(),
    keywords: zod_1.z.array(zod_1.z.string()).optional(),
    area: zod_1.z.string().optional(),
    knowledge: zod_1.z.array(zod_1.z.string()).optional(),
    cidade: zod_1.z.string().optional(),
    aiRequired: zod_1.z.boolean().optional()
}).strict();
// ================ Descriptionn Schema
const DescriptionsSchema = zod_1.z.object({
    salario: zod_1.z.number().optional().describe("o salario pago pela vaga"),
    area: zod_1.z.string().describe("qual area a vaga faz parte, com base nas habilidades"),
    paridade: zod_1.z.number().min(1).max(4).describe("um numero de 1 ate 4 que representa o quanto a vaga condiz com as palavras chave citadas no prompt. Sendo: 1, pessimo; 2, ruim; 3, bom; 4, perfeita "),
    justificativa: zod_1.z.string().describe("justificativa do por que escolhido o valor da paridade"),
    requisitos: zod_1.z.array(zod_1.z.string()).describe("os requisitos que a vaga pede"),
    matches: zod_1.z.array(zod_1.z.string()).describe("contem as palavras chave da vaga, em si"),
    weaknesses: zod_1.z.array(zod_1.z.string()).describe("sao os pontos fracos da vaga com relacao as palavras chave que o usuario passou"),
    summary: zod_1.z.string().describe("um resumo de poucas palavras sobre a paridade da vaga")
});
exports.DescriptionSchemaParsed = zod_1.z.toJSONSchema(DescriptionsSchema);
// ====================================== ai types 
exports.modelsAvailable = [
    "gemini-3-flash-preview",
    "gemini-2.5-flash"
    // "Gemini 2.5 Flash", 
    // "Gemini 3.1 Flash Lite"
];
const aiModelsSchema = zod_1.z.enum(exports.modelsAvailable);
//# sourceMappingURL=types$schemas.js.map