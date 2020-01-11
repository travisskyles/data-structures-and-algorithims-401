'use strict';

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class Linkedlist {
  constructor(){
    this.head = null;
  }

  /**
   * creates a new node and inserts it into the linked list
   * @param {*} value
   * @memberof Linkedlist
   */
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  /**
   *
   * checks to see wheter a valude exists as a node's value somewhere on the list
   * @param {*} value
   * @memberof Linkedlist
   */
  includes(value){

  }

  /**
   * creates a string representing all the values of the Linked List
   * @memberof Linkedlist
   */
  toString(){

  }


}


