// let multiply = function(x, y){
//  console.log (x*y);
// }
// const multi = multiply.bind (this, 3);
// multi(5);

// const multione = multiply.bind (this, 2);
// multione(5);

// var babyAnimal = function (a){
//  return function (b){
//  var result ='i love '.concat(a).concat(' and ').concat(b);
//    return result;
//   };
// };
//  var babykoakal = babyAnimal('koalas');

//  console.log( babykoakal('elephants'));
//  console.log(babykoakal('Tiger'));
//   console.log(babykoakal('Dog'));
//   console.log(babykoakal('Deer'));

// function multiply(a, b){
//     return a*b;
// }
// function curryMultiply(a){
//     return function (b){
//         return multiply(a, b)
//     }
// }
//   const double = curryMultiply(2);
//   console.log(double(5));

//   const doubleM = curryMultiply(3);
//   console.log(doubleM(5));

/* what is Curry :- curry is a technic where multiple function pass as argument to us */

function multi(x, y) {
  return x * y;
}
function twonumber(x) {
  return function (y) {
    return multi(x, y);
  };
}

const double = twonumber(2);
console.log(double(6));
