// set time out
var i = 1;
function x() {
  // here we getting output 6 bez var refer same copy does not create new copy
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("welcome to Settimeout");
}
x();

// var i = 1;
//  function x(){ // let have the block scope
//         for(let i=1; i<=5; i++){
//         setTimeout(function(){
//            console.log(i);
//         }, i*1000)
//      }
//  console.log('welcome to Settimeout')
// }
// x();

// var i = 1;
//  function x(){ //

//         for(var i=1; i<=5; i++){
//             function close(i){ // refer the new momery l0catuon very time
//                setTimeout(function(){
//                     console.log(i);
//                  }, i*1000)
//               }
//               close(i)
//             }

//  console.log('welcome to Settimeout')
// }
// x();

/* what is setTimeOut :- setTimeout is a fixed time daily accept the two parameter first one is call back function and second is milisecond */
// function x(){
//    var i = 1;
//    for(let i=-1; i<=5; i++){  // let focus have the block
//     setTimeout(function(){
//        console.log(i)
//     },i*1000)
//    }
// }
// x();

// function y() {
//   var i = 1;
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
// }
// console.log("welcome to javascript");
// y();
