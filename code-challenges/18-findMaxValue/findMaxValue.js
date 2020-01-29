'use strict';

module.exports = findMaxValue(binaryTree){
  const values = binaryTree.inOrder();
  let current = values[0];

  for(let i = 1; i < values.length; i++){
    if(values[i] > current) current = values[i];
  }

  return current;
}