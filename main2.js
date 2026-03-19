const {Builder} = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const Contoler = require("./dist/Controler")
require("dotenv").config()

async function main(){

    const options = new chrome.Options()
    options.addArguments("user-data-dir=driver",
        // "--start-maximized"
    )

    options.excludeSwitches("enable-automation")

    const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build()
    console.log("iniciado")

    const dbConn = "posgresql://nk_gb7:nk@localhost:5432/cvautomation"
    const userConfigs = {site: "linkedin", searchWords: ["front"], aiKey: process.env.AIAPIKEY, cidade: "sumare, sao paulo"}

    const controler = new Contoler({dbConn, userConfigs, driver})
    
    // await controler.getWebSite()
    // const slw = await controler.startToGetVacancies()
    await driver.sleep(4500)

    driver.quit()
}

main()