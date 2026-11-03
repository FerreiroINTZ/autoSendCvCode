import {z} from "zod"
import {EnumSites} from "./listaDeSites"
import {GoogleGenAI} from "@google/genai"

export const UserConfigSchema = z.object({
    site: EnumSites,
    searchWords: z.array(z.string()).min(1, "Precisa de pelo menos 1 item"),
    aiKey: z.string(),
    paginas: z.number().default(1).optional(),
    
    area: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    knowledge: z.array(z.string()).optional(),
    cidade: z.string().optional(),
    aiRequired: z.boolean().optional(),
    minQtdToAnalise: z.number().optional().default(10),

    otherAiCriterions: z.string().optional(),
    soundsEnabled: z.boolean().optional().default(false)
}).strict()

export type UserConfig = z.infer<typeof UserConfigSchema>


export const ConfigSchema = UserConfigSchema.extend({
    // tem que ser opicional pra nao conflitar com o UserSchema na verificacao de URL do ControllerConfigurator
    ai: z.instanceof(GoogleGenAI).optional(),
    url: z.instanceof(URL).optional(),
}).strict()

export type Configuracao = z.infer<typeof ConfigSchema>