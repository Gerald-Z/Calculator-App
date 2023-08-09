require("chromedriver");
const assert = require("assert");

const {Builder, By, Key, until} = require('selenium-webdriver');

const urls = 'http://127.0.0.1:5500/index.html';

let driver;

function click(id) {
  driver.findElement(By.id(id)).click();
}

async function multiply() {
  driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(urls);

    let title = await driver.getTitle();
    assert.equal("Calculator", title);
    click("three");
    click("multiply");
    click("four");
    click("equal");
    let value = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value, "12");

    click("divide");
    click("one");
    click("two");
    click("equal");
    let value_two = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value_two, "1");

  } finally {
    await driver.quit();
  }
}

//multiply();
console.log("Multiplied");

module.exports = multiply;