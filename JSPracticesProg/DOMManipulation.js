// const listLi = document.getElementsByTagName("ul");
// for(let i=0; i<listLi.length; i++){
//  listLi[i].style.background ="green";
//  listLi[i].style.boxShadow = "5px 5px 5px";
//  listLi[i].style.fontSize ="20px"
// }
//  const Listli = document.getElementsByClassName("list")
//    for(let i=0; i<Listli.length; i++){
//      Listli[i].style.borderLeft = "5px solid red";
//   }
// const listele = document.getElementById("order-list");
//  listele.style.background = "blue";
// listele.style.fontSize = "20px";
 
// const ele = document.querySelectorAll(".list");
// for(let i=0; i<ele.length; i++){
//  ele[i].style.textDecoration ="underline";
//  ele[i].style.listStyle ="none";
//  ele[i].style.fontStyle ="italic";
// }

// const list1 = document.querySelector("#lit")
// console.log(list1)
// list1.innerHTML =  `<li>item-0</li> ${list1.innerHTML}`
// // *****************  how to add element in the dom**********************
// //  follow the 4 step stregety 
// // 1. store the reference of the element
// // 2. create the new element
// // 3. add the content to it
// // 4. append it
 
//  const ele1 = document.createElement("li");
//  console.log(ele1);
//  ele1.textContent ="item -6";
//  lit.append(ele1);

//  const ele2 = document.createElement("li");
//  ele2.textContent = "item-7";
//  list1.appendChild(ele2);
  
//  const item = lit.removeChild(ele2);
//  const item2 = lit.removeChild(ele1);

 const hosting = document.querySelectorAll(".list");
  for(let i=0; i<hosting.length; i++){
    hosting[i].style.background ="purple";
    hosting[i].style.fontStyle = "italic";
    hosting[i].style.color = "orange"
  }
  const element = document.querySelectorAll(".ul-list")
  for(let i=0; i<element.length; i++)
  {
    element[i].style.background = "green";
    element[i].style.textDecoration = "underline";
  }
  const itemzero = document.createElement("li");
   itemzero.textContent = "item -6";
   list2.append(itemzero);


   const firstitem = document.createElement("li");
   firstitem.textContent = "item - 7";
   list2.append(firstitem);

    const res1 = list2.removeChild(itemzero);
    const result = list2.removeChild(firstitem);
    console.log(result);

    const additem = document.querySelector("#list3")
    console.log(additem.innerHTML);
    additem.innerHTML = `<li>item -0</li>${list3.innerHTML}`
     