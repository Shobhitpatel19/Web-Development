let obj = {
    name: 'Adam',
    address: {
        country : 'USA',
        state : {
            stateName : 'New York',
            pincode : 123456
        }
    }
}

// if we do not use spread operator then both the objects will be changed
let obj2 = {...obj}

obj.name = 'Mark'

console.log(obj)
console.log(obj2)