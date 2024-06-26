const promiseGreeting = new Promise((resolve, reject) => {
    try {
      const greeting = "Hello Rohan !";
      resolve(greeting);
    } catch {
      reject(new Error("Cannot Greet!"));
    }
   });
   
   console.log("1. Greetings Start");
   
   promiseGreeting
    .then((greeting) => console.log("t1. ", greeting))
    .catch((err) => console.log("c1. ", err));
   
   console.log("2. Greetings End");
   