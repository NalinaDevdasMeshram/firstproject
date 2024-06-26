// function test(arr){
//  for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//  }
// }
// const arr =[1,2,3,4,6,8,9]
//  test(arr);

//  function matrix(arr1){
//    for(let i=0; i<arr1.length; i++){
//     console.log(arr1[i])
//    }
//  }
//  const arr1 =[[1,2,3],[4,6,7], [8,9,10]]
//  matrix(arr1);
//  function  matrixf(arr2){
//  for(let i=0; i<arr2.length; i++){
//     for(let j=0; j<arr2[i].length; j++){
//    console.log(arr2[i][j])
//     }
//   }
//  }
//  const arr2 =[[1,2,3],[4,6,7], [8,9,10]]
//  matrixf(arr2);

 function travalRow(arr3, rowNo){
   let sum =0;
 for(let i=0; i<arr3.length; i++){
  sum+=arr3[rowNo][i];
  
 }
 console.log(sum);
 }
 const arr3 =[[1,2,3],[4,6,7], [8,9,10]]
 travalRow(arr3, 0);

 function travalCol(arr4, colNo){
   let sum =0;
    for(let i=0; i<arr3.length; i++){
        sum += arr4[i][colNo];   
    }
 console.log(sum);
 }
 const arr4=[[1,2,3],[4,6,7], [8,9,10]]
 travalCol(arr4, 1);

 function diogonal(arr5){
   let sum =0;
  for(let i=0; i<arr5.length; i++){
   
    sum +=arr5[i][i];
    
  }
  console.log(sum);
 }
 const arr5=[[1,2,3],[4,6,7], [8,9,10]]
 diogonal(arr5);

 function diogonalreverse(arr9){
   let j = arr9.length-1;
   let sum=0;
    for(let i=0; i<arr9.length; i++){
     
        sum+= arr5[i][j];
        j--;
     }
      
      console.log(sum) 
    }
   
   const arr9=[[1,2,3],[4,6,7], [8,9,10]]
   diogonalreverse(arr9);