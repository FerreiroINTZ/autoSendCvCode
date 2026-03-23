export default class DatabaseControler {
    #private;
    private currentVacancyId;
    constructor(connString: any);
    testeDb(): Promise<void>;
    verifyExistance(jobId: string): Promise<boolean>;
    saveVacancyOnDataBase(data: any): Promise<void>;
    saveDescription(): void;
}
//# sourceMappingURL=DatabaseControler.d.ts.map