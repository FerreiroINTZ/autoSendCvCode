import {z} from "zod"

export const Sites = [
    'linkedin',
    'indeed',
    'infojobs'
] as const

export type ListaDeSites = typeof Sites[number]

export const EnumSites = z.enum(Sites)