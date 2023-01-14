const os = require('os')

console.log('System Architecture '+ os.arch()) // this prints your system's Architechture

console.log('Platoform ' + os.platform()) // this show's system Platform

console.log(os.networkInterfaces()) // Network Information

console.log(os.cpus()) // gives detail about your cpu