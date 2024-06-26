// set time out 
// var i = 1;
//  function x(){ // here we getting output 6 bez var refer same copy does not create new copy
//         for(var i=1; i<=5; i++){
//         setTimeout(function(){
//            console.log(i);
//         }, i*1000)
//      }
//  console.log('welcome to Settimeout')
// }
// x();


// var i = 1;
//  function x(){ // let have the block scope
//         for(let i=1; i<=5; i++){
//         setTimeout(function(){
//            console.log(i);
//         }, i*1000)
//      }
//  console.log('welcome to Settimeout')
// }
// x();


var i = 1;
 function x(){ // 
    
    
         
        for(var i=1; i<=5; i++){
            function close(i){ // refer the new momery l0catuon very time
               setTimeout(function(){
                    console.log(i);
                 }, i*1000)
              }
              close(i)
            }
        
 console.log('welcome to Settimeout')
}
x();