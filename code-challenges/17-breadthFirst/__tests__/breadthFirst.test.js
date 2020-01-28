'use strict';

const {Queue} = require('../../../Data-Structures/Stack-Queue/stack-queue');
const {BinaryTree} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const {Node} = require('../../../Data-Structures/BinarySearchTree/binary-tree');
const breadthFirst = require('../breadthFirst');

const BT = new BinaryTree(10);
BT.root.left = new Node(4);
BT.root.left.right = new Node(2);
BT.root.left.left = new Node(6);
BT.root.right = new Node(9);
BT.root.right.left = new Node(1);
console.log(BT);

breadthFirst(BT);

// const q = new Queue();
// console.log(q);
// q.enqueue(10);
// console.log(q);
// q.dequeue();
// console.log(q);
// q.enqueue(4);
// q.enqueue(9);
// console.log(q);


