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
    this.length++;
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
    let current = this.head;
    let string = 'head';

    while(current){
      string = `${string} -> {${current.value}}`;
      current = current.next;
    }
    return `${string} -> NULL`;
  }
  kthFromEnd(k){
    let current = this.head;
    let length = 0;

    while (current !== null){
      current = current.next;
      length++;
    }
    if(k > length || k < 0){
      return undefined;
    }
    current = this.head;
    for(let i = 0; i < (length-k-1); i++){
      current = current.next;
    }
    return current.value;
  }
  findMiddle(){

  }
}


/**
 * export linkedlist class
 * @module Linkedlist
 */
module.exports = Linkedlist;