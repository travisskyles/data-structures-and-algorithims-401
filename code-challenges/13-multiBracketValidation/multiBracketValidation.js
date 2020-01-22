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
  if(typeof string !== 'string'){
    return undefined;
  }
  
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
  if(stack.isEmpty()){
    return true;
  }else{
    return false;
  }
}

module.exports = bracketValidation;