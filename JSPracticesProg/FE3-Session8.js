// function paradami/style
// --------------- function----------
// function are nathing but first class object in js

// const obj ={}
// const arr =[]
// // function experssion 
// const sum = function (){
//     console.log("hello world")
// }

// // function declaration
// function sum1(){
//  console.log("Hello functional programming")
// }
// sum()
// sum1()

// // function  can  take a function as a parameter 
// function hello(fn){
//     fn();
// }
// hello(()=>{
//     console.log("hello world in hindi");
// })

//----------------- side Effect --------------------
//  sum function responsibility is to do SUM ONLY and nathing else
//  let z = 12;
// function sum (a, b){
//     z=99; // this function is doing a side effect 
//     console.log(a); // this is also side effect 
//     return a+b;
// }
//  console.log(sum(2,5))
//---------------------- pure/Inpure functions-----------------

// pure function do not have side effect 

// ---------- Inpure function ----------------

//  sum function responsibility is to do SUM ONLY and nathing else
// let z = 12;
// function sum (a, b){
//     z=99; // this function is doing a side effect 
//     console.log(a); // this is also side effect 
//     return a+b;
// }

// ----------- pure function -----------------------
// in pure function for the same input the output will be always same
// pure function do not go outside
//  function sum (a, b){
//     return a+ b;
//  }
//  sum (1,1)

// -------------------- Declarative Programming or Imperative programming-------------------------
    //   Imperative programming or produrece Programming
    // Question :[1,2,3,4,5,6];
    // Answer : [1,2,3,4,5,6];
    // you have dont things in step 
    // for loop
    // you take the value out of the  original array and double it 
   // pushed the value to the new array

   // are you responsible for this logic?? YES
   // you are focused on the implementation 
//    const Question = [1,2,3,4,5,6];
//     function doubleNunber(array){

//         const doubleArray =[];
//         for(let i=0; i<Question.length; i++){
//             const ele = Question[i];
//             doubleArray[i] = 2 * ele;
//         }
//           return doubleArray;
//     }
//      const Answer = doubleNunber (Question);
//      console.log(Answer);

     //------------Declarative Programming or produrecal Programming------------

    //  Question :[1,2,3,4,5,6];
    // Answer : [1,2,3,4,5,6];

    // function double(array){
    //     const  newArray = array.map((item)=>2* item)
    //     return  newArray;
    // }
    
    //-----------------Mutable Changing in English-------------

    //  const obj = {
    //     name:"nalina",
    //     class: 11,
    //  }
    //  obj.name = "Life" // mututing 

    //  const arr = [1,2,3,4,5,6]
    //  arr.push(6);// mututing 

    //**** in js or in functional programming /paradime DO NOT MUTUTE.

    //------------------- Immutability  Rules----------

    // const obj1 ={
    //     name:'nalina',
    //     class : 12,
    //     language :'js',
    //     phone :'chinese',
    //     address:{
    //         streetname:"wcl",
    //         pincode :12345
    //     }
    // };

    // you shold not change in obj1 as per the rules of function programming
//     const obj1copy ={
//         ...obj1,          // shallow copy create copy but not reference to orginal copy 
//                      // ********* whichever changes we made in shallow cpy if reflected in originalcopy          also 
//     };
//     obj1copy.name ='jeevan';
//     obj1copy.address.pincode=15000;
//     console.log(obj1, obj1copy);

//   const obj1copy2 = JSON.parse(JSON.stringify(obj1)) // deep copy (hacky method)
//   // you should  do not do this  actually 
      
//    console.log(obj1copy2)// -----deep create  copy and  reference to the orginal copy --------------

//---------------------HOF(Higher Order Function)-------------

// a function can accept a function as parameter..........
// a function can return a function as well...........
// function outer(fn){
//     console. log(fn)
//  return fn;
// }

// function sum (){
//     console.log("hello sum");
// }
// const functionReturn = outer(sum);
//  functionReturn ();

// In function paradime 
// 1.immutubility
// 2. pure function (you cant create the 100% of the s/w with pure function so max % is good)

// const add =(x,y)=>{
//     return x+y;
// };
// const sub =(x,y)=>{
//     return x-y;
// };

// const mult =(x,y)=>{
//     return x*y;
// };

// function calculateWithLogger(fn, x, y ){
//     // log activity logger server which is outside
//  return fn(x,y)
// }
// // 3 pure function 1 inpure function 

// console.log(calculateWithLogger(add, 1, 2 ))//3

// console.log(calculateWithLogger(sub, 1, 2 ))//-1

// console.log(calculateWithLogger(mult, 1, 2 ))//2