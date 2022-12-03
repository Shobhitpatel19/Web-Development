
//find -> returns the first value that satisfies the condition

const transactions = [1000,3000,4000,2000,-898,3800,-4500]

const findWithdrawl = transactions.find(function(n){
    return n<0
})

console.log(findWithdrawl)