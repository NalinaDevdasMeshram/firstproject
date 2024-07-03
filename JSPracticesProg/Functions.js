/* what is function statements*/
// a();
// b(); //  for b defined the undefined or trited like another variable till the reach the function after reach function 
// function a(){
//     console.log('a called');
// }
// a()
// what is function Expression*/
//  function xyz(){
//     return function x(){

//     }
//  }
    // function xyz(){

    // }
 
//   console.log(xyz());
 
/* anonsymous function */
// function (){
//     console .log('called c ') // syntax error ecama script said every function should the name 
// }

/*******CALLBACK FUNCTIONS**** */
//  setTimeout(function (){
//    console.log('timer');
//  },5000)
// function x(y){
//  console.log('X')
//  y();
// }

// x(function y(){
//    console.log('y');
// })

/**********Event Listener***********/
 function attachEventListener(){
   document.getElementById("ClickMe")
   addEventListener('click', 
      function xyz(){
      console.log('Button clicked', )
     });
      
 }
attachEventListener();
 
