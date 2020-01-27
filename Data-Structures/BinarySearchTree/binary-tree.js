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
  constructor(value){
    this.root = new Node(value);
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
  constructor(value){
    this.root = new Node(value);
  }

  add(value){
    let newNode = new Node(value);

    const search = node => {
      if(node.value > value){
        if(!node.left){
          node.left = newNode;
        }
        else{
          search(node.left);
        }
      }
      if(node.value < value){
        if(!node.right){
          node.right = newNode;
        }
        else{
          search(node.right);
        }
      }
    };

    search(this.root);
  }

  contains(value){
    let current = this.root;

    while(current){
      if(value === current.value) return true;
      if(value < current.value){
        current = current.left;
      }
      else{
        current = current.right;
      }
    }
    return false;
  }

}

let testTree = new BinarySearchTree(4);
testTree.add(3);
testTree.add(7);

console.log(testTree);
console.log(testTree.contains(7));