// Higher order function which take another function as an argument or return function form it is known as HOF ....
// proc: modurality, resuability, pure function, comprehensive function

// function x() {
//   console.log("welcome to Function Programmig");
// }

// function y(x) {
//   // y is HOF and X is call back function
//   x();
// }
// const radius = [1, 2, 3, 4];
// const calculateArea = function (radius) {
//   const Output = [];
//   for (let i = 0; i < radius.length; i++) {
//     Output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return Output;
// };
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));

// const calcualteDiameter = function () {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calcualteDiameter(radius));

//***************IMPLEMENTATION HOF**********************/
const radius = [1, 2, 3, 4];

const Area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const Diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, Area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, Diameter));
