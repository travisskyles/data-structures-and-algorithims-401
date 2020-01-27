'use strict';
/**
 *
 *
 * @param {*} tree
 * @returns new tree with replaced values
 */
function fizzBuzzTree(tree){
  let newTree = tree;

  function fizzBuzz(node){
    if((node.value % 3 === 0) && (node.value % 5 === 0)){
      node.value = 'FizzBuzz';
    }
    if(node.value % 3 === 0){
      node.value = 'Fizz';
    }
    if(node.value % 5 === 0){
      node.value = 'Buzz';
    }
    else{
      node.value = node.value.toString();
    }
  }

  const recursive = node => {
    if(node){
      recursive(node.left);
      fizzBuzz(node);
      recursive(node.right);
    }
  };
  recursive(newTree.root);
  return newTree;
}

module.exports = fizzBuzzTree;