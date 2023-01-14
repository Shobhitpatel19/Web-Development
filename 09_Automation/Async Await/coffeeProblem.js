function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      resolve("Order for coffee");
    } else {
      reject("Order cannot be placed");
    }
  });
}

function processOrder(order) {
  return new Promise(function (resolve) {
    console.log("Your Order is being prepared");
    resolve(`${order} served`);
  });
}

//Promisified solution -->
// placeOrder("coffee")
//   .then(function (demand) {
//     console.log(demand);
//     let orderIsProcessed = processOrder(demand);
//     return orderIsProcessed;
//   })
//   .then(function (orderIsProcessed) {
//     console.log(orderIsProcessed);
//   }).catch(function(err){
//     console.log(err)
//   });
//   This code uses promise hell.async await removes the promise hell.


//Async await solution -->
async function serveOrder(){
    try{
        let orderRecieved = await placeOrder('coffee')
        console.log(orderRecieved)  //order For Coffee
        let processedOrder = await processOrder(orderRecieved)
        console.log(processedOrder)  //Your Order is being Prepared // Order for Coffee Served                                
    }catch(error){
        console.log(error)
    } 
}
serveOrder()