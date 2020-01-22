'use strict';

const {Stack} = require('../../Data-Structures/Stack-Queue/stack-queue');

class Animal{
  constructor(name, species){
    this.name = name;
    this.species = species;
  }
}

class AnimalShelter{
  constructor(){
    this.in = new Stack;
    this.out = new Stack;
  }

  enqueue(animal){
    if(animal.species !== ('cat' || 'dog')){
      return 'this shelter only takes cats and dogs';
    }
    this.in.push();
  }
}