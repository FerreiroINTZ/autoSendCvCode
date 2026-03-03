"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSchema = exports.UserConfigSchema = exports.Sites = void 0;
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
exports.UserConfigSchema = zod_1.z.object({
    site: EnumSites,
    keywords: zod_1.z.array(zod_1.z.string()).min(1, "Pecisa de pelo menos 1 Item"),
    aiKey: zod_1.z.string(),
    area: zod_1.z.string().optional(),
    knowledge: zod_1.z.array(zod_1.z.string()).optional(),
    cidade: zod_1.z.string().optional(),
}).strict();
// ============= configs do Controler
exports.ConfigSchema = zod_1.z.object({
    site: EnumSites,
    keywords: zod_1.z.array(zod_1.z.string()).min(1, "Pecisa de pelo menos 1 Item"),
    aiKey: zod_1.z.string(),
    // sao obrigatorios
    ai: zod_1.z.instanceof(genai_1.GoogleGenAI).optional(),
    url: zod_1.z.instanceof(URL).optional(),
    area: zod_1.z.string().optional(),
    knowledge: zod_1.z.array(zod_1.z.string()).optional(),
    cidade: zod_1.z.string().optional(),
}).strict();
//# sourceMappingURL=types$schemas.js.map