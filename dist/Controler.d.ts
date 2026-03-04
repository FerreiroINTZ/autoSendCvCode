import { Configuracao } from "./types$schemas";
declare class Controler {
    #private;
    constructor(data: {
        dbConn: any;
        userConfigs: Configuracao;
        driver: any;
    });
    getWebSite(): Promise<void>;
    getDescriptionsInfos(): Promise<void>;
    getBasicInfos(): Promise<void>;
    getRequirements(): Promise<void>;
    getProperties(): void;
}
export = Controler;
//# sourceMappingURL=Controler.d.ts.map