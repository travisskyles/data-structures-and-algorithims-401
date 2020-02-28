'use strict';

const {Hashmap} = require('../30-hashTable/hashTable');

const treeIntersection = (btA, btB) => {
  let ht = new Hashmap();

  if(btA.root.value === null || btB.root.value === null){
    return null;
  }
  _addToHash(btA, ht);

  let result = _getDuplicates(btB.root, ht);

  return result;

};

const _addToHash = (bt, ht) => {
  bt.postOrder(element => {
    let key = element.toString();
    ht.add(key, element);
  });
};

const _getDuplicates = (root, ht) => {
  let result= [];
  let _walk = node => {
    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
    let key = node.value.toString();
    if(ht.contains(key)){
      console.log(ht);
      result.push(node.value);
      console.log(ht.contains(key), result);
    }
  };
  _walk(root);

  return result;
};

module.exports = treeIntersection;