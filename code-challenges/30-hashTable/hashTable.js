'use strict';
/**
 * @class Node
 */
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
/**
 * @class LinkedList
 */
class LinkedList {
  constructor(){
    this.head = null;
  }
  /**
 * @param {*} value
 * @memberof LinkedList
 */
  add(value){
    const nn = new Node(value);

    // initial case where head is null
    if(!this.head){
      this.head = nn;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = nn;
  }
  /**
 * @param {*} key
 * @returns value at key
 * @memberof LinkedList
 */
  getKey(key){
    if(!this.head) return;
    let current = this.head;
    while(current){
      if(Object.keys(current.value)[0] === key) return current.value[key];
      current = current.next;
    }
    return;
  }
  /**
 * @returns array of values
 * @memberof LinkedList
 */
  values() {
    let values = [];
    let current = this.head;

    while(current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }
}
/**
 * @class Hashmap
 */
class Hashmap {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }
  /**
 * @param {*} key
 * @returns hashed key
 * @memberof Hashmap
 */
  hash(key){
    return key.split('').reduce((p,n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
  /**
 * @param {*} key
 * @param {*} value
 * @memberof Hashmap
 */
  add(key, value){
    let hash = this.hash(key);
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }
    let entry = { [key] : value };
    this.map[hash].add(entry);
  }
  /**
 * @param {*} key
 * @returns value at key
 * @memberof Hashmap
 */
  get(key){
    if(!key) throw new Error('Invalid key');
    let index = this.hash(key);
    if(!this.map[index]){
      return null;
    }
    return this.map[index].getKey(key);
  }
  /**
 * @param {*} key
 * @returns boolean for if key exists
 * @memberof Hashmap
 */
  contains(key){
    if(!key) throw new Error('Invalid key');
    let index = this.hash(key);
    if(!this.map[index]){
      return null;
    }
    return this.map[index].getKey? true: false;
  }
}

/** 
 * @module {LinkedList, Hashmap}
*/
module.exports = {LinkedList, Hashmap};
