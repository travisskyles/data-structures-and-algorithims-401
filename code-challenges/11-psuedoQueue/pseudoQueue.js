'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');
/**
 * @class PseudoQueue
 */
class PseudoQueue{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }
  /**

 * @method enqueue
 * @param {*} value
 * @memberof PseudoQueue
 */
  enqueue(value){
    this.in.push(value);
  }
  /**
 * @method dequeue
 * @returns value of popped node
 * @memberof PseudoQueue
 */
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