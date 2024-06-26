 function BinarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
   
    while(left <= right){
         
        let mid = Math.floor((left+right)/2);
        // check if target is present in mid or not
        if(arr[mid]=== target){
            console.log("Number of Iteration:" +arr)
            console.log (mid);
        }
        // if mid less than target than do left = mid+1, right = mid-1 or mid greater than left = mid -1 or right = mid+1
        if(arr[mid]<target){
            left = mid + 1;
             console.log(left)
        } else{
            right = mid - 1;
           console.log(right);
        }
    }
    console.log("Element not found");
    
}
const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
const target =  5;
BinarySearch(arr, 5);