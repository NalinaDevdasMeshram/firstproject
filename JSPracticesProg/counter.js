let count = 0;
const ctn = document.getElementById("zero");
console.log(ctn)
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
inc.addEventListener("click", ()=>{
 count++;
  console.log(ctn.innerHTML = count);
})
dec.addEventListener("click", ()=>{
    if(count>0)
 count--;
 ctn.innerHTML = count;
})