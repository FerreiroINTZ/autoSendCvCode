const {Builder} = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const Contoler = require("./dist/Controler")
const pino = require("pino")
const logger = new pino({
    timestamp: pino.stdTimeFunctions.isoTime,
    transport:{
        targets:[
            {target: "pino/file", options: {destination: "./logs/error_log.ndjson"}},
            {target: "pino-pretty", options: {destination: 0}},
        ]
    }
})

process.on("uncaughtException", async (e) =>{
    logger.error({err: e}, "Erro Fatal!")
    await fetch("https://ntfy.sh/automation_notification_nkgb", {method: "POST", body: "Erro Fatal com a Automacao!"})
    process.exit(1)
})
require("dotenv").config()

async function main(){

    const options = new chrome.Options()
    options.addArguments("user-data-dir=driver_dir",
        "--window-size=1000,800"
    )

    options.excludeSwitches("enable-automation")
    options.addArguments('--disable-blink-features=AutomationControlled')

    const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build()
    console.log("iniciado")

    if(!process.env.DATABASE_URL){
        throw new Error("Nesessario uma conexao com o bannco do dados!")
    }
    const dbConn = process.env.DATABASE_URL
    console.log(dbConn)
    const userConfigs = {
        site: "linkedin", 
        // searchWords: ["front-end", "back-end", "estagio", "full-stack"],
        searchWords: ["full-stack"],
        aiKey: process.env.AIAPIKEY, 
        cidade: "sumare, sao paulo", 
        keywords: ["front-end", "back-end", "full-stack", "node", "JavaScript", "React", "Nextjs", "Postgres", "TypeScript", "Nest", "Redis", "MongoDB"],
        aiRequired: false,
        otherAiCriterions: `A vaga pecisa ser no horario depois das 13:00, pois de manha tenho faculdade. Alem do mais, sou Junior, entao busco vagas que nao exija experiencia solida ou de varios anos. Se a vaga pedir um nivel de experiencia maior que de um junior a vaga nao podera ser perfeita. Se a vaga pedir alguma outra tecnologia fora das listadas em "keywords" como requisitos a vaga tambem nao podera ser perfeita. Alem do mais, as lista de itens do "keywords" sao somente "hard skills", as softskill podem desconsiderar na analise da paridade. Mdu nivel de ingles e o b1, entao vagas que exigem ingles avancado ou internacionais tambem nao pode ser perfeitas.`,
        paginas: 100,
        minQtdToAnalise: 25,
        soundsEnabled: false
    }

    const controler = new Contoler({dbConn, userConfigs, driver})
    process.on("uncaughtException", async (e) =>{
       console.log(e)
       console.log("erro!")        
       controler.playAudios("error")
       await fetch("https://ntf.sh/cv_automation-nk", {
        method: "POST",
        body: "Erro na captacao de vagas!"
       })
       driver.quit()
    })
    
    await controler.getWebSite()
    const slw = await controler.startToGetVacancies()
    // const slw2 = await controler.startTogetVacaciesV2()
    await driver.sleep(4500)

    driver.quit()
}

main()