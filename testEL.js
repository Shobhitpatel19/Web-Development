// let flag = true;

// while(flag){
//     console.log("--------Waiting----------")
// }

// setTimeout(() => {
//     flag = false;
// },2000)


//SOLUTION
let intervalID = setInterval(()=>{
    console.log('-------waiting--------')
})

setTimeout(()=>{
    clearInterval(intervalID)
},2000)