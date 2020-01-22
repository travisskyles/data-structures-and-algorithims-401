'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');


class AnimalShelter{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }

  enqueue(animal){
    this.in.push(animal);
  }

  dequeue(pref){
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
      chosenAnimal = this.out.pop();
      while(!this.out.isEmpty()){
        this.in.push(this.out.pop());
      }
      return chosenAnimal;
    }
  }
}


module.exports = AnimalShelter;