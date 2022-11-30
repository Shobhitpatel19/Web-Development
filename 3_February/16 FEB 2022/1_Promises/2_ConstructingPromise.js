// Constructing a promise

let myPromise = new Promise(function(resolve,reject){
    //promise body(Your code goes here)
    let a = 'pepcoders'
    let b = 'Pepcoders'

    if(a===b){
        resolve('The values are Equal')
        //resolve function is responsible for fulfillment of promise
    }
    else{
        reject('NO, The values are Not Equal')
    }
})


myPromise.then(function(result){
    console.log(" "+result)
})

myPromise.catch(function(result){
    console.log(" "+ result)
})

// OUTPUT -> NO, The values are Not Equal