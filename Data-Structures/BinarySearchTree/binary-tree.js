'use strict';

class Node {
  constructor(value = null){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(){
    this.root = new Node;
  }

  preOrder(cb){
    cb(this.value);
    if(this.left) this.left.preOrder(cb);
    if(this.right) this.right.preOrder(cb);
  }

  inOrder(cb){
    if(this.left) this.left.preOrder(cb);
    cb(this.value);
    if(this.right) this.right.preOrder(cb);
  }
  
  postOrder(cb){
    if(this.left) this.left.preOrder(cb);
    if(this.right) this.right.preOrder(cb);
    cb(this.value);
  }
}