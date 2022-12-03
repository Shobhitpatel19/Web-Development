const loginLink = "https://www.hackerrank.com/auth/login" ;

const puppeteer = require('puppeteer')
const codeFile = require('./code')

let email = 'sigaje6611@lidely.com'
let password = 'Graduation@2025'
//let page;
console.log('Before');

//This is immediately invoked function
(async function () {
    try {
        let browserWillLaunch = await puppeteer.launch({
            headless :false,
            args : ['--start-maximized'],
            defaultViewport : null
        });

        let newTab = await browserWillLaunch.newPage();
        await newTab.goto(loginLink);

        await newTab.type("input[id = 'input-1']", email, {delay : 50})

        await newTab.type("input[id = 'input-2']", password, {delay : 50})

        await newTab.click('button[data-analytics="LoginPassword"]' , {delay : 50})

        await waitAndClick('a[data-attr1 = "algorithms"]', newTab)

        await waitAndClick('input[value = "warmup"]',newTab)

        let allQuestionArr = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
        console.log(allQuestionArr.length)

        await questionSolver(newTab, allQuestionArr[0], codeFile.answers[0])


    } catch (error) {
        console.log(error)
    }
})();


// let browserWillLaunchPromish = puppeteer.launch({
//     headless :false,
//     args : ['--start-maximized'],
//     defaultViewport : null
// })  // Launch returns a promish to open Browser

// browserWillLaunchPromish.then(function(browserInstance){
//     let newTabPromise = browserInstance.newPage()
//     return newTabPromise
//     // newPage method will open a new tab in the Browser
// }).then(function(newTab){
//     //It will open the website
//     page = newTab
//     let websiteWillBeOpenedPromise = newTab.goto(loginLink)
//     return websiteWillBeOpenedPromise
// }).then(function(){
//     //It will enter the email
//     let emailWillbeEnteredPromise = page.type("input[id = 'input-1']", email, {delay : 50})
//     return emailWillbeEnteredPromise
// }).then(function(){
//     //It will enter the password
//     let passwordWillbeEnteredPromise = page.type("input[id = 'input-2']", password, {delay : 50})
//     return passwordWillbeEnteredPromise
// }).then(function(){
//     //It will click the login button
//     let loginButtonClickPromise = page.click('button[data-analytics="LoginPassword"]' , {delay : 50})
//     return loginButtonClickPromise
// }).then(function(){
//     let algoSecClickedPromise = waitAndClick('a[data-attr1 = "algorithms"]', page)
//     return algoSecClickedPromise
// }).then(function(){
//     let warmUpSectionClickedPromise = waitAndClick('input[value = "warmup"]',page)
//     return warmUpSectionClickedPromise
// }).then(function(){
//     //$$ sign in puppeteer selects all the elements having the same css selector
//     //$ sign in puppeteer selects single element having the css selector
//     let allQuestionArr = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
//     return allQuestionArr
// }).then(function(TotalQuestions){
//     console.log("Number of Questions -> " + TotalQuestions.length)
//     let questionWillBeSolved = questionSolver(page, TotalQuestions[0], codeFile.answers[0])
//     return questionWillBeSolved
// })


//This function will wait for the selector to appear and if not,then it will reject
//Wait for the next page to open and click the given selector
function waitAndClick(selector, cPage){
    return new Promise(function(resolve, reject){
        let waitForModalPromise = cPage.waitForSelector(selector)
        waitForModalPromise.then(function(){
            let clickModal = cPage.click(selector, {delay : 100})
            //Clickable = button,input,anchor tag
            return clickModal
        }).then(function(){
            resolve()
        }).catch(function(){
            reject()
        })
    })
}


function questionSolver(page, question, answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClickedPromise = question.click()
        questionWillBeClickedPromise.then(function(){
            //Since the program is taking solved input because it also has the same class named .checkbox-input
            //Hence selecting editor will gurantee that new page is opened
            //After we can click custom input
            let waitForEditor = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return waitForEditor
        }).then(function(){
            let customInputClicked = waitAndClick('.checkbox-input', page)
            return customInputClicked
        }).then(function(){
            return waitAndClick('.input.text-area.custominput.auto-width', page)
        }).then(function(){
            return page.type('.input.text-area.custominput.auto-width', answer, {delay : 20})
        }).then(function(){
            let ctrlIsPressedPromise = page.keyboard.down("Control") // down method holds the button
            return ctrlIsPressedPromise
        }).then(function(){
            let AisPressedPromise = page.keyboard.press("A")
            return AisPressedPromise
        }).then(function(){
            let XisPressedPromise = page.keyboard.press("X", {delay : 100})
            return XisPressedPromise
        }).then(function(){
            let ctrlIsReleasedPromise = page.keyboard.up("Control") // up method unhold the button
            return ctrlIsReleasedPromise
        }).then(function(){
            let waitForCodeAreaPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return waitForCodeAreaPromise
        }).then(function(){
            let ctrlIsPressedPromise = page.keyboard.down("Control")
            return ctrlIsPressedPromise
        }).then(function(){
            let AisPressedPromise = page.keyboard.press("A", {delay : 100})
            return AisPressedPromise
        }).then(function(){
            let VisPressedPromise = page.keyboard.press("V", {delay : 100})
            return VisPressedPromise
        }).then(function(){
            let ctrlIsReleasedPromise = page.keyboard.up("Control") // up method unhold the button
            return ctrlIsReleasedPromise
        }).then(function(){
            let submitButtonClicked = page.click('.hr-monaco-submit', {delay : 200})
            return submitButtonClicked
        }).then(function(){
            resolve()
        }).catch(function(err){
            console.log(err)
        })
    })
}


console.log('After')