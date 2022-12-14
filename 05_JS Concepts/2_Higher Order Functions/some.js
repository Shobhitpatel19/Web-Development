//Some : Condition Check : To get true or false based on a condition
//It will return true if 1 or more elements satisfies the condition


// const transactions = [-1000,-3000,-4000,-2000,-898,-3800,-4500]

// let anyDeposit = transactions.some(function(n){
//     return n>0
// })

// console.log(anyDeposit)  //false

const transactions = [-1000,-3000,-4000,2000,-898,-3800,-4500]

let anyDeposit = transactions.some(function(n){
    return n>0
})

console.log(anyDeposit) //true