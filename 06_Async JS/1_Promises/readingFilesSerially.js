const fs = require('fs')

let f1p = fs.promises.readFile('f1.txt')



function cb(data){
    console.log("File Data -> " + data)
    let f2p = fs.promises.readFile('f2.txt')
    //f2p.then(cb2)
    return f2p
}

function cb2(data){
    console.log("File Data -> " + data)
    let f3p = fs.promises.readFile('f3.txt')
    //f3p.then(cb3)
    return f3p
}

function cb3(data){
    console.log("File Data -> " + data)
}


//Improvement -> 
f1p.then(cb).then(cb2).then(cb3).catch(function(err){
    console.log(err)
});