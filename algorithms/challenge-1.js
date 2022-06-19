function secondLargest(arr) {
    arr.sort(function(a,b){return a - b});

    let max = 0;
  for(let i=0; i < arr.length-1; i++){
    if(max === 0 || max < arr[i]){
      max = arr[i];
      
    }
  }
   return max;
}




secondLargest([2, 30, 4, 57, 6, 9, 100]);







 //module.exports = secondLargest