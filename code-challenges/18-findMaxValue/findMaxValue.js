'use strict';

function findMaxValue(binaryTree){
  let value = null;
  binaryTree.inOrder(current => {
    if(value === null){
      value = current;
    }
    if(current > value){
      value = current;
    }
  });
  return value;
}

module.exports = findMaxValue;