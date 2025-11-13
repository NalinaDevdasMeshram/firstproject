//  setTimeout(function(){
//  console.log("timer");
//  },5000)
//  function x(y){
//  console.log("x");
//   y();
//  }
//  x(function y(){
//   console.log("y");
//  })

function attachEventlistener() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("clicked here", count++);
  });
}
attachEventlistener();
