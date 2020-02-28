'use strict';

const {PseudoQueue} = require('../pseudoQueue');

describe('PseudoCode class initialization', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue;
  });
  it('initializes with an empty in and out stack', () => {
    expect(pseudoQueue.in.isEmpty()).toBeTruthy();
    expect(pseudoQueue.out.isEmpty()).toBeTruthy();
  });
});

describe('enqueue functionality', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue;
  });

  it('should push to first stack if empty', () => {
    pseudoQueue.enqueue(0);
    expect(pseudoQueue.in.top.value).toBe(0);
  });
  it('should push to stack with multiple values stored', () => {
    pseudoQueue.enqueue(0);
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    expect(pseudoQueue.in.top.value).toBe(2);
  });
});

describe('dequeue functionality', () => {

  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue;
  });

  it('should pop off one item', () => {
    pseudoQueue.enqueue(0);
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);

    expect(pseudoQueue.dequeue()).toBe(0);
  });
  it('should pop off many items', () => {
    pseudoQueue.enqueue(0);
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
 
    expect(pseudoQueue.dequeue()).toBe(0);
    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
  });
  it('empty the whole queue', () => {
    pseudoQueue.enqueue(0);
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    pseudoQueue.dequeue();
    expect(pseudoQueue.dequeue()).toBeNull();
  });
});