import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly descricoes: "descricoes";
    readonly vagas: "vagas";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const DescricoesScalarFieldEnum: {
    readonly descricao: "descricao";
    readonly id: "id";
    readonly requisitos: "requisitos";
};
export type DescricoesScalarFieldEnum = (typeof DescricoesScalarFieldEnum)[keyof typeof DescricoesScalarFieldEnum];
export declare const VagasScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly empresa: "empresa";
    readonly cidade: "cidade";
    readonly link: "link";
    readonly dt_publicacao: "dt_publicacao";
    readonly keywords: "keywords";
    readonly area: "area";
    readonly salario: "salario";
    readonly plataforma: "plataforma";
    readonly jobid: "jobid";
    readonly modalidade: "modalidade";
    readonly dt_register: "dt_register";
    readonly justificativa: "justificativa";
    readonly paridade: "paridade";
    readonly requisitos: "requisitos";
    readonly descricao_fk: "descricao_fk";
    readonly acesso: "acesso";
    readonly disponibilidade: "disponibilidade";
};
export type VagasScalarFieldEnum = (typeof VagasScalarFieldEnum)[keyof typeof VagasScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map