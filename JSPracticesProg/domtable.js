const head = document.querySelectorAll(".heading");
for(let i=0; i<head.length; i++){
 head[i].style.fontSize ="25px";
 head[i].style.background ="orange"
head[i].style.color="green"; 
}

const ele = document.querySelectorAll(".even");
for(let i=0; i<ele.length; i++){
   if(i%2==0){
    ele[i].style.color ="red";
   } 
}