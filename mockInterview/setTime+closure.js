y; // function x() {
//   for (var i = 1; i <= 5; i++) {
//     // here we getting output 6 bez var refer same copy does not create new copy
//     console.log(
//       setTimeout(function () {
//         console.log(i);
//       }, i * 3000)
//     );
//   }
//   console.log("welcome to  javascript");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     //here we getting output 1 to 5 because of let has block it is create new copy everyt time
//     setTimeout(() => {
//       console.log(i);
//     }, i * 3000);
//   }
//   console.log("Set Timeout + Closure");
// }
// x();

// var b = function (param1) {
//   return function xyz() {};
// };
// console.log(b());

console.log("start");
function x() {
  console.log("I am function");
}
x();
console.log("end");
setTimeout(() => {
  console.log("call back");
}, 5000);

console.log("I am again come back");

setTimeout(() => {
  console.log("nalina");
}, 0);
