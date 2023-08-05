require("chromedriver");
const assert = require("assert");

const {Builder, By, Key, until} = require('selenium-webdriver');

async function onePlusOne() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/webpage.html');

    let title = await driver.getTitle();
    assert.equal("Calculator", title);
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('plus')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.className('equal')).click();
    let value = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value, "2");
  } finally {
    await driver.quit();
  }
}

async function ones() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/webpage.html');

    let title = await driver.getTitle();
    assert.equal("Calculator", title);
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('plus')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.className('equal')).click();
    let value = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(value, "2");
    await driver.findElement(By.id('plus')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.id('one')).click();
    await driver.findElement(By.className('equal')).click();
    let valueTwo = await driver.findElement(By.id('displayed')).getAttribute("value");
    assert.equal(valueTwo, "13");
  } finally {
    await driver.quit();
  }
}


onePlusOne();
ones()