import { z } from "zod";
declare const ConfigSchema: z.ZodObject<{
    site: z.ZodEnum<{
        linkedin: "linkedin";
        indeed: "indeed";
        infojobs: "infojobs";
    }>;
    url: z.ZodOptional<z.ZodCustom<URL, URL>>;
    keywords: z.ZodArray<z.ZodString>;
    area: z.ZodOptional<z.ZodString>;
    knowledge: z.ZodOptional<z.ZodArray<z.ZodString>>;
    cidade: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
type Configuracao = z.infer<typeof ConfigSchema>;
declare class Controler {
    #private;
    constructor({ dbConn, configs, driver }: {
        dbConn: Object;
        configs: Configuracao;
        driver: any;
    });
    transformUrlOnConfigProperty(configs: Configuracao): void;
    getWebSite(): Promise<void>;
    getProperties(): void;
}
export = Controler;
//# sourceMappingURL=Controler.d.ts.map