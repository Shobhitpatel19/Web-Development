const puppeteer = require('puppeteer')

console.log('Before')

let browserWillLaunchPromish = puppeteer.launch({
    headless :false,
    args : ['--start-maximized'],
    defaultViewport : null
})  // Launch returns a promish to open Browser

browserWillLaunchPromish.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage()
    return newTabPromise
    // newPage method will open a new tab in the Browser
}).then(function(newTab){
    let websiteWillBeOpenedPromise = newTab.goto('https://www.pepcoding.com/#')
}).then(function(){
    console.log('Pepcoding Website Opened')
})

console.log('After')