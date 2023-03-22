let arr = [1,2,3,4]

let arr2 = [...arr]

// now the operations performed on arr does not affect arr2
// because of the spead operator
// spread operator consverts the array into strings

arr[2] = 23

console.log(arr)
console.log(arr2)