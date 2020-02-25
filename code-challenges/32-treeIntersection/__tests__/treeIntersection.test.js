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