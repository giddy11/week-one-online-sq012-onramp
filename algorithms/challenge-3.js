function sumMix(arr) {
    let sum = 0;
    let newarr =  [];
    let length = arr.length;
    
  
  for(let i= 0; i<length; i++){  
  newarr.push(parseFloat(arr[i]));
        
  }
  for(let i= 0; i<length; i++){
    sum += newarr[i];
  }
    return sum;
 }

  module.exports = sumMix