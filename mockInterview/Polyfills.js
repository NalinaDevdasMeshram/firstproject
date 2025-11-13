let name = {
  Fname: "nalina",
  LastName: "meshram",
};

let printName = function (hometown, state, country) {
  console.log(
    this.Fname +
      " " +
      this.LastName +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
};
let printMyname = printName.bind(name, "nagpur");
printMyname("maharashtra", "india");

Function.prototype.Mybind = function (...args) {
  // this -> args
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};
let printMyname2 = printName.Mybind(name);
printMyname2("nagpur", "maharashtra", "india");
