'use strict';
/**
 *
 *
 * @class Node
 */
class Node {
  constructor(value = null){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
/**
 *
 *
 * @class BinaryTree
 */
class BinaryTree {
  constructor(){
    this.root = new Node;
  }
  /**
 *
 *
 * @param {*} cb
 * @memberof BinaryTree
 */
  preOrder(){
    const results = [];

    const recursive = node => {
      results.push(node.value);
      if(node.left) recursive(node.left);
      if(node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;

  }
  /**
 *
 *
 * @param {*} cb
 * @memberof BinaryTree
 */
  inOrder(){
    const results = [];

    const recursive = node => {
      if(node.left) recursive(node.left);
      results.push(node.value);
      if(node.right) recursive(node.right);
    };
    recursive(this.root);
    return results;
  }
  /**
   *
   *
   * @param {*} cb
   * @memberof BinaryTree
   */
  postOrder(){
    const results = [];

    const recursive = node => {
      if(node.left) recursive(node.left);
      if(node.right) recursive(node.right);
      results.push(node.value);
    };
    recursive(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor(tree = new BinaryTree()){
    this.tree = tree;
  }

  add(value){
    let newNode = new Node(value);

    if(this.tree.root.value === null){
      this.tree.root.value = value;
    }
    if(this.tree.root.value > value && this.tree.left === null){
      this.left = newNode;
    } else if (this.tree.value > value){
      this.add(this.tree.left);
    } else if (this.tree.root.value < value && this.tree.right === null){
      this.right = newNode;
    } else if (this.tree.value < value){
      this.add(this.tree.right);
    }
  }

}

let testTree = new BinarySearchTree();
testTree.add(5);
testTree.add(7);

console.log(testTree);