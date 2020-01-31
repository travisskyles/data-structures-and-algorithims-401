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
  preOrder(cb){
    const recursive = node => {
      if(node){
        cb(node.value);
        recursive(node.left);
        recursive(node.right);
      }
    };
    recursive(this.root);
  }
  /**
 *
 *
 * @param {*} cb
 * @memberof BinaryTree
 */
  inOrder(cb){
    const recursive = node => {
      if(node){
        recursive(node.left);
        cb(node.value);
        recursive(node.right);
      }
    };
    recursive(this.root);
  }
  /**
   *
   *
   * @param {*} cb
   * @memberof BinaryTree
   */
  postOrder(cb){
    const recursive = node => {
      if(node){
        recursive(node.left);
        recursive(node.right);
        cb(node.value);
      }
    };
    recursive(this.root);
  }
}
/**
 *
 *
 * @class BinarySearchTree
 */
class BinarySearchTree {
  constructor(value){
    this.root = new Node(value);
  }
  /**
 *
 *
 * @param {*} value
 * @memberof BinarySearchTree
 */
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
  /**
 *
 *
 * @param {*} value
 * @returns boolean
 * @memberof BinarySearchTree
 */
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


module.exports = {BinaryTree, BinarySearchTree, Node};