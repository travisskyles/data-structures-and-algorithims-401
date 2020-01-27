'use strict';

const Shelter = require('../fifoAnimalShelter');

describe('AnimalShelter initialization', () => {
  it('initializes with an empty in and out stack', () => {
    let shelter = new Shelter;

    expect(shelter.in.isEmpty()).toBeTruthy();
    expect(shelter.out.isEmpty()).toBeTruthy();
  });
});

describe('enqueue functionality', () => {
  let shelter;

  beforeEach(() => {
    shelter = new Shelter;
  });

  it('should push to first stack if empty', () => {
    shelter.enqueue('cat');
    expect(shelter.in.top.value).toEqual('cat');
  });
  it('should push to stack with multiple values stored', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');
    expect(shelter.in.top.value).toBe('cat');
  });
});

describe('dequeue functionality', () => {
  let shelter;

  beforeEach(() => {
    shelter = new Shelter;
  });
  it('returns null if pref is not "dog" or "cat"', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');

    expect(shelter.dequeue('bird')).toBeNull();
  });
  xit('returns the first of value prep from the list', () => {
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.enqueue('cat');

    expect(shelter.dequeue('dog')).toBe('dog');
  });
});