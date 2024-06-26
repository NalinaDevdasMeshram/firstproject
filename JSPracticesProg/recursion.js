// function recursionprint(N){
//  if(N<=0){
//     return ;
//  }
//  console.log('A');
//  console.log(N);
//  recursionprint(N-1);
//  console.log('B');
// }
// recursionprint(3)

// function sumOfTwo(n){
//     let sum = 0;
//     console.log  (sum = sum+sumOfTwo(n-1));
// }
// console.log(sumOfTwo(5));

// function sum(n){
//     let  sum =0;
//     for(let i=0; i<=n; i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// sum(5);
 function sumTwo(n){
//  let sum = 0 ;
 return sumTwo(n-1);
 }
 sumTwo(5)