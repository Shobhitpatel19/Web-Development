let fs = require('fs')

console.log('Before')

// fs.readFile('f1.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('File Data -> ' + data)
//     }
// })

//Pending Stage
let promiseVariable = fs.promises.readFile('f1.txt')
//console.log(promiseVariable)

//Fullfilled and settled
promiseVariable.then(function(data){
    console.log("File Data -> " + data)
})

//Rejected and settled
promiseVariable.catch(function(err){
    console.log(err)
})

console.log('After')