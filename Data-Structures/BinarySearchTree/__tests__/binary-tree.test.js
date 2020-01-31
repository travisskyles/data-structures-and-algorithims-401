'use strict';

const {BinarySearchTree} = require('../binary-tree');
const {BinaryTree} = require('../binary-tree');
const {Node} = require('../binary-tree');
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal

describe('binary tree functionality', () => {
  let tree;

  it('can instantiae an empty tree', () => {
    tree = new BinaryTree();
    expect(tree.root.value).toBeNull();
  });
  it('can instantiate a tree with a single root node', () => {
    tree = new BinaryTree(5);
    expect(tree.root.value).toBe(5);
  });
  it('can add a left and right child to a root node',() => {
    tree = new BinaryTree(5);
    tree.root.left = new Node(2);
    tree.root.right = new Node(7);
    expect(tree.root.left.value).toBe(2);
    expect(tree.root.right.value).toBe(7);
  });
  it('can return a preorder traversal', () => {
    tree = new BinaryTree(5);
    tree.root.left = new Node(4);
    tree.root.left.left = new Node(2);
    tree.root.right = new Node(9);
    tree.root.right.left = new Node(6);
    const arr = [];
    tree.preOrder(value => arr.push(value));
    expect(arr).toEqual([5, 4, 2, 9, 6]);
  });
  it('can return an inorder traversal', () => {
    tree = new BinaryTree(5);
    tree.root.left = new Node(4);
    tree.root.left.left = new Node(2);
    tree.root.right = new Node(9);
    tree.root.right.left = new Node(6);
    const arr = [];
    tree.inOrder(value => arr.push(value));
    expect(arr).toEqual([ 2, 4, 5, 6, 9 ]);
  });
  it('can return an postorder traversal', () => {
    tree = new BinaryTree(5);
    tree.root.left = new Node(4);
    tree.root.left.left = new Node(2);
    tree.root.right = new Node(9);
    tree.root.right.left = new Node(6);
    const arr = [];
    tree.postOrder(value => arr.push(value));
    expect(arr).toEqual([ 2, 4, 6, 9, 5 ]);
  });
});

describe('binary search tree functionality', () => {
  let tree;

  it('can insert depending on the value', () => {
    tree = new BinarySearchTree(10);
    tree.add(5);
    expect(tree.root.left.value).toBe(5);
    tree.add(15);
    expect(tree.root.right.value).toBe(15);
  });
  it('can return true if value is in tree', () => {
    tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(4);
    tree.add(49);
    tree.add(19);
    expect(tree.contains(19)).toBeTruthy();
  });
  it('can return false if value is not in tree', () => {
    tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(4);
    tree.add(49);
    tree.add(19);
    expect(tree.contains(100)).toBeFalsy();
  });
});