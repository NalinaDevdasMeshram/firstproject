// function name(){

// }
// console.log(typeof name)

// class abc{

// }
// console.log(typeof abc)

// arr = [1,2,3,4,5]
// console.log(typeof arr)

// alert("Are???")
// *********************shallow copy **************************
// if we make any change in the copy object it will reflect the original object  
// const arn = ['mango', 'apple', 'grapes', 'banana']

// const myfruit = arn;
// myfruit.push('deads');
// myfruit.push('strawberry');

// console.log(myfruit);
// console.log(arn);


// const person ={
//     name:"Nalina",
//     lastName:"Meshram",
//     address:{
//         state:'maharashtra',
//         city:'Nagpur',
//       pincode:124055,
//     }
// };
// console.log(person);
// person.address.city='wcl';

// const person2 ={
//     name:"Nalina",
//     lastName:"Meshram",
//     address:{
//         state:'maharashtra',
//         city:'Nag',
//       pincode:124055,
//     }
// };
//shallow copy 
// const originalObject = { 
//     a: 1,
//     b: { 
//         c: 2,
//      } 
//     };  
// const shallowCopy = {...originalObject};  
//  shallowCopy.a = 4;
//  shallowCopy.b.c = 20;
//   console.log(originalObject);
//   console.log(shallowCopy);

//   originalObject.a = 10;
//   console.log(originalObject);

//************** call () ***********************
// we the number of argument then we can use calll
//  const Avinash={
//   name : "avi",
//   age :30,
//  }
// function greet (name, age){
      
//     console.log(`hello my name is ${this.name} and i am ${this.age} age old`)
//     }
//     greet.call(Avinash, 30)

   //************Apply()************ */ 
  //  we unsure about the argument then we use apply  
// const Avinash={
//       name : "avi",
//       age :30,
//      }
//     function greet(){
//         console.log(`hlo my name is ${this.name} and i am ${this.age} years old`)
//     }
//         greet.apply(Avinash)
// ***************splice*********************
//  const result = [1,2,5,8,10,12]

//   result.splice(2, 1 ,23,24);
 
//   console.log(result)
  //************slice************/
  // const res = [1,5,8,9,2,3,7,10];
  // res.slice (2,5);
  // res.includes(2)
  // console.log(res);
  // console.log(res);

// const ticket = false;
// let promise = new Promise(function(resolve, reject){
//   if(ticket){
//     const response ={
//       message:"ticket is confirmed",
//     }
//     resolve(response)
//   }else{
//     const responses={
//       message:"ticket is not confirmed",
//     }
//     reject(responses)
//   }
// })

// promise.then(function(success){
//   console.log(success.message)
// }).catch(function(rejection){
//   console.log(rejection.message)
// })
// let Name={
// firstName:"nalina",
// lastName:"meshram",
// }
// let fullName=function(city){
//   console.log(this.firstName +" "+ this.lastName+" "+city+"")
 
// }
// fullName.call(Name,"mumbai");
// //function borrowing 
// const Name1={
//   firstName:"pornima",
//   lastName:"meshra",
// }
// fullName.apply(Name1,["malat"]);
// fullName.bind(Name1, "malar")

// for(let i=0; i<10; i++){
//   setTimeout(function(){
//     console.log(i);
//   },4000);
// }

  // console.log("start")
  // setTimeout(function(){
  //   console.log("settimeout")
  // },0)
  // Promise.resolve().then(function(){
  //   console.log("promise1")
  // }).then(function(){
  //   console.log("promise2")
  // });

  // console.log("end");

  // let arr =[1,2,3,4,5]
  // let a=arr[arr.length-1];
  // let b = arr[0];
  //  arr[0] = arr[arr.length-1];
  //  arr[arr.length-1] =b;

  //  console.log(arr);
//  let a = 10;
//  if(a===10){
//   const b = 20;
//   if(b==20){
//     let c =30;
//     console.log(a)
//     console.log(c)
//   }
//   console.log(b)
//  }

// function parent(){
//   const msg = " i am parent function";
//   function child(){
//     console.log(msg + " i  am child function")
//   }
//    return child();
// }
//  const result = parent ();
//   return result;

   
// console.log(x);
// var x =10;

//  function abd (a, b){
//    return a*b;
//  }
//   function multi(a){
//     return function(b){
//       return abd(a, b)
//     }
//   }
//   const abdb = multi(2);
//    console.log(abdb(4))

// const obj={
//   a:10,
//   b:{
//     c:50,
    
//   }
// }

//  const obj1= {...obj}
//   obj1.b.c = 4;

//   console.log(obj)
//   console.log(obj1)

//   const obj2={ a:10, b:{ c:50,} }
//   const obj4 = JSON.parse(JSON.stringify(obj2))
//   console.log(obj2)
//   console.log(obj4)

//   var x = 10;
//   console.log(typeof NaN)
// let datas ="https://jsonplaceholder.typicode.com/posts";
//  let promisef = fetch(datas)
//  promisef.then(function(rowJSONData){
//   rowJSONData.json().then(function(fata){
//     console.log(fata)
//   })
//  }).catch(function(){
//  console.log(wrongd)
//  })

//  async function adb(){
//  try
//  {
//   let dta = await fetch("https://jsonplaceholder.typicode.com/posts");
//  let res = await dta.json();
//   console.log(res)
// }catch(error)
// {
//  console.log("something went thr wirnr")
// }
//  }
//  adb()

// let dat = "https://jsonplaceholder.typicode.com/posts";
// let fta = fetch(dat);
// fta.then(function(wro){
//   wro.json().then(function(fata){
//     console.log(fata)
//   })
// })

// function curr(c){
//   return function(d){
//     return c+d
//   }
// }
//  const aff = curr(20);
//   const pf = aff(2);
//   console.log(pf)

// let str ="racecar";
 
//  console.log(str.split("").reverse().join(""))

// function parent(){
//   let message = "I am parent";
//   function child(){
//     console.log(message + "I am child")
//   }
//   return child()
// }
//  const result = parent();
// return result();

 
  