const prompt = require('prompt-sync')();
let num = Math.random()*100;
console.log(num);
 num = Number.parseInt(num);
console.log(num);
let user;
let score =100;
while(user!= num){
    score= score-1;
   user = prompt("Enter the Number:");
 console.log(user);
 if(user==num){
    console.log("Congratulation! you guess correct number")
   console.log(`you guess the actually number is:${100-score}.chances`)
  }
  else if(user>num && user<100)
  {
    console.log("your number is greater than actuall number:")
 }
 else if(user<num && user>0)
 {
    console.log("your number is smaller than actuall number:")
}else{
    console.log("Enter the number between 1 to 100");
  }
}
