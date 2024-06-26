// function BST(arr, target){
// let left = 0;
// let right = arr.length-1;
// while(left <= right){
//     let mid = Math.floor((left + right)/2)
//     console.log(mid);
// if(arr[mid] === target){
//    console.log(arr[mid]);
// }
// if(arr[mid]<= right){
//  left = mid+1;
// //  console.log(left)
//   }else{
//     right = mid-1;
//     // console.log(right)
//   }
// }
// }
// const arr =[1,2,5,6,7];
// const target = 7;
// console.log(BST(arr,7));

function BST(arr, target){
  let left = 0;
  let right = arr.length-1;
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    // console.log(mid);
    if(arr[mid] === target){
      //  console.log(mid);
    }
    if (mid < target)
    {
      left = mid-1;
      console.log(left)
    }else{
      right = mid+1;
      console.log(right)
    }
  }
  
}

const arr = [5,1,10,2,6];
console.log(arr)
target = 1;
console.log(BST([5,1,10,2,6],1))