// ============= configs do usuario
// o schema que o usuario vai prencher

// precisa unificar os "UserConfigSchema" com o "ConfigSchema"
// da pra fazer isso com UserConfigSchema.extends({...})


type SiteDefaultConfigs = {
    host: string,
    pathname: string,
    search: string
}

export type Elements = {
    lista: string,
    singleVacancy: string,
    title: string,
    empresa: string,
    regiao: string,
    vacancyDescriptionTag: string,
    publishDate: string,
    pagingTag: (site: string) => string
}