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
      return null;
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
    if(this.top === null){
      return null;
    }
    else{
      return this.top.value;
    }
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
    this.back = null;
  }
  /**
   *  Adds node to the back of the queue
   * @param {*} value
   * @method enqueue
   * @memberof Queue
   */
  enqueue(value){
    let newNode = new Node(value);
    if(this.front === null){
      this.front = newNode;
      this.back = newNode;
    }
    this.back.next = newNode;
    this.back = newNode;
  }
  /**
   * Removes a node from the fron of the queue and returns the value
   * @method dequeue
   * @memberof Queue
   */
  dequeue(){
    let tempNode;

    if(this.front === null){
      return null;
    }
    tempNode = this.front;
    this.front = this.front.next;
    tempNode.next = null;
    
  }
  /**
   * Returns the value fo the node at the front of the queue
   * @method peek
   * @memberof Queue
   */
  peek(){
    if(this.front === null){
      return null;
    }
    else{
      return this.front.value;
    }
  }
  /**
   * Returns a boolean whether or not the queue is empty
   * @method isEmpty
   * @memberof Queue
   */
  isEmpty(){
    if(this.front === null){
      return true;
    }
    else{
      return false;
    }
  }

}

module.exports = {Stack, Queue};