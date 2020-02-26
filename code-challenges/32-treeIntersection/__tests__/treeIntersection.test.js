'use strict';

const treeIntersection = require('../../32-treeIntersection/treeIntersection');
const {BinaryTree, Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');

describe('treeIntersection funcitonality', () => {

  it('should throw an error if on of the trees is empty', () => {
    let btA = new BinaryTree();
    let btB = new BinaryTree(10);

    btB.root.left = new Node(9);
    btB.root.left.left = new Node(5);
    btB.root.left.right = new Node(12);
    btB.root.right = new Node(6);
    btB.root.right.right = new Node(1);

    expect(treeIntersection(btA, btB)).toBe(null);
  });
  it('should return with some matches', () => {
    let btA = new BinaryTree(3);
    let btB = new BinaryTree(7);

    btA.root.left = new Node(9);
    btA.root.left.right = new Node(12);
    btA.root.right = new Node(6);

    btB.root.left = new Node(9);
    btB.root.left.left = new Node(5);
    btB.root.left.right = new Node(12);
    btB.root.right = new Node(6);
    btB.root.right.right = new Node(1);

    expect(treeIntersection(btA, btB)).toEqual([12, 9, 1, 6]);
  });
  it('should return with all matches', () => {
    let btA = new BinaryTree(7);
    let btB = new BinaryTree(7);

    btA.root.left = new Node(9);
    btA.root.left.right = new Node(12);
    btA.root.right = new Node(6);

    btB.root.left = new Node(9);
    btB.root.left.right = new Node(12);
    btB.root.right = new Node(6);

    expect(treeIntersection(btA, btB)).toEqual([12, 9, 6, 7]);
  });

  it('should return with no matches', () => {
    let btA = new BinaryTree(1);
    let btB = new BinaryTree(7);

    btA.root.left = new Node(2);
    btA.root.left.right = new Node(3);
    btA.root.right = new Node(4);

    btB.root.left = new Node(5);
    btB.root.left.right = new Node(8);
    btB.root.right = new Node(6);

    expect(treeIntersection(btA, btB)).toEqual([]);
  });
});