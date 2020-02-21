'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

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

  values(){
    let values = [];
    let current = this.head;
    while(current){
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size){
    this.size = size;
    this.map = new Array(size);
  }

  hash(key){
    return key.split('').reduce((p,n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value){
    let hash = this.hash(key);
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }
    let entry = { [key] : value };
    this.map[hash].add(entry);
  }


}
