import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model descricoes
 *
 */
export type descricoesModel = runtime.Types.Result.DefaultSelection<Prisma.$descricoesPayload>;
export type AggregateDescricoes = {
    _count: DescricoesCountAggregateOutputType | null;
    _avg: DescricoesAvgAggregateOutputType | null;
    _sum: DescricoesSumAggregateOutputType | null;
    _min: DescricoesMinAggregateOutputType | null;
    _max: DescricoesMaxAggregateOutputType | null;
};
export type DescricoesAvgAggregateOutputType = {
    id: number | null;
};
export type DescricoesSumAggregateOutputType = {
    id: number | null;
};
export type DescricoesMinAggregateOutputType = {
    descricao: string | null;
    id: number | null;
};
export type DescricoesMaxAggregateOutputType = {
    descricao: string | null;
    id: number | null;
};
export type DescricoesCountAggregateOutputType = {
    descricao: number;
    id: number;
    requisitos: number;
    _all: number;
};
export type DescricoesAvgAggregateInputType = {
    id?: true;
};
export type DescricoesSumAggregateInputType = {
    id?: true;
};
export type DescricoesMinAggregateInputType = {
    descricao?: true;
    id?: true;
};
export type DescricoesMaxAggregateInputType = {
    descricao?: true;
    id?: true;
};
export type DescricoesCountAggregateInputType = {
    descricao?: true;
    id?: true;
    requisitos?: true;
    _all?: true;
};
export type DescricoesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which descricoes to aggregate.
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of descricoes to fetch.
     */
    orderBy?: Prisma.descricoesOrderByWithRelationInput | Prisma.descricoesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.descricoesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` descricoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` descricoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned descricoes
    **/
    _count?: true | DescricoesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DescricoesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DescricoesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DescricoesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DescricoesMaxAggregateInputType;
};
export type GetDescricoesAggregateType<T extends DescricoesAggregateArgs> = {
    [P in keyof T & keyof AggregateDescricoes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDescricoes[P]> : Prisma.GetScalarType<T[P], AggregateDescricoes[P]>;
};
export type descricoesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.descricoesWhereInput;
    orderBy?: Prisma.descricoesOrderByWithAggregationInput | Prisma.descricoesOrderByWithAggregationInput[];
    by: Prisma.DescricoesScalarFieldEnum[] | Prisma.DescricoesScalarFieldEnum;
    having?: Prisma.descricoesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DescricoesCountAggregateInputType | true;
    _avg?: DescricoesAvgAggregateInputType;
    _sum?: DescricoesSumAggregateInputType;
    _min?: DescricoesMinAggregateInputType;
    _max?: DescricoesMaxAggregateInputType;
};
export type DescricoesGroupByOutputType = {
    descricao: string | null;
    id: number;
    requisitos: string[];
    _count: DescricoesCountAggregateOutputType | null;
    _avg: DescricoesAvgAggregateOutputType | null;
    _sum: DescricoesSumAggregateOutputType | null;
    _min: DescricoesMinAggregateOutputType | null;
    _max: DescricoesMaxAggregateOutputType | null;
};
export type GetDescricoesGroupByPayload<T extends descricoesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DescricoesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DescricoesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DescricoesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DescricoesGroupByOutputType[P]>;
}>>;
export type descricoesWhereInput = {
    AND?: Prisma.descricoesWhereInput | Prisma.descricoesWhereInput[];
    OR?: Prisma.descricoesWhereInput[];
    NOT?: Prisma.descricoesWhereInput | Prisma.descricoesWhereInput[];
    descricao?: Prisma.StringNullableFilter<"descricoes"> | string | null;
    id?: Prisma.IntFilter<"descricoes"> | number;
    requisitos?: Prisma.StringNullableListFilter<"descricoes">;
    vagas?: Prisma.VagasListRelationFilter;
};
export type descricoesOrderByWithRelationInput = {
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
    vagas?: Prisma.vagasOrderByRelationAggregateInput;
};
export type descricoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.descricoesWhereInput | Prisma.descricoesWhereInput[];
    OR?: Prisma.descricoesWhereInput[];
    NOT?: Prisma.descricoesWhereInput | Prisma.descricoesWhereInput[];
    descricao?: Prisma.StringNullableFilter<"descricoes"> | string | null;
    requisitos?: Prisma.StringNullableListFilter<"descricoes">;
    vagas?: Prisma.VagasListRelationFilter;
}, "id">;
export type descricoesOrderByWithAggregationInput = {
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    id?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
    _count?: Prisma.descricoesCountOrderByAggregateInput;
    _avg?: Prisma.descricoesAvgOrderByAggregateInput;
    _max?: Prisma.descricoesMaxOrderByAggregateInput;
    _min?: Prisma.descricoesMinOrderByAggregateInput;
    _sum?: Prisma.descricoesSumOrderByAggregateInput;
};
export type descricoesScalarWhereWithAggregatesInput = {
    AND?: Prisma.descricoesScalarWhereWithAggregatesInput | Prisma.descricoesScalarWhereWithAggregatesInput[];
    OR?: Prisma.descricoesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.descricoesScalarWhereWithAggregatesInput | Prisma.descricoesScalarWhereWithAggregatesInput[];
    descricao?: Prisma.StringNullableWithAggregatesFilter<"descricoes"> | string | null;
    id?: Prisma.IntWithAggregatesFilter<"descricoes"> | number;
    requisitos?: Prisma.StringNullableListFilter<"descricoes">;
};
export type descricoesCreateInput = {
    descricao?: string | null;
    requisitos?: Prisma.descricoesCreaterequisitosInput | string[];
    vagas?: Prisma.vagasCreateNestedManyWithoutDescricoesInput;
};
export type descricoesUncheckedCreateInput = {
    descricao?: string | null;
    id?: number;
    requisitos?: Prisma.descricoesCreaterequisitosInput | string[];
    vagas?: Prisma.vagasUncheckedCreateNestedManyWithoutDescricoesInput;
};
export type descricoesUpdateInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
    vagas?: Prisma.vagasUpdateManyWithoutDescricoesNestedInput;
};
export type descricoesUncheckedUpdateInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
    vagas?: Prisma.vagasUncheckedUpdateManyWithoutDescricoesNestedInput;
};
export type descricoesCreateManyInput = {
    descricao?: string | null;
    id?: number;
    requisitos?: Prisma.descricoesCreaterequisitosInput | string[];
};
export type descricoesUpdateManyMutationInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
};
export type descricoesUncheckedUpdateManyInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type descricoesCountOrderByAggregateInput = {
    descricao?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
    requisitos?: Prisma.SortOrder;
};
export type descricoesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type descricoesMaxOrderByAggregateInput = {
    descricao?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type descricoesMinOrderByAggregateInput = {
    descricao?: Prisma.SortOrder;
    id?: Prisma.SortOrder;
};
export type descricoesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DescricoesNullableScalarRelationFilter = {
    is?: Prisma.descricoesWhereInput | null;
    isNot?: Prisma.descricoesWhereInput | null;
};
export type descricoesCreaterequisitosInput = {
    set: string[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type descricoesUpdaterequisitosInput = {
    set?: string[];
    push?: string | string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type descricoesCreateNestedOneWithoutVagasInput = {
    create?: Prisma.XOR<Prisma.descricoesCreateWithoutVagasInput, Prisma.descricoesUncheckedCreateWithoutVagasInput>;
    connectOrCreate?: Prisma.descricoesCreateOrConnectWithoutVagasInput;
    connect?: Prisma.descricoesWhereUniqueInput;
};
export type descricoesUpdateOneWithoutVagasNestedInput = {
    create?: Prisma.XOR<Prisma.descricoesCreateWithoutVagasInput, Prisma.descricoesUncheckedCreateWithoutVagasInput>;
    connectOrCreate?: Prisma.descricoesCreateOrConnectWithoutVagasInput;
    upsert?: Prisma.descricoesUpsertWithoutVagasInput;
    disconnect?: Prisma.descricoesWhereInput | boolean;
    delete?: Prisma.descricoesWhereInput | boolean;
    connect?: Prisma.descricoesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.descricoesUpdateToOneWithWhereWithoutVagasInput, Prisma.descricoesUpdateWithoutVagasInput>, Prisma.descricoesUncheckedUpdateWithoutVagasInput>;
};
export type descricoesCreateWithoutVagasInput = {
    descricao?: string | null;
    requisitos?: Prisma.descricoesCreaterequisitosInput | string[];
};
export type descricoesUncheckedCreateWithoutVagasInput = {
    descricao?: string | null;
    id?: number;
    requisitos?: Prisma.descricoesCreaterequisitosInput | string[];
};
export type descricoesCreateOrConnectWithoutVagasInput = {
    where: Prisma.descricoesWhereUniqueInput;
    create: Prisma.XOR<Prisma.descricoesCreateWithoutVagasInput, Prisma.descricoesUncheckedCreateWithoutVagasInput>;
};
export type descricoesUpsertWithoutVagasInput = {
    update: Prisma.XOR<Prisma.descricoesUpdateWithoutVagasInput, Prisma.descricoesUncheckedUpdateWithoutVagasInput>;
    create: Prisma.XOR<Prisma.descricoesCreateWithoutVagasInput, Prisma.descricoesUncheckedCreateWithoutVagasInput>;
    where?: Prisma.descricoesWhereInput;
};
export type descricoesUpdateToOneWithWhereWithoutVagasInput = {
    where?: Prisma.descricoesWhereInput;
    data: Prisma.XOR<Prisma.descricoesUpdateWithoutVagasInput, Prisma.descricoesUncheckedUpdateWithoutVagasInput>;
};
export type descricoesUpdateWithoutVagasInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
};
export type descricoesUncheckedUpdateWithoutVagasInput = {
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    requisitos?: Prisma.descricoesUpdaterequisitosInput | string[];
};
/**
 * Count Type DescricoesCountOutputType
 */
export type DescricoesCountOutputType = {
    vagas: number;
};
export type DescricoesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vagas?: boolean | DescricoesCountOutputTypeCountVagasArgs;
};
/**
 * DescricoesCountOutputType without action
 */
export type DescricoesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DescricoesCountOutputType
     */
    select?: Prisma.DescricoesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DescricoesCountOutputType without action
 */
export type DescricoesCountOutputTypeCountVagasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.vagasWhereInput;
};
export type descricoesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    descricao?: boolean;
    id?: boolean;
    requisitos?: boolean;
    vagas?: boolean | Prisma.descricoes$vagasArgs<ExtArgs>;
    _count?: boolean | Prisma.DescricoesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["descricoes"]>;
export type descricoesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    descricao?: boolean;
    id?: boolean;
    requisitos?: boolean;
}, ExtArgs["result"]["descricoes"]>;
export type descricoesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    descricao?: boolean;
    id?: boolean;
    requisitos?: boolean;
}, ExtArgs["result"]["descricoes"]>;
export type descricoesSelectScalar = {
    descricao?: boolean;
    id?: boolean;
    requisitos?: boolean;
};
export type descricoesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"descricao" | "id" | "requisitos", ExtArgs["result"]["descricoes"]>;
export type descricoesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vagas?: boolean | Prisma.descricoes$vagasArgs<ExtArgs>;
    _count?: boolean | Prisma.DescricoesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type descricoesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type descricoesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $descricoesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "descricoes";
    objects: {
        vagas: Prisma.$vagasPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        descricao: string | null;
        id: number;
        requisitos: string[];
    }, ExtArgs["result"]["descricoes"]>;
    composites: {};
};
export type descricoesGetPayload<S extends boolean | null | undefined | descricoesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$descricoesPayload, S>;
export type descricoesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<descricoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DescricoesCountAggregateInputType | true;
};
export interface descricoesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['descricoes'];
        meta: {
            name: 'descricoes';
        };
    };
    /**
     * Find zero or one Descricoes that matches the filter.
     * @param {descricoesFindUniqueArgs} args - Arguments to find a Descricoes
     * @example
     * // Get one Descricoes
     * const descricoes = await prisma.descricoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends descricoesFindUniqueArgs>(args: Prisma.SelectSubset<T, descricoesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Descricoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {descricoesFindUniqueOrThrowArgs} args - Arguments to find a Descricoes
     * @example
     * // Get one Descricoes
     * const descricoes = await prisma.descricoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends descricoesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, descricoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Descricoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesFindFirstArgs} args - Arguments to find a Descricoes
     * @example
     * // Get one Descricoes
     * const descricoes = await prisma.descricoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends descricoesFindFirstArgs>(args?: Prisma.SelectSubset<T, descricoesFindFirstArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Descricoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesFindFirstOrThrowArgs} args - Arguments to find a Descricoes
     * @example
     * // Get one Descricoes
     * const descricoes = await prisma.descricoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends descricoesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, descricoesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Descricoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Descricoes
     * const descricoes = await prisma.descricoes.findMany()
     *
     * // Get first 10 Descricoes
     * const descricoes = await prisma.descricoes.findMany({ take: 10 })
     *
     * // Only select the `descricao`
     * const descricoesWithDescricaoOnly = await prisma.descricoes.findMany({ select: { descricao: true } })
     *
     */
    findMany<T extends descricoesFindManyArgs>(args?: Prisma.SelectSubset<T, descricoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Descricoes.
     * @param {descricoesCreateArgs} args - Arguments to create a Descricoes.
     * @example
     * // Create one Descricoes
     * const Descricoes = await prisma.descricoes.create({
     *   data: {
     *     // ... data to create a Descricoes
     *   }
     * })
     *
     */
    create<T extends descricoesCreateArgs>(args: Prisma.SelectSubset<T, descricoesCreateArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Descricoes.
     * @param {descricoesCreateManyArgs} args - Arguments to create many Descricoes.
     * @example
     * // Create many Descricoes
     * const descricoes = await prisma.descricoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends descricoesCreateManyArgs>(args?: Prisma.SelectSubset<T, descricoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Descricoes and returns the data saved in the database.
     * @param {descricoesCreateManyAndReturnArgs} args - Arguments to create many Descricoes.
     * @example
     * // Create many Descricoes
     * const descricoes = await prisma.descricoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Descricoes and only return the `descricao`
     * const descricoesWithDescricaoOnly = await prisma.descricoes.createManyAndReturn({
     *   select: { descricao: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends descricoesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, descricoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Descricoes.
     * @param {descricoesDeleteArgs} args - Arguments to delete one Descricoes.
     * @example
     * // Delete one Descricoes
     * const Descricoes = await prisma.descricoes.delete({
     *   where: {
     *     // ... filter to delete one Descricoes
     *   }
     * })
     *
     */
    delete<T extends descricoesDeleteArgs>(args: Prisma.SelectSubset<T, descricoesDeleteArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Descricoes.
     * @param {descricoesUpdateArgs} args - Arguments to update one Descricoes.
     * @example
     * // Update one Descricoes
     * const descricoes = await prisma.descricoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends descricoesUpdateArgs>(args: Prisma.SelectSubset<T, descricoesUpdateArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Descricoes.
     * @param {descricoesDeleteManyArgs} args - Arguments to filter Descricoes to delete.
     * @example
     * // Delete a few Descricoes
     * const { count } = await prisma.descricoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends descricoesDeleteManyArgs>(args?: Prisma.SelectSubset<T, descricoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Descricoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Descricoes
     * const descricoes = await prisma.descricoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends descricoesUpdateManyArgs>(args: Prisma.SelectSubset<T, descricoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Descricoes and returns the data updated in the database.
     * @param {descricoesUpdateManyAndReturnArgs} args - Arguments to update many Descricoes.
     * @example
     * // Update many Descricoes
     * const descricoes = await prisma.descricoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Descricoes and only return the `descricao`
     * const descricoesWithDescricaoOnly = await prisma.descricoes.updateManyAndReturn({
     *   select: { descricao: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends descricoesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, descricoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Descricoes.
     * @param {descricoesUpsertArgs} args - Arguments to update or create a Descricoes.
     * @example
     * // Update or create a Descricoes
     * const descricoes = await prisma.descricoes.upsert({
     *   create: {
     *     // ... data to create a Descricoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Descricoes we want to update
     *   }
     * })
     */
    upsert<T extends descricoesUpsertArgs>(args: Prisma.SelectSubset<T, descricoesUpsertArgs<ExtArgs>>): Prisma.Prisma__descricoesClient<runtime.Types.Result.GetResult<Prisma.$descricoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Descricoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesCountArgs} args - Arguments to filter Descricoes to count.
     * @example
     * // Count the number of Descricoes
     * const count = await prisma.descricoes.count({
     *   where: {
     *     // ... the filter for the Descricoes we want to count
     *   }
     * })
    **/
    count<T extends descricoesCountArgs>(args?: Prisma.Subset<T, descricoesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DescricoesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Descricoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DescricoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DescricoesAggregateArgs>(args: Prisma.Subset<T, DescricoesAggregateArgs>): Prisma.PrismaPromise<GetDescricoesAggregateType<T>>;
    /**
     * Group by Descricoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {descricoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends descricoesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: descricoesGroupByArgs['orderBy'];
    } : {
        orderBy?: descricoesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, descricoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescricoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the descricoes model
     */
    readonly fields: descricoesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for descricoes.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__descricoesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vagas<T extends Prisma.descricoes$vagasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.descricoes$vagasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$vagasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the descricoes model
 */
export interface descricoesFieldRefs {
    readonly descricao: Prisma.FieldRef<"descricoes", 'String'>;
    readonly id: Prisma.FieldRef<"descricoes", 'Int'>;
    readonly requisitos: Prisma.FieldRef<"descricoes", 'String[]'>;
}
/**
 * descricoes findUnique
 */
export type descricoesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter, which descricoes to fetch.
     */
    where: Prisma.descricoesWhereUniqueInput;
};
/**
 * descricoes findUniqueOrThrow
 */
export type descricoesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter, which descricoes to fetch.
     */
    where: Prisma.descricoesWhereUniqueInput;
};
/**
 * descricoes findFirst
 */
export type descricoesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter, which descricoes to fetch.
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of descricoes to fetch.
     */
    orderBy?: Prisma.descricoesOrderByWithRelationInput | Prisma.descricoesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for descricoes.
     */
    cursor?: Prisma.descricoesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` descricoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` descricoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of descricoes.
     */
    distinct?: Prisma.DescricoesScalarFieldEnum | Prisma.DescricoesScalarFieldEnum[];
};
/**
 * descricoes findFirstOrThrow
 */
export type descricoesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter, which descricoes to fetch.
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of descricoes to fetch.
     */
    orderBy?: Prisma.descricoesOrderByWithRelationInput | Prisma.descricoesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for descricoes.
     */
    cursor?: Prisma.descricoesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` descricoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` descricoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of descricoes.
     */
    distinct?: Prisma.DescricoesScalarFieldEnum | Prisma.DescricoesScalarFieldEnum[];
};
/**
 * descricoes findMany
 */
export type descricoesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter, which descricoes to fetch.
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of descricoes to fetch.
     */
    orderBy?: Prisma.descricoesOrderByWithRelationInput | Prisma.descricoesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing descricoes.
     */
    cursor?: Prisma.descricoesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` descricoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` descricoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of descricoes.
     */
    distinct?: Prisma.DescricoesScalarFieldEnum | Prisma.DescricoesScalarFieldEnum[];
};
/**
 * descricoes create
 */
export type descricoesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * The data needed to create a descricoes.
     */
    data?: Prisma.XOR<Prisma.descricoesCreateInput, Prisma.descricoesUncheckedCreateInput>;
};
/**
 * descricoes createMany
 */
export type descricoesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many descricoes.
     */
    data: Prisma.descricoesCreateManyInput | Prisma.descricoesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * descricoes createManyAndReturn
 */
export type descricoesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * The data used to create many descricoes.
     */
    data: Prisma.descricoesCreateManyInput | Prisma.descricoesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * descricoes update
 */
export type descricoesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * The data needed to update a descricoes.
     */
    data: Prisma.XOR<Prisma.descricoesUpdateInput, Prisma.descricoesUncheckedUpdateInput>;
    /**
     * Choose, which descricoes to update.
     */
    where: Prisma.descricoesWhereUniqueInput;
};
/**
 * descricoes updateMany
 */
export type descricoesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update descricoes.
     */
    data: Prisma.XOR<Prisma.descricoesUpdateManyMutationInput, Prisma.descricoesUncheckedUpdateManyInput>;
    /**
     * Filter which descricoes to update
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * Limit how many descricoes to update.
     */
    limit?: number;
};
/**
 * descricoes updateManyAndReturn
 */
export type descricoesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * The data used to update descricoes.
     */
    data: Prisma.XOR<Prisma.descricoesUpdateManyMutationInput, Prisma.descricoesUncheckedUpdateManyInput>;
    /**
     * Filter which descricoes to update
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * Limit how many descricoes to update.
     */
    limit?: number;
};
/**
 * descricoes upsert
 */
export type descricoesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * The filter to search for the descricoes to update in case it exists.
     */
    where: Prisma.descricoesWhereUniqueInput;
    /**
     * In case the descricoes found by the `where` argument doesn't exist, create a new descricoes with this data.
     */
    create: Prisma.XOR<Prisma.descricoesCreateInput, Prisma.descricoesUncheckedCreateInput>;
    /**
     * In case the descricoes was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.descricoesUpdateInput, Prisma.descricoesUncheckedUpdateInput>;
};
/**
 * descricoes delete
 */
export type descricoesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
    /**
     * Filter which descricoes to delete.
     */
    where: Prisma.descricoesWhereUniqueInput;
};
/**
 * descricoes deleteMany
 */
export type descricoesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which descricoes to delete
     */
    where?: Prisma.descricoesWhereInput;
    /**
     * Limit how many descricoes to delete.
     */
    limit?: number;
};
/**
 * descricoes.vagas
 */
export type descricoes$vagasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vagas
     */
    select?: Prisma.vagasSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the vagas
     */
    omit?: Prisma.vagasOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.vagasInclude<ExtArgs> | null;
    where?: Prisma.vagasWhereInput;
    orderBy?: Prisma.vagasOrderByWithRelationInput | Prisma.vagasOrderByWithRelationInput[];
    cursor?: Prisma.vagasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VagasScalarFieldEnum | Prisma.VagasScalarFieldEnum[];
};
/**
 * descricoes without action
 */
export type descricoesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the descricoes
     */
    select?: Prisma.descricoesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the descricoes
     */
    omit?: Prisma.descricoesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.descricoesInclude<ExtArgs> | null;
};
//# sourceMappingURL=descricoes.d.ts.map