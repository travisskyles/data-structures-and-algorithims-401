'use strict';

// create node class with value and pointer
class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
// create stack class that has top property
class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
}
// create queue that has front property
class Queue {
  constructor(){
    this.front = null;
  }
}