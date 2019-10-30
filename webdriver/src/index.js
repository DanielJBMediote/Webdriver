const Webdriver = require("./classes/Webdriver");


const driveTest = new Webdriver();

driveTest.initializingDriver({
    "browser": "firefox",
    "url": "http://freekigames.com/"
})