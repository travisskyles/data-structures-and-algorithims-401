'use strict';

const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const fizzbuzztree = require('../fizzbuzzTree');

describe('fizzbuzztree', () => {
  let BTree = new BinaryTree(15);
  beforeEach(() => {
    BTree.root.left = new Node(3);
    BTree.root.right = new Node(5);
    BTree.root.left.left = new Node(4);
  });

  it('should replace values divisible by 5 & 3 with FizzBuzz', () => {
    let newTree = fizzbuzztree(BTree);
    expect(newTree.root.value).toEqual('FizzBuzz');
  });
  it('should replace value divisible by 5 with Buzz', () => {
    let newTree = fizzbuzztree(BTree);
    expect(newTree.root.right.value).toEqual('Buzz');
  });
  it('should replace value divisible by 3 with Fizz', () => {
    let newTree = fizzbuzztree(BTree);
    expect(newTree.root.left.value).toEqual('Fizz');
  });
  it('should replace all other values with the value as a string', () => {
    let newTree = fizzbuzztree(BTree);
    expect(newTree.root.left.left.value).toEqual('4');
  });
});