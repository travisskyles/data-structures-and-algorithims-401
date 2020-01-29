'use strict';

const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const findMaxValue = require('../findMaxValue');

describe('findMaxValue function', () => {
  it('should return the highest value', () => {
    const expectedVal = 10;
    const BT = new BinaryTree(expectedVal);
    BT.root.left = new Node(4);
    BT.root.left.right = new Node(2);
    BT.root.left.left = new Node(6);
    BT.root.right = new Node(9);
    BT.root.right.left = new Node(1);
    console.log(findMaxValue(BT));
    expect(findMaxValue(BT)).toBe(expectedVal);
  });
  it('should return null with an empty tree', () => {
    const BT = new BinaryTree();

    expect(findMaxValue(BT)).toBeNull();
  });
});