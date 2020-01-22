'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');

/**
 *
 *
 * @class AnimalShelter
 */
class AnimalShelter{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }
  /**
 *
 *
 * @param {*} animal
 * @memberof AnimalShelter
 */
  enqueue(animal){
    this.in.push(animal);
  }
  /**
 *
 *
 * @param {*} pref
 * @returns first value of type pref
 * @memberof AnimalShelter
 */
  dequeue(pref){
    if(pref !== 'dog' || pref !== 'cat'){
      return null;
    }
    if(this.out.isEmpty()){
      while(!this.in.isEmpty()){
        this.out.push(this.in.pop());
      }
    }
    if(!this.out.isEmpty()){
      let chosenAnimal;
      while(this.out.top.value !== pref){
        this.in.push(this.out.pop());
      }
      chosenAnimal = this.out.top.value;
      this.out.pop();
      while(!this.out.isEmpty()){
        this.in.push(this.out.pop());
      }
      return chosenAnimal;
    }
  }
}
/** 
 * @module AnimalShelter
*/
module.exports = AnimalShelter;