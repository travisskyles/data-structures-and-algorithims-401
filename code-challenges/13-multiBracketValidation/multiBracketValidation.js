'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');

/**
 * checks to see if an input string has matching opening and closing brackets
 * @param {*} string
 * @returns true if matching, false if not matching, undefined if input is not a string
 */
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