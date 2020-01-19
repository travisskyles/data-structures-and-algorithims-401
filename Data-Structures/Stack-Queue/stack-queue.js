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
 * @memberof Stack
 */
  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  /**
 * Removes node from the top of the stack
 * @method pop
 * @memberof Stack
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
   * @memberof Stack
   */
  peek(){
    return this.top.value;
  }
  /**
   * Return a boolean whether stack is empty
   * @method isEmpty
   * @memberof Stack
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
/**
   * Queue Class
   * @class Queue
   */
class Queue {
  constructor(){
    this.front = null;
  }
  /**
   *  Adds node to the back of the queue
   * @param {*} value
   * @method enqueue
   * @memberof Queue
   */
  enqueue(value){

  }
  /**
   * Removes a node from the fron of the queue and returns the value
   * @method dequeue
   * @memberof Queue
   */
  dequeue(){

  }
  /**
   * Returns the value fo the node at the front of the queue
   * @method peek
   * @memberof Queue
   */
  peek(){

  }
  /**
   * Returns a boolean whether or not the queue is empty
   * @method isEmpty
   * @memberof Queue
   */
  isEmpty(){

  }

}

module.exports = {Stack, Queue};