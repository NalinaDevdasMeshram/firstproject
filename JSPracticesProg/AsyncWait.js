// const fetchData = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//   const res = response.json();
//   console.log(res);
// };
// fetchData();

// async function fetchResult() {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     const result = await response.json();
//     console.log(result);
//   } catch (e) {
//     console.log("something went wrong", e.message);
//   }
// }
// fetchResult();

var foo = function (name) {
  this.myName = name;
  this.tellMyName = function () {
    console.log(this.myName);
  };
};

var fooObj1 = new foo("James");
fooObj1.tellMyName(); // will print James
var fooObj2 = new foo("Mike");
fooObj2.tellMyName();
