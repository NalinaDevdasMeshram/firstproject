console.log("hello world")
const  a = document.querySelector("h5");
console.log(a);
const btn = document.querySelector("#Add");
var count =0;
console.log(btn)
btn.addEventListener("click", function(){
    if(count==0){
        a.innerHTML ="Friends"; 
    a.style.color ="green"
    btn.innerHTML ="Removed friends";
     count=1;
    
    }else{
        a.innerHTML ="Stranger";
        a.style.color = "red";
        btn.innerHTML =" Add Friends";
        count =0;
        }
   
})
