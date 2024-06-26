const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
console.log(body);
buttons.forEach(function (button) {
   button.addEventListener('click', function(e) {
 console.log(e);
 console.log(e.target)
 
 if(e.target.id==='btn1'){
    body.style.background ='gray';
}
 if(e.target.id==='btn2'){
    body.style.background ='yellow';

 }
 if(e.target.id==='btn3'){
    body.style.background ='red';

 }
 if(e.target.id==='btn4'){
    body.style.background ='orange';

 }
 if(e.target.id==='btn5'){
    body.style.background ='pink';

 }
   })
})