'use strict';

const insertShiftArray = (arr, value) => {
  const newArr = [];
  const midIndex = Math.ceil(arr.length / 2);
  let i = 0;
  while (i < midIndex) {
    newArr[i] = arr[i];
    i++;
  }
  newArr[i] = value;
  i++;
  while (i <= arr.length) {
    newArr[i] = arr[i - 1];
    i++;
  }
  return newArr;
};

module.exports = insertShiftArray;
