var con = document.querySelector("#container")
var icons = document.querySelector("i");

con.addEventListener("dblclick", function(){
    icons.style.transform ="translate(-50%, -50%)scale(1)";
    icons.style.opacity = 0.8;
    icons.style.color ="red";
setTimeout(function(){
    icons.style.opacity = 0;
    
},2000)

setTimeout(function(){
    icons.style.transform ="translate(-50%, -50%)scale(1)";
    
},2000)
})