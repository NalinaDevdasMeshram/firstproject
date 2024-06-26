// console.log("hooooo");
const main = document.querySelector("body");
const crsr = document.querySelector(".cursor");
 main.addEventListener("mousemove", function(dets){
    console.log(dets)
    crsr.style.left =  dets.x+"px" ;
    // console.log(dets)
    crsr.style.top = dets.y+"px";
    console.log(crsr.style.top)
 })











 
