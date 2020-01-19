'use strict';

/**
 * Node Class
 * @class Node
 */
class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
/**
 * Stack Class
 * @class Stack
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
  /**
   * Return value at the top of the stack
   * @method peek
   */
  peek(){
    return this.top.value;
  }
  /**
   * Return a boolean whether stack is empty
   * @method isEmpty
   */
  isEmpty(){
    if(this.top === null){
      return true;
    }
    else{
      return false;
    }
  }
  
}
// create queue that has front property
class Queue {
  constructor(){
    this.front = null;
  }
}

module.exports = {Stack, Queue};