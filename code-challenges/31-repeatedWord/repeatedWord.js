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

function repeatedWord(string){
  let temp;
  let count = 0;
  const wordsLower = string.toLowerCase();
  const words = split(wordsLower, ' ');

  if(words.length <= 1) return null;

  while(count <= words.length -1){
    temp = words[count];
    for(let i = count + 1; i <= words.length -1; i++){
      if(temp === words[i]) return temp;
    }
    count++;
  }
}

module.exports = repeatedWord;