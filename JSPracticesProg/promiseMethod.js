// console.log("outcome");
// let p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // reject(("Error"));
//          resolve("value 1"); 
//     }, 1000);  
// })

// let p2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         reject(("Error"));
//         // resolve("value 2"); 
//     }, 2000); 
// })

// let p3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("value 3");
//        },3000)  
// })


// //----------------- promise wait for the all promise resolve return result in array form and any of the promise reject the error and remaining promise are ignore-----------------//
//  const promisePost1 = Promise.all([p1,p2,p3])
//  promisePost1.then(function(value){
//     console.log(value)
// });
// //------------------  wait for the all promise resolve and return thier result as an array of the object with status and value -----------
// const promisePost2 = Promise.allSettled([p1,p2,p3])
//  promisePost2.then(function(value){
//     console.log(value)
// });
// // -----------provide the first occures or error---------------
// const promisePost3 =  Promise.race([p1,p2,p3])
// promisePost3.then(function(value){
//     console.log(value)
// });
// // ----------------wait the all promise to fulfill (not reject) amd its result become the output  and if any of the promise not fulfill then its throw error---------------
// const promisePost4 =  Promise.any([p1,p2,p3])
// promisePost4.then(function(value){
//     console.log(value)
// });




