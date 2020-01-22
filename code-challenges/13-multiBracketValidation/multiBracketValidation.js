'use strict';

const Stack = require('../../Data-Structures/Stack-Queue');

function bracketValidation(string){
  let stack = new Stack;

  let openBrackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let closingBrackets = {
    ')': ')',
    '}': '}',
    ']': ']',
  };
  
  for(let i = 0; i < string.length; i++){
    let char = string.charAt(i);
    if(openBrackets[char]){
      stack.push(char);
    }
    if(closingBrackets[char]){
      stack.pop().value === char? true: false;
    }
  }
}



module.exports = bracketValidation;