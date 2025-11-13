"use strict";
// ************************what is this Keywords:********
//  this keyword point to the object executing the current function
// **************inside the global scope ********************
//   inside the global scope it is reference to the global object  its depend on where we the js runtime
console.log(this);

// *********************inside the function *************************
//  inside the function depends on the strict and non- stirct mode
// non-strict => window
//  strict => undefined
function x() {
  console.log(this);
}
x();
// non-strict mode is the (substitutions)
// if the value in the non strict mode undefined or null it replce by global object

//  *********** inside this depend on the how to called *****************

x(); // undefined
window.x(); // global object

//***********inside the object method ******* */

const obj = {
  name: "nalina",
  last: "meshram",
  printFullname: function (city) {
    console.log(this.name + " " + this.last + " " + city);
  },
};
obj.printFullname("nagpur");

const obj1 = {
  name: "pornima",
  last: "meshra",
};
obj.printFullname.apply(obj1, ["mumbai"]);
obj.printFullname.bind(obj1);
//  ********************inside the Arrow ***********************
//   const objec={
//      x:10,
//      a:()=>{
//          console.log(this);
//      }
//   }
//   objec.a();
