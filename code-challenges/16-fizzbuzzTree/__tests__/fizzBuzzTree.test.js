'use strict';

const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const fizzbuzztree = require('../fizzbuzzTree');

describe('fizzbuzztree', () => {
  let BTree = new BinaryTree(15);
  beforeEach(() => {
    BTree.root.left = new Node(3);
    BTree.root.right = new Node(5);
  });

  it('should replace values divisible by 5 & 3 with fizzbuzz', () => {
    console.log(fizzbuzztree(BTree));
  });
});