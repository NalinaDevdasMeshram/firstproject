//**********************Resizing the window************************** */
// const loggerfunc = () => {
//   console.count("throttling working");
// };
// loggerfunc();

// const throttle = (fn, limit) => {
//   let flag = true;
//   return function () {
//     // let context = this;
//     // let args = arguments;
//     if (flag) {
//       fn.apply(this, arguments);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };
// const betterloggerfunction = throttle(loggerfunc, 1000);
// window.addEventListener("resize", betterloggerfunction);
// const normalfun = () => {
//   console.log("this normal function");
// };
// window.addEventListener("resize", normalfun);

//****************Normal implementation****************** */

const expensive = () => {
  console.log("expensive the function");
};

const throttle = function (fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterExpensive = throttle(expensive, 300);
window.addEventListener("resize", betterExpensive);
