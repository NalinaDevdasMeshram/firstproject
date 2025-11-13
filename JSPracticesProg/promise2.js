// const promiseGreeting = new Promise((resolve, reject) => {
//     try {
//       const greeting = "Hello Rohan !";
//       resolve(greeting);
//     } catch {
//       reject(new Error("Cannot Greet!"));
//     }
//    });

//    console.log("1. Greetings Start");

//    promiseGreeting
//     .then((greeting) => console.log("t1. ", greeting))
//     .catch((err) => console.log("c1. ", err));

//    console.log("2. Greetings End");

const promiseGreetingData = new Promise(function (resolve, reject) {
  console.log("let's get started..!");
  try {
    const greeting = "welcome to promise";
    resolve(greeting);
  } catch {
    reject("something went wrong..!");
  }
});
console.log("called the promiseGreetingData");
promiseGreetingData
  .then((greet) => {
    console.log("called the greeting", greet);
  })
  .catch((rej) => {
    console.log("called the reject", rej);
  });
console.log("handle the reject promise");
