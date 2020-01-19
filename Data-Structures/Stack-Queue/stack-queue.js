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
  constructor(top){
    this.top = null;
  }
}
// create queue that has front property
class Queue {
  constructor(front){
    this.front = null;
  }
}