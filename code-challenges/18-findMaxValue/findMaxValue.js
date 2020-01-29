'use strict';

const {BinaryTree} = require('../../Data-Structures/BinarySearchTree/binary-tree');
/**
 * finds the highest value in a binary tree
 * @class MaxValue
 * @extends {BinaryTree}
 */
class MaxValue extends BinaryTree {
  constructor(value){
    super(value);
  }
  findMaxValue(){
    let value = null;
    this.inOrder(current => {
      if(value === null){
        value = current;
      }
      if(current > value){
        value = current;
      }
    });
    return value;
  }
}
/** 
 * @module findMaxValue
*/
module.exports = MaxValue;