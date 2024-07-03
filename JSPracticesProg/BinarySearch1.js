// nums =[1,5,6,8,9,10,12]
function BinarySearch(){
  let left = 0, right = nums.length-1;
  while(left <= right){
    let mid = Math.floor((left + right)/2);
    console.log(mid);
    if(nums[mid]=== target)
      return mid;
    if(nums[mid]<= target)
      left = mid -1;
    else
     right = right +1;
  }
 console.log('element not fount')
}
// BinarySearch(nums, 8);
let nums = [1,5,6,8,9,10,12]; 
const target =  9;
BinarySearch(nums, 8);