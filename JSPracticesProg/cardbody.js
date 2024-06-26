const button = document.getElementById("btn")
    let RandomNum = ()=>{
       return  Math.floor(Math.random() *256);
    };
    let colorChange = ()=>{
         console.log("hello");
        let random =`rgb(${RandomNum()}, ${RandomNum()},${RandomNum()})`
        document.body.style.backgroundColor = random;
    }
     button.addEventListener("click", colorChange);
    window.addEventListener("load", colorChange);