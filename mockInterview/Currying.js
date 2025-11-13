//*****************what is currying*******************
// currying transforming a function that takes multiple argument into sequnence of function each take single

// argument. this allow partial application of argument where we can provide some and reset are later

/**************normal function*************** */

// function add(x, y, z) {
//   return x + y + z;
// }

// console.log(add(1, 1, 3));

/**********************using Currying ******************** */

// function add(x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// }
// console.log(add(1)(2)(3));
//**************************using Arrow********************** */

const add = (x) => (y) => (z) => x + y + z;
console.log(add(1)(2)(3));
