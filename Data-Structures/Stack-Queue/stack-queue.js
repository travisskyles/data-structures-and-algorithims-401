'use strict';

/**
 * Node Class
 * @class
 */
class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
// create stack class that has top property
/**
 * Stack Class
 * @class
 */
class Stack {
  constructor(){
    this.top = null;
  }
  /**
 * Adds node to the top of the stack
 * @method push
 * @param {*} value 
 */
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  /**
 * Removes node from the top of the stack
 * @method pop
 */
  pop(){
    let tempNode;

    if(this.top === null){
      return undefined;
    }
    else{
      tempNode = this.top;
      this.top = this.top.next;
      tempNode.next = null;
    }
  }
}
// create queue that has front property
class Queue {
  constructor(){
    this.front = null;
  }
}