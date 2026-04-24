import { GoogleGenAI } from "@google/genai";
import { Configuracao, UserConfig } from "../types/types$schemas.js";
declare class ControlerConfigurator {
    protected modules: any;
    constructor(clases: any);
    static basicVerificantionsOfUserConfigParam({ userConfigs, dbConn, driver }: {
        userConfigs: UserConfig;
        dbConn: any;
        driver: any;
    }): void;
    static transformUrlOnConfigProperty(configs: Configuracao): {
        site: "linkedin" | "indeed" | "infojobs";
        searchWords: string[];
        aiKey: string;
        ai: GoogleGenAI;
        url: URL;
        paginas?: number | undefined;
        keywords?: string[] | undefined;
        area?: string | undefined;
        knowledge?: string[] | undefined;
        cidade?: string | undefined;
        aiRequired?: boolean | undefined;
    };
    static sitesDefaultsConfigs(host: string, query: string[]): any;
    static parseConfigs(userData: UserConfig): {
        site: "linkedin" | "indeed" | "infojobs";
        searchWords: string[];
        aiKey: string;
        ai: GoogleGenAI;
        url: URL;
        paginas?: number | undefined;
        keywords?: string[] | undefined;
        area?: string | undefined;
        knowledge?: string[] | undefined;
        cidade?: string | undefined;
        aiRequired?: boolean | undefined;
    };
    static setElementsTag(site: string): any;
}
export default ControlerConfigurator;
//# sourceMappingURL=configurator.d.ts.map