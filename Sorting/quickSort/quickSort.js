'use strict';

function quickSort(arr, left, right){
  if(left < right){
    let pivot = partition(arr, left, right);
    console.log(pivot);
    quickSort(arr, left, pivot -1);
    quickSort(arr, pivot + 1, right);
  }
}

function partition(arr, left, right){
  let pivot = right;
  let i = left - 1;
  let j = left;

  while(j < pivot){
    if(arr[j] > arr[pivot]){
      j++;
    }
    else{
      i++;
      swap(arr, j, i);
      j++;
    }
  }

  swap(arr, i + 1, pivot);
  return i + 1;
}

function swap(arr, first, second){
  let temp;
  temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

const arr = [5, 3, 9, 59, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

module.exports = quickSort;