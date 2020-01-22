'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');

function bracketValidation(string){
  let stack = new Stack();

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
      stack.push(openBrackets[char]);
    }
    else if(closingBrackets[char]){
      if(stack.isEmpty()){
        return false;
      }
      else if(closingBrackets[char] === closingBrackets[stack.top.value]){
        stack.pop();
      }
    }
  }
  (stack.isEmpty())? true: false;
}



module.exports = bracketValidation;