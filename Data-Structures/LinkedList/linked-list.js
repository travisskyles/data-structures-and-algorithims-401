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
  /**
 * appends node to end of the list
 * @param {*} value
 * @memberof Linkedlist
 */
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
  /**
 * inserts node before first of given value
 * @param {*} value
 * @param {*} newValue
 * @memberof Linkedlist
 */
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
  /**
 * inserts after first of given value
 * @param {*} value
 * @param {*} newValue
 * @memberof Linkedlist
 */
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
        return true;
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