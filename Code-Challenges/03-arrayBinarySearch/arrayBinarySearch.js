'use strict';

const binarySearch = (arr, key) => {
  let left = 0;
  let right = Math.round(arr.length-1);

  while( left <= right ){
    let m = Math.round((left + right) / 2);
    if(arr[m] < key){
      left = m+1;
    }
    else if(arr[m] > key){
      right = m-1;
    }
    else{
      return m;
    }
  }
  return -1;
};

module.exports = binarySearch;