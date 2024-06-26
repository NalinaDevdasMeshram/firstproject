console.log("start");
setTimeout(function(){
    console.log("callback");
},5000);

setTimeout(function(){
    console.log("callMe");
},0);
console.log("End");
// million line of code

let startDate = new Date().getTime();
let EndDate = startDate;
while(EndDate<startDate +10000){
   EndDate = new Date().getTime()
}
console.log("while expires")

 //o/p: start
        // EndDate
        // while expires
        // callme
        // callback



