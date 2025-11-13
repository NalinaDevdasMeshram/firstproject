// // give second argument true then it will behave like event caputer from parent to child (EVENT CAPTURING)
// // give second argument false then it will behave like event bubbling from child to parent  (EVENT BUBBLING)

// document.querySelector("#container").addEventListener(
//   "click",
//   () => {
//     console.log("I am Container");
//   },
//   true
// );

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent");
//   },
//   true
// );
// // e.stopPropagation(); // it is used for stop event
// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("parent");
//   },
//   console.log(false)
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child");
//   },
//   true
// );

document.querySelector("#container").addEventListener(
  "click",
  () => {
    console.log("I am container");
    container.style.background = "yellow";
  },
  false
);

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("I am Grandparent");
    grandparent.style.background = "green";
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("I am parent");
    parent.style.background = "brown";
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("I am child");
    child.style.background = "blue";
  },
  false
);
