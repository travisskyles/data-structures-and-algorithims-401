'use strict';

const {Queue} = require('../../Data-Structures/Stack-Queue/stack-queue');
/**
 * @param {*} tree
 * @returns list of values from breadth first traversal
 */
function breadthFirst(tree){
  const queue = new Queue();
  const output = [];
  let current = tree.root;
  if(current.value === null){
    return null;
  }
  queue.enqueue(current);

  while(!queue.isEmpty()){
    current = queue.dequeue();
    console.log(current);
    output.push(current.value);
    if(current.left !== null){
      queue.enqueue(current.left);
    }
    if(current.right !== null){
      queue.enqueue(current.right);
    }
  }
  return output;
}

/** 
 * @module breadthFirst
*/
module.exports = breadthFirst;