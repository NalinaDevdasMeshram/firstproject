// const obj ={           //object creation 
//     name:"nalina",
//     standard:12,
//  }
// console.log(obj, "open object")
//------------- schema/Blueprint--------------

// class person{ 
// classes is synctic suger 
//     // name;80078
//      standard;   // properties 
//     constructor(name, std){
//     // THIS -> this refence to the current Object ....context 
//          this.name = name;
//          this.standard = std;
//          }
//     canwalk(){
//         console.log ("yes i can Walk");
//      }
// }
// const nalinaobj = new person("nalina", 66);

// const naluobj = new person("nalu", 56);
// console.log(nalinaobj);
// console.log(naluobj);

// ..................constructor function............

// function Person(name, standard, notes){
//     this.name = name;
//     this.standard = standard;
//     this.notes = notes;
//     this.canwalk = function(){
//    console.log("yes I can walk");
//     }
// }
// const abcobj = new Person("nalina", 65, "noteofthe");
// const bcdobj = new Person("salu", 56, "najakdk");
// console.log(abcobj);
// console.log(bcdobj);

// ----------THIS KEYWORD---------------

// callsite 
//   function baz (){

//   }
//   const bazcopy = baz // is this  a call site ?? NO
//   baz(); // call site of baz ?? YES     

// ------RULE 1 Default Binding -------------

//  function foo(){
// // this -> context -> window object 
//  console.log(this); // this is window object
//  console.log(this.a);
// }
// var a = 12;
// foo();  // Default window object 
// is this call site ?? YES
// have I given any extra  information  AT CALL SITE ?? NO

//-----RULE 2 Implicity Binding ---------
 //------ example 1
//   var obj = {
//     a:1000,
//     foos:foo,
//   };

//   function foo (){
//     //  context this-> obj
//     console.log("hello");
//     console.log(this.a);
//     }
//   obj.foos(); // is this call site ?? YES
// have  I given any extra  information  AT CALL SITE ?? YES


//----------- Example 2 --------
//  ---------pitfall------
var obj = {
    a:111200,
    foo:foo,
};
  function foo() {
    console.log(this);
    console.log("hello");
    console.log(this.a)
} // o/p: window 
 // hello
 //

const fooCopy  = obj.foo //is this call site ?? NO

fooCopy(); // window
// //is this call site ?? YES

// // have  I given any extra  information  AT CALL SITE ?? NO

// ------- Example 3-----------

// var obj2 ={
//     a : 11000,
//     foo : foo,
// }
// var obj1 = {
//     a : 22,
//     obj2:obj2,
// }
// function foo(){
//    // contex -> this -> obj2
//     console.log("Hello");
//     console.log(this.a);
// }
// console.log(obj1.a); //22
// console.log(obj1.obj2.a); //11000

 obj1.obj2.foo(); // is this call site ?? YES
// have  I given any extra  information  AT CALL SITE ?? YES obj2 and not obj1

// --------- RULE 3 EXPLICITY BINDING----------

// 1. CALLL
// var obj ={
//     a : 12,
//     b : 1000,
// };
// function foo(param1, param2, param3){
// context -> this -> obj 
// console.log(obj, param1, param2, param3 ) // {a:12, b:1000}, 10,20, 50
//  console.log(this.a, this.b, param1, param2, param3 ) // 12, 1000, 10,20, 50
// }

//  foo.call(obj, 10,20,50); // foo.call means foo ();
// is this call site ?? YES
//  foo(1, 2, 3)//default // window //  undefined undefined 1, 2 , 3
//have  I given any extra  information  AT CALL SITE ?? NO
//  have I given any instruction ?? YES 

//2.Apply ....
// foo.apply(obj, [1,2,3,4]) // 12, 1000, 10,20, 50

//3.Binding

// let bar = foo.bind(obj, 1, 2, 3);

// bar();


// ******************* Bind Pratical example***********

// const timer = {
//     currentTime :0,
//     dumbFunction : function (){
//         console.log("Hello");
//     },
//     showTime : function (){
//         console.log(this.currentTime, "current Time");
//     },
//     addTen : function (){

//         // context -> this -> window
//         console.log(this, "addTenfault")
//         this.currentTime += 10;
//         this.showTime();
//     }
// };

// const addTenFunctionCopy = timer.addTen.bind(timer, 3333);
// //  addTenFunctionCopy() //  call site function call 
// const functionHello = function (){
//     console.log("hellossss");
// }

// setTimeout (addTenFunctionCopy, 5000);

// //  browser file 
// function setTimeout (fn, delay){
// //  weird shit..... wait for delay(5s)

// fn ()// is this a call site ?? Yes
// //have  I given any extra  information ?? No
// // default binding // window object 
// }

// -------- RULE 4 -----------New Keyword------------

// function Car(model, color){
//     this.model = model;
//     this.color = color;
//    this .start = function (){
//     console.log(this.model, " car start mode")
//    }
// };

// const ferrari = new Car("V1", "red"); // is this a call site ?? YES 
// yes is a way  you have give some information i.e  new Keyword
// new keywors create a blank object {} which is a context of class and constructor function 

// -------------- RULE PREDEDENCE ------ Increasing Power

// default binding ---> Implicity -----> Explicity ----> New 

// function foo(something){
//     this.a = something;
// }

// var obj1={
//  a:22,
//  foo : foo,
// }

// var obj2={
//     a:99,
    
//    }
//    obj1.foo.call (); // is this a call site ?? YES
   // have  I given any extra  information  AT CALL SITE ?? YES
   // have i given any instruction ?? YES



   //-------------Activity------------

//  function User (fullName){
//  this.fullName = fullName;
//  this.friendList = [];

//  this.addFriend = function(friendName){
//  this.friendList.push(friendName);
//    }

//    this.printFriendList = function (){
//     console.log(this.friendList);
//    };

//    this. findMutualWith = function (userObj){
//  const {friendList} = userObj; 
//  console.log(userObj, " user obj begun", friendList)
//  // where i can find the mutual friend ?? nalinuser
//  // how i can get nalinuser here ??
//    }
//  }
//  const nalinaUser = new User ("nalina");
//  nalinaUser.addFriend("nali");
//  nalinaUser.addFriend("radhika");
//  nalinaUser.addFriend("rahul");
//  nalinaUser.addFriend("anamika");
//  nalinaUser.addFriend("rushba");
//  nalinaUser.addFriend("ayushi");
// //  console.log(nalinaobj);

// const saurabhUser = new User ("saurabh");

//  saurabhUser.addFriend ("nalinalia");
//  saurabhUser.addFriend ("anamika");
//  saurabhUser.addFriend ("rushba");
//  saurabhUser.addFriend ("ayushi");

// console.log(nalinaUser);
// console.log(saurabhUser);
// console.log(nalinaUser.findMutualWith(saurabhUser));
