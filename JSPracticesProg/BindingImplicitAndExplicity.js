/*************Call Site******************* */
// function greeting() {
//   console.log("Hi, How are you");
// }
// greeting(); // call site

/***********otherExample********** */
// function a() {
//   console.log("Form function a");
// }

// function b() {
//   console.log("form function b");
//   a(); // call site from function a
// }
// b(); // call site from function b

// const c = a;
/*****************Default Binding******************* */
// function greeting() {
//   console.log("Context of this is", this);
//   console.log(this.greet);
// }
// var greet = "how are you";
// greeting(); // at this call site there is no implicit or explicit binding

// *****************Implicit Binding*******************

var status = "I am React Learn";

function intro() {
  console.log(this.status);
}

const mentors = {
  name: "Nalina Meshram",
  status: "I am talk about React",
  introduction: intro,
};
mentors.introduction();
