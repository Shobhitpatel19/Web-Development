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

//let obj2 = {...obj , address: {...obj.address}, state : {...obj.address.state}}

let obj2 = JSON.parse(JSON.stringify(obj))  //deep copy

obj.name = 'Mark'

// shallow copy
obj.address.country = 'India'
obj.address.state.pincode = 22222


console.log(obj)
console.log(obj2)