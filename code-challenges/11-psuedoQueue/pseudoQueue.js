'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');

class PseudoQueue{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }

  enqueue(value){
    this.in.push(value);
  }

  dequeue(){
    if(this.out.isEmpty()){
      while(!this.in.isEmpty()){
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
}

module.exports = {PseudoQueue};