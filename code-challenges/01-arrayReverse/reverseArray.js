'use strict';

const reversedArray = arr => {
  const newArray = [];
  let counter = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    newArray[counter] = arr[i];
    counter++;
  }
  return newArray;
};
