/***settimeout.html*** */ 
console.log("start");
setTimeout(function(){
    console.log("callback");
},5000);

function x(){
    console.log('callled x');
}
x();

setTimeout(function(){
    console.log("callMe");
},0);
console.log("End");
// million line of code

let startDate = new Date().getTime();
let EndDate = startDate;
while(EndDate<startDate +10000){    // wait for 10s to complete
   EndDate = new Date().getTime()
}
console.log("while expires")

 //o/p: start
        // x called 
        // EndDate
        // while expires
        // callme
        // callback



