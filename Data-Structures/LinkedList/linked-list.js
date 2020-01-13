'use strict';

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

/**
 *
 * @class Linkedlist
 */
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
  // set current equal to head
  // instantiate new node
  // newNode.next = current.node
  // head = newNode
  // current = newNode
  append(value){
    let newNode = new Node(value);
    let current = this.head;

    if(this.head === null){
      this.head = newNode;
    } else {
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue){
    let current = this.head;

    while(current.next !== null){
      if(current.value === value){
        let newNode = new Node(newValue);

        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue){
    let current = this.head;
    let previous = null;

    while(current.next !== null){
      if(current.value === value){
        let newNode = new Node(newValue);
        newNode.next = current;
        previous.next = newNode;
      }
      previous = current;
      current = current.next;

    }
  }
  
  /**
   *
   * checks to see wheter a valude exists as a node's value somewhere on the list
   * @param {*} value
   * @memberof Linkedlist
   */
  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
        return [true, current.value];
      }
      current = current.next;
    }
    return false;
  }

  /**
   * creates a string representing all the values of the Linked List
   * in format "{ a } -> { b } -> { c } -> NULL"
   * @memberof Linkedlist
   */
  toString(){
    let currentNode = this.head;
    let string = 'head';

    while(currentNode){
      string = `${string} -> {${currentNode.value}}`;
      currentNode = currentNode.next;
    }
    return `${string} -> NULL`;
  }


}

/**
 * export linkedlist class
 * @module Linkedlist
 */
module.exports = Linkedlist;