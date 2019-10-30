const Selenium = require("selenium-webdriver");
const api = require('../services/api');

module.exports = class Webdriver {

    constructor() {
        console.log("Inicializando Seleium Driver...");
    }

    async initializingDriver(object) {
        let answerUrl, button, checkbox, question, options = [4];

        const driver = await new Selenium.Builder().forBrowser(object.browser).build();

        let { data: urlArr } = await this.api({
            type: "GET",
            url: "/trivia/group",
        });
        // await driver.get(object.url + url);
        await driver.get(object.url + urlArr[0]);

        // do {
        //     question = await driver.findElement(Selenium.By.className('quizQuestion')).getText();

        //     let { data: answer } = await this.api({
        //         type: 'POST',
        //         url: '/trivia/answer',
        //         data: { question }
        //     });

        //     for (let i = 1; i < 5; i++) {
        //         answerUrl = await driver.findElement(Selenium.By.xpath(`//*[@id="quizContainer"]/div[3]/div[${i}]/span[2]`)).getText();
        //         options.push(answerUrl)
        //     }

        //     if (options.includes(answer)) {
        //         let index = options.indexOf(answer);

        //         checkbox = await driver.findElement(Selenium.By.xpath(`//*[@id="quizContainer"]/div[3]/div[${index + 1}]/span[1]/a`));

        //         await checkbox.click();

        //         button = await driver.findElement(Selenium.By.id('nextQuestion'));
        //         await driver.wait(Selenium.until.elementIsVisible(button));
        //         await driver.wait(Selenium.until.elementIsEnabled(button));
        //         await button.click();
        //         j++;
        //     }

        // } while (j < 13);
    }

    // urlArr.forEach(async url => {


    // let j = 1;
    // });

    // driver.close();

    async api(obj) {
        let data = {};
        switch (obj.type) {
            case 'POST':
                data = await api.post(obj.url, obj.data);
                break;

            case 'GET':
                data = await api.get(obj.url);
                break;

            default:
                break;
        }
        return data;
    }

}