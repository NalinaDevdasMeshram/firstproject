// JavaScript program for the above approach

// function that return maximum occurring character
function getMaxOccurringChar(text)
{
 let map = new Map();
 let fre =0;
   for(let i=0; i<text.length; i++){
        let n = text[i];
       
      console.log(fre = map.get(n) +1 || 0, map.set(n, fre+1))
   }
     let ans ='';
    let maxfre =0;
     for(const[n, fre] of map){
         let fre = map.get(n)+1 || 0;
            if(fre > maxfre){
                ans = n;
                maxfre = fre;
            }else if(fre == maxfre){
                if(n < ans){
                    ans = n;
                }

            }
        
        
        }
     
     
     console.log(ans, maxfre);
}


// Driver Code
let text = "sample string";
console.log( getMaxOccurringChar(text));

// This code is contributed by rutikbhosale
