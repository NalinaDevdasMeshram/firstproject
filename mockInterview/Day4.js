const heading = document.querySelector("body");
heading.style.background = "green";
const heA = document.querySelector("#head");
heA.style.textAlign = "center";
heA.style.fontSize = "50px";
heA.style.background = "lightblue";
heA.style.fontStyle = "italic";
// console.log(heA);

// const btn = document.querySelector("#btn1");
// btn.style.background = "Blue";
// btn.style.fontStyle = "italic";
// const param = document.querySelector("p");
// param.style.backgroundColor = "yellow";
document.addEventListener("click", function () {
  document.querySelector("#head").textContent = "Nalina you have to work Hard";
});

document.addEventListener("mouseover", function () {
  document.querySelector("#head").background = "red";
});
