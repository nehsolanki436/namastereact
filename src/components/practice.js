//This file is created for practicing promises in javascript in more depth
//Promises is an object which represents the eventual completion or rejection of asynchronous operations.
//Promises have 3 state Pending, Reject, and Fulfilled.
//Promises are executed only once.

const cart=["shirt","pant","kurta"];

const promise=createOrderApi(cart);

promise.then((orderId)=>{console.log(orderId); return orderId;})
.then((orderId)=>{return paymentInfoDetails(orderId)})
.then((paymentInfo)=>console.log(paymentInfo))
.catch((err)=> {console.log(err.message)})
.then(()=>console.log("I will always be called"))
;


function validatecart(cart)
{
  return true;
}

function createOrderApi(cart){
   const pr=new Promise((resolve,reject)=>{
                           if(!validatecart(cart)){
                              const err=new Error("Cart Validation has failed");
                              reject(err);
                           }
                           const orderId="12345";
                           if(orderId){
                              resolve(orderId);
                           }
                        });
       return pr;                    
}

function paymentInfoDetails(orderId)
{
    return new Promise((resolve,reject)=>{
        if(orderId)
        {
            resolve(orderId+" payment successful");
        }
    });
}


// async and await
const p =new Promise((resolve,reject)=>{
    resolve('Resolved!');
    reject('Rejected');
})




