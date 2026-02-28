"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Controler_databaseConnection, _Controler_configs, _Controler_driver;
const zod_1 = require("zod");
const Sites = [
    'linkedin',
    'indeed',
    'infojobs'
];
const EnumSites = zod_1.z.enum(Sites);
const ConfigSchema = zod_1.z.object({
    site: EnumSites,
    url: zod_1.z.instanceof(URL).optional(),
    keywords: zod_1.z.array(zod_1.z.string()).min(1, "Pecisa de pelo menos 1 Item"),
    area: zod_1.z.string().optional(),
    knowledge: zod_1.z.array(zod_1.z.string()).optional(),
    cidade: zod_1.z.string().optional()
}).strict();
const sitesDefaultsConfigs = (word) => {
    const opts = {
        linkedin: {
            host: `https://${word}.com`,
            pathname: "jobs/search/",
            search: "keywords="
        },
        indeed: {
            host: `https://${word}.com`,
            pathname: "jobs",
            search: "q="
        },
        infojobs: {
            host: `https://${word}.com.br`,
            pathname: "empregos.aspx",
            search: "palabra="
        }
    };
    return opts[word];
};
class Controler {
    constructor({ dbConn, configs, driver }) {
        _Controler_databaseConnection.set(this, void 0);
        _Controler_configs.set(this, void 0);
        _Controler_driver.set(this, void 0);
        if (typeof configs != "object") {
            throw new Error("Configuracoes tem que ser um Objeto!");
        }
        if (typeof dbConn != "object") {
            throw new Error("Banco de dados invalido!");
        }
        if (!driver) {
            throw new Error("Driver invalido!");
        }
        const statement = ConfigSchema.safeParse(configs);
        if (!statement.success) {
            // console.log(statement.error)
            throw new Error("Configuracoes invalidas");
        }
        __classPrivateFieldSet(this, _Controler_configs, configs, "f");
        __classPrivateFieldSet(this, _Controler_databaseConnection, dbConn, "f");
        __classPrivateFieldSet(this, _Controler_driver, driver, "f");
        this.transformUrlOnConfigProperty(configs);
    }
    // configura a URL basica
    transformUrlOnConfigProperty(configs) {
        const newObj = Object.assign({}, configs);
        newObj.url = new URL(sitesDefaultsConfigs(configs.site).host);
        newObj.url.pathname = sitesDefaultsConfigs(configs.site).pathname;
        newObj.url.search = sitesDefaultsConfigs(configs.site).search + configs.keywords[0];
        __classPrivateFieldSet(this, _Controler_configs, Object.assign({}, newObj), "f");
    }
    getWebSite() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _Controler_driver, "f").get(__classPrivateFieldGet(this, _Controler_configs, "f").url.href);
        });
    }
    getProperties() {
        console.log(__classPrivateFieldGet(this, _Controler_configs, "f"));
    }
}
_Controler_databaseConnection = new WeakMap(), _Controler_configs = new WeakMap(), _Controler_driver = new WeakMap();
module.exports = Controler;
//# sourceMappingURL=Controler.js.map