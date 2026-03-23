import { Elements } from "../types/types$schemas";
export default class ControlerUtils {
    #private;
    constructor({ driver, elements }: {
        driver: any;
        elements: Elements;
    });
    getANDTranformPublishedDate(): Promise<Date | null>;
    getDescriptionsInfos(): Promise<any>;
}
//# sourceMappingURL=utils.d.ts.map