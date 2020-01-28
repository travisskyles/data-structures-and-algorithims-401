'use strict';

const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const breadthFirst = require('../breadthFirst');


describe('breadthFirst method', () => {
  const BT = new BinaryTree(10);
  BT.root.left = new Node(4);
  BT.root.left.right = new Node(2);
  BT.root.left.left = new Node(6);
  BT.root.right = new Node(9);
  BT.root.right.left = new Node(1);

  it('should return values after traversing breadth first', () => {
    console.log(BT);
    expect(breadthFirst(BT)).toEqual([10,4,9,6,2,1]);
  });
  it('should return null if tree is empty', () => {
    const emptyBT = new BinaryTree();
    expect(breadthFirst(emptyBT)).toBeNull();
  });
});


