// Higher order functions are the functions that operate on other functions
// Higher order functions in JS are for arrays

// In simple words a  Higher order functions is a function that recieves a function as an argument 
// or returns the function as an output



//Map
// let arr = [2,4,5,8,9]
// let sqArr = arr.map(function(n){
//     return n*n
// })

// console.log("Original array  ",arr)
// console.log("Squared array  ",sqArr)

//print cube for all the array elements

//you have to use the map function to separate firstName and lastName
// let namesArr = ['Shivam Verma','Shubham Semrat','Ashish kumar']
// console.log(namesArr)

// let modifiedArr = namesArr.map(function(n){
//     let partsOfName = n.split(" ")
//     return partsOfName
// })
// console.log(modifiedArr)



//Question
const transactions = [1000,3000,4000,2000,-898,3800,-4500] //rupees(convert to dollar)
const inrToUsd = 74

let transactionsInDollar =  transactions.map(function(n){
    return (n/inrToUsd).toFixed(0)
})
console.log(transactionsInDollar)

//go to freeCodeCamp->javascript-> functional programming and do questions