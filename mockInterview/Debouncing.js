let counter = 0;
const getData = () => {
  console.log("getData....", counter++);
};

const debouncing = function betterFunction(fn, d) {
  let timer;
  return function () {
    // let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(); //(this, arguments) This ensures that the debounced function receives any arguments passed to                 it                   and keeps the correct context (this).
    }, d);
  };
};
const betterFunction = debouncing(getData, 300);
