//***********CLOSURE********* */
// Function alone with lexical environment from closure;

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

function parent() {
  let mgs = "I am Parent function";
  function child() {
    console.log(mgs + "I am child function");
  }
  return child();
}
const result = parent();
result;
