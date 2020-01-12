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
   *
   * checks to see wheter a valude exists as a node's value somewhere on the list
   * @param {*} value
   * @memberof Linkedlist
   */
  includes(value){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        return true;
      }
      currentNode = currentNode.next;
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

let list = new Linkedlist();

list.insert(1);
list.insert(2);
list.insert(3);
// console.log(list);
// console.log(list.head.next.next);
console.log(list.toString());

module.exports = Linkedlist;