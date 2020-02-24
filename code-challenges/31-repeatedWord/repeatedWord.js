'use strict';

function split(string, delimiter) {
  const stringArray = [''];
  let j = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == delimiter) {
      j++;
      stringArray.push('');
    } else {
      stringArray[j] += string.charAt(i);
    }
  }
  return stringArray;
}

