  // give second argument true then it will behave like event caputer from parent to child
 // give second argument false then it will behave like event bubbling from child to parent 
 
document.querySelector("#container")
.addEventListener('click',()=>{
    console.log("I am Container")
},false)

document.querySelector('#grandparent')
.addEventListener('click',()=>{
 console.log("Grandparent")
}, false)

document.querySelector('#parent')
.addEventListener('click',()=>{
    console.log("parent")
},false)

document.querySelector('#child')
.addEventListener('click',()=>{
    console.log("child")
    
}, false)