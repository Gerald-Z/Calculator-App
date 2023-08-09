require("chromedriver");
const assert = require("assert");

const {Builder, By, Key, until} = require('selenium-webdriver');

const urls = 'http://127.0.0.1:5500/index.html';

let driver;

function click(id) {
  driver.findElement(By.id(id)).click();
}

async function ones() {
  driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(urls);

    let title = await driver.getTitle();
    assert.equal("Calculator", title);
    click("one");
    click("plus");
    click("one");
    click("equal");
    let value = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value, "2");
    click("minus");
    click("one");
    click("one");
    click("equal");
    value = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value, "-9");
  } finally {
    driver.quit();
  }
}





//ones();
console.log("Tested");
module.exports = ones;