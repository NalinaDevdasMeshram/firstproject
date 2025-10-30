// empty js file is called as the shortest program in js

// var x = 1;
// console.log(x);
// function getName() {
//   var x = 10;
//   console.log(x);
//   console.log(window.x);
// }
// console.log(x);
// console.log(window.x);
// console.log(this);
// console.log(this.x);

//**********************SCOPE****************************** */
// What is the scope
// Answer : scope means where we can specified the function and variable in the code
// LEXICAL : lexical means heirarchy or sequence

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
console.log(b);
