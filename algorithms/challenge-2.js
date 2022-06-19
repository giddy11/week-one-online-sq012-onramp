function filterArray(arr) {
    let newArray = [];
    let length = arr.length;
   
   for(let i = 0; i < length; i++){
     if(typeof arr[i] !== "string"){
       newArray.push(arr[i]);
     }
   }
     return newArray;
}

module.exports = filterArray