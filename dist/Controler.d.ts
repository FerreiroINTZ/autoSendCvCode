import { Configuracao } from "./types/types$schemas";
import Utils from "./ControlerUtils";
declare class Controler extends Utils {
    #private;
    constructor(data: {
        dbConn: any;
        userConfigs: Configuracao;
        driver: any;
    });
    getWebSite(): Promise<void>;
    askAiForGetDescriptionDetais(descText: string): Promise<void>;
    getBasicInfos(): Promise<void>;
    saveVacancyOnDataBase(data: any): Promise<void>;
    getProperties(): void;
}
export = Controler;
//# sourceMappingURL=Controler.d.ts.map