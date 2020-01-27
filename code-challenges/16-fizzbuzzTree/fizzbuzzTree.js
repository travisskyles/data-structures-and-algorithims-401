'use strict';

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
    console.log(node);
    if(node){
      recursive(node.left);
      fizzBuzz(node);
      recursive(node.right);
    }
  };
  recursive(newTree.root);
  return newTree;
}

// function fizzBuzz(value){
//   if(value % 3 === 0 && value % 5 === 0){
//     value = 'FizzBuzz';
//   }
//   if(value % 3 === 0){
//     value = 'Fizz';
//   }
//   if(value % 5 === 0){
//     value = 'Buzz';
//   }
//   else{
//     value = value.toString();
//   }
// }

// function traversal(tree, cb){
//   const recursive = node => {
//     if(node){
//       recursive(node.left);
//       cb(node.value);
//       recursive(node.right);
//     }
//   };
//   recursive(tree.root);
// }

module.exports = fizzBuzzTree;