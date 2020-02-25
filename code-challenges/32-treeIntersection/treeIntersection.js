'use strict';

const {Hashmap} = require('../../30-hashTable/hashTable');

const treeIntersection = (btA, btB) => {
  let ht = new Hashmap();

  if(btA.root === null || btB.root === null){
    throw new Error('No root value');
  }
  _addToHash(btA, ht);

  let result = _getDuplicates(btB.root, ht);

  return result;

};

const _addToHash = (bt, ht) => {
  let arrayOfNumbers = bt.postOrder();
  arrayOfNumbers.forEach(element => {
    let key = element.toString();
    ht.add(key, element);
  });
};

const _getDuplicates = (root, ht) => {
  let result= [];
  let _walk = node => {
    if (node.left) _walk(node.left); // L
    if (node.right) _walk(node.right); // R
    let key = node.value.toString();
    if(ht.contains(key)){
      result.push(node.value);
    } // Ro

  };
  _walk(root);

  return result;
};

module.exports = treeIntersection;