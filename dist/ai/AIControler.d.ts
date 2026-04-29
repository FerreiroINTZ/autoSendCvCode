export default class AIControler {
    #private;
    constructor(aiKey: string);
    changeAiModel(descText: string, keyWords: string[], otherInfos: string): void;
    testeAiAPI(): Promise<void>;
    askAiForGetDescriptionDetais(descText: string, keyWords: string[], otherInfos: string): Promise<any>;
}
//# sourceMappingURL=AIControler.d.ts.map