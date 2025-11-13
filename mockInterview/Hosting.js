// ***************Normal function************
// var x = 10;
// function getName() {
//   console.log("welocome to hoisting concept");
// }
// getName();
// console.log(x);

// ************** hoisting****************
// what is the hoisting in the js
// Answer : hoisting is the phenomenon where the variable and function declaration move to the top of the their before code execution

// getName();
// console.log(x); // undefined  because of declaration can move top of their scope

// var x = 10;
// function getName() {
//   console.log("welocome to hoisting concept");
// }

//*********************2nd example**************************/
// console.log(getName);
// var x = 10;
// function getName() {
//   console.log("welocome to hoisting concept");
// }
// console.log(getName);

//*************************3rd*********************/
// getName(); // error getName is not function  after that remaining code will not executed
// console.log(x);
// console.log(getName);
// var x = 10;
// var getName = () => {
//   // getName is not a function it is behave like variable
//   console.log("welocome to hoisting concept");
// };

//******************************* LET AND CONST VARAIBLE HOISTING************************************/

// let and cost variable also hoisting they are hoisted in the temporary Dead Zone

// What is temporary dead zone
//  TDZ means it is time since the  variable hoisted and till it is the  initialized  the value time between that is known TDZ

// let a = 10;
// console.log(a);
// var b = 100;
console.log("hoisting in the tdz");
// let a = 10;
// console.log(a);
// let b = 100;
let a = 10;
var b = 100;
var b = 1000;
const c = 15;
