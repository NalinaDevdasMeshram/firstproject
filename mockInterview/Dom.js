// DOM (DOCUMENT OBJECT MODEL) whenever webpage loaded browser created the DOM of the page..
// with the help DOM  we can style, content, and attribute
// ******** set Attribute **************
// const div = document.querySelector("p");
// console.log(div);
// const para = div.getAttribute("id");
// console.log(para);

// const newpara = div.setAttribute("id", "newid");
// console.log(newpara);

//************** INSERT PROPERTIES ******************** */

const btnnew = document.createElement("button");
console.log(btnnew);
btnnew.innerText = "click Me!";
const data = document.querySelector("div");
console.log(data);
const res = data.after(btnnew);
// console.log(res);
