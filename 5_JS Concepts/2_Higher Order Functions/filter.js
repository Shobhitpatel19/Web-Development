let arr = [2,3,6,5,8,10,8,9]

//// filter
//// filter return a new array containing elements that satisfies a particular condition 
//// if condition stands true,it will filter out those elements and discards other elements
////It works on boolean values where the condition is true or false 
// let evenNumberArray = arr.filter(function(n){
//     return n%2 == 0 //condition
//     // filter will work on boolean values and and returns the true values
// })

// console.log(arr) //doesn't disturbs the previous array
// console.log(evenNumberArray)


//Question
const transactions = [1000,3000,4000,2000,-898,3800,-4500] //filter the values which have profit
let profitArr = transactions.filter(function(n){
    return n>0
})
console.log(profitArr)