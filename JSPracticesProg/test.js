// console.log("Hello World !");
// function programTest(){
//   const str = [1,2,3,5,6,7,8,8,9];
 
//    console.log(str.slice(0,4));
// //  console.log(str);
// //  console.log(str.includes(2,1));
// //  console.log(str.includes(8,2));
// //  console.log(str.includes(7));
// //   console.log(str.indexOf());
// //  console.log(str.indexOf(8));
// //  console.log(str.indexOf(7));
// //  console.log (Math.max(...str));
// //  console.log (Math.min(...str))
// //  console.log (Math.floor(...str))
// // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// // fruits.splice(2, 2);
// // console.log(fruits);
// }

// programTest();
// function parent(){
//      const name = "i am parent function ";
//      function child(){
//        console.log(name   +  " i am child function");
//      }
//      return child();
// }
// const rs = parent();// here  store variable 
// return rs;

function diagonalSum(matrix,n,m,i,j) {
  if (i >= n || j >= m){
      return -1;
  }

  let diagonalSum=0;
  let row = i;
  let col = j;

   while (row>n && col>m) 
  {
      diagonalSum += matrix[row][col];
      row++;
      col++;
  }

  return diagonalSum;
}
console.log( diagonalSum [[1,2 ,3, 4],

  [1, 2 ,4 ,5,],
  
 [ 2, 3 ,3 ,4,],
  
  [1, 1, 2, 3]])