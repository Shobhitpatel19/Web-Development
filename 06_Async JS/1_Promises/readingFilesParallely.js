const fs = require('fs')

console.log('Before') 
//Reading files randomly using promises  //we can also read files randomly with the help of callback functions
let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function cb(data){
    console.log('File Data -> ' + data)
}

//These functions will go into microTask queue and will execute Randomly
f1p.then(cb)
f2p.then(cb)
f3p.then(cb)



console.log('After') 
//Try JS Visualizer