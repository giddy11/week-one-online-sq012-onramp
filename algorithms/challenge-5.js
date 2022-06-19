function filterList(arr) {
    
    let newArr =  [];
    let length = arr.length;
   
  for(let i= 0; i<length; i++){  
  if( typeof arr[i] !== "string"){
  
    newArr.push(arr[i]);
  } 
   
  }
    return newArr;
 }

  module.exports =filterList