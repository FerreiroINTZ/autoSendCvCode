import {z} from "zod"

// ================ Description Schema =================
// schema que a IA usara como base para prencher
const DescriptionsSchema = z.object({
    salario: z.number().optional().describe('o salario pago pela vaga (se nao tiver deixe uma string vazia "")'),
    area: z.string().describe("qual area a vaga faz parte, com base nas habilidades"),
    
    paridade: z.number().min(1).max(4).describe("um numero de 1 ate 4 que representa o quanto a vaga condiz com as palavras chave citadas no prompt. Sendo: 1, pessimo; 2, ruim; 3, bom; 4, perfeita "),
    justificativa: z.string().describe("justificativa do por que escolhido o valor da paridade"),
    requisitos: z.array(z.string()).describe("os requisitos que a vaga pede"),
    matches: z.array(z.string()).describe("contem as palavras chave da vaga, em si"),
    weaknesses: z.array(z.string()).describe("sao os pontos fracos da vaga com relacao as palavras chave que o usuario passou"),
    summary: z.string().describe("um resumo de poucas palavras sobre a paridade da vaga"),
    
    jobId: z.string().describe("Coloque aqui o jobId da vaga analisada")
})

const descriptionArraySchema = z.array(DescriptionsSchema)

export const DescriptionSchemaParsed = z.toJSONSchema(descriptionArraySchema)

// ============================ ai types 

export const modelsAvailable = [
    "gemini-3-flash-preview",
    "gemini-2.5-flash"
    // "Gemini 2.5 Flash", 
    // "Gemini 3.1 Flash Lite"
] as const

const aiModelsSchema = z.enum(modelsAvailable)

export type AiModels = z.infer<typeof aiModelsSchema>