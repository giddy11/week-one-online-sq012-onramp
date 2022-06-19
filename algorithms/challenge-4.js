function sumTwoSmallestNums(arr) {
    
arr.sort(function(a,b){return a - b});
let sum= 0;
let newArray = [];
let length = arr.length

for(let i = 0; i<length; i++){
  if(arr[i] > 0)
  newArray.push(arr[i]);  
  
}

  return newArray[0] + newArray[1];
 
 }
  module.exports =sumTwoSmallestNums