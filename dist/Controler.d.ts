import Configurator from "./configurator/configurator";
import { Configuracao } from "./types/types$schemas";
declare class Controler extends Configurator {
    #private;
    constructor(data: {
        dbConn: any;
        userConfigs: Configuracao;
        driver: any;
    });
    getWebSite(): Promise<void>;
    startToGetVacancies(): Promise<null | undefined>;
    getProperties(): void;
}
export = Controler;
//# sourceMappingURL=Controler.d.ts.map