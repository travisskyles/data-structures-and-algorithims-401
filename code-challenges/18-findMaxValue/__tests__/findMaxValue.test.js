'use strict';

const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const findMaxValue = require('../findMaxValue');

describe('findMaxValue function', () => {
  it('should return the highest value', () => {
    const BT = new BinaryTree(10);
    BT.root.left = new Node(4);
    BT.root.left.right = new Node(2);
    BT.root.left.left = new Node(6);
    BT.root.right = new Node(9);
    BT.root.right.left = new Node(1);

    expect(findMaxValue(BT)).toBe(10);
  });
  
});