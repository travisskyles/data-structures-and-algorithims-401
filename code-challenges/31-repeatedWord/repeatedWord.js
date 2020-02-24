'use strict';

/**
 * Splits a string by a stated delimiter and pushes each section into an array
 * @param {string} string
 * @param {string} delimiter
 * @returns {array} array of strings
 */

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

/**
 * Finds the first repeated word in a string of words
 * @param {*} string long string of words
 * @returns {string} first repeated word
 */

function repeatedWord(string){
  let temp;
  let count = 0;
  const wordsLower = string.toLowerCase();
  const words = split(wordsLower, ' ');

  if(words.length <= 1) return null;

  while(count < words.length){
    temp = words[count];
    for(let i = count + 1; i <= words.length -1; i++){
      if(temp === words[i]) return temp;
    }
    count++;
  }
}

function wordCount(string){
  const wordsLower = string.toLowerCase();
  const words = split(wordsLower, ' ');
  const countObj = {};

  words.forEach(word => {
    countObj[word] = 0;
  });

  for(let i = 0; i < words.length; i++){
    countObj[words[i]] = countObj[words[i]] + 1;
  }
  return countObj;
}

module.exports = {split, repeatedWord};