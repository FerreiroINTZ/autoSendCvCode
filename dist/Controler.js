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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Controler_databaseConnection, _Controler_configs, _Controler_driver, _Controler_elements, _Controler_iaSDK;
const ControlerConfigurator_1 = __importDefault(require("./ControlerConfigurator"));
const types_schemas_1 = require("./types$schemas");
const selenium_webdriver_1 = require("selenium-webdriver");
class Controler {
    constructor(data) {
        _Controler_databaseConnection.set(this, void 0);
        _Controler_configs.set(this, void 0);
        _Controler_driver.set(this, void 0);
        _Controler_elements.set(this, void 0);
        _Controler_iaSDK.set(this, void 0);
        // faz as verificacoes basicas
        ControlerConfigurator_1.default.basicVerificantionsOfUserConfigParam(data);
        __classPrivateFieldSet(this, _Controler_configs, ControlerConfigurator_1.default.parseConfigs(data.userConfigs), "f");
        __classPrivateFieldSet(this, _Controler_databaseConnection, data.dbConn, "f");
        __classPrivateFieldSet(this, _Controler_driver, data.driver, "f");
        __classPrivateFieldSet(this, _Controler_elements, ControlerConfigurator_1.default.setElementsTag(data.userConfigs.site), "f");
        __classPrivateFieldSet(this, _Controler_iaSDK, ControlerConfigurator_1.default.instantiateGoogleGenAI(data.userConfigs.aiKey), "f");
    }
    getWebSite() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __classPrivateFieldGet(this, _Controler_driver, "f").get(__classPrivateFieldGet(this, _Controler_configs, "f").url.href);
        });
    }
    getDescriptionsInfos() {
        return __awaiter(this, void 0, void 0, function* () {
            const descriptionTag = __classPrivateFieldGet(this, _Controler_driver, "f").findElement(selenium_webdriver_1.By.xpath(__classPrivateFieldGet(this, _Controler_elements, "f").vacancyDescriptionTag));
            const descText = yield descriptionTag.getText();
            console.log(descText);
            const resp = yield __classPrivateFieldGet(this, _Controler_iaSDK, "f").models.generateContent({
                model: "gemini-3-flash-preview",
                contents: `analise a seguinte descricao, identifique as informacoes do schema e retorne um josn com o schema prenchido: 
            ${descText}`,
                config: {
                    responseMimeType: "application/json",
                    responseJsonSchema: types_schemas_1.DescriptionSchemaParsed
                }
            });
            console.log(resp.text);
        });
    }
    getBasicInfos() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            // pega a lista
            const lista = yield __classPrivateFieldGet(this, _Controler_driver, "f").findElement(selenium_webdriver_1.By.xpath(__classPrivateFieldGet(this, _Controler_elements, "f").lista));
            // <li>s
            const elements = yield lista.findElements(selenium_webdriver_1.By.css(":scope > *"));
            console.log(elements.length);
            try {
                for (var _d = true, elements_1 = __asyncValues(elements), elements_1_1; elements_1_1 = yield elements_1.next(), _a = elements_1_1.done, !_a; _d = true) {
                    _c = elements_1_1.value;
                    _d = false;
                    const item = _c;
                    yield __classPrivateFieldGet(this, _Controler_driver, "f").executeScript("arguments[0].scrollIntoView()", item);
                    yield item.click();
                    const slw = yield item.findElements(selenium_webdriver_1.By.css(":scope > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div"));
                    console.log(slw.length);
                    const title = yield slw[0].getText();
                    const empresa = yield slw[1].getText();
                    const regiao = yield slw[2].getText();
                    console.log(title.split("\n")[0]);
                    console.log(empresa);
                    console.log(regiao);
                    const currentUrl = yield __classPrivateFieldGet(this, _Controler_driver, "f").getCurrentUrl();
                    const url = new URLSearchParams(currentUrl);
                    const jobId = url.get("currentJobId");
                    console.log(jobId);
                    console.log("\n");
                    // await this.getDescriptionsInfos()
                    break;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = elements_1.return)) yield _b.call(elements_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    getRequirements() {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield __classPrivateFieldGet(this, _Controler_driver, "f").findElement(selenium_webdriver_1.By.xpath(__classPrivateFieldGet(this, _Controler_elements, "f").lista));
        });
    }
    getProperties() {
        console.log(__classPrivateFieldGet(this, _Controler_driver, "f"));
    }
}
_Controler_databaseConnection = new WeakMap(), _Controler_configs = new WeakMap(), _Controler_driver = new WeakMap(), _Controler_elements = new WeakMap(), _Controler_iaSDK = new WeakMap();
module.exports = Controler;
//# sourceMappingURL=Controler.js.map