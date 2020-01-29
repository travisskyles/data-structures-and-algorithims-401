'use strict';
/**
 * finds the highest value in a binary tree
 * @param {*} binaryTree
 * @returns value
 */
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
/** 
 * @module findMaxValue
*/
module.exports = findMaxValue;