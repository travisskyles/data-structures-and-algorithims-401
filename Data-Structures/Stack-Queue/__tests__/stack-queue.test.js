'use strict';

const {Stack} = require('../stack-queue');
const {Queue} = require('../stack-queue');

describe('Stack functionality', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack;
  });

  it('adds a node to the top of an empty stack', () => {
    stack.push(0);
    expect(stack.top.value).toBe(0);
  });

  it('adds nodes to the top of a stack with multiple nodes', () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toBe(3);
  });

  it('removes a node from the top of the stack', () => {
    stack.push(0);
    stack.push(1);
    stack.pop();
    expect(stack.top.value).toBe(0);
  });

  it('returns undefined if trying to pop from an empty stack', () => {
    expect(stack.pop()).toBeUndefined();
  });

  it('returns the value of the top node', () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.peek()).toBe(2);
  });

  it('returns null if peeking into empty stack', () => {
    console.log(stack.peek());
    expect(stack.peek()).toBeNull();
  });

  it('returns true if stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('returns false if stack has nodes in it', () => {
    stack.push(0);
    expect(stack.isEmpty()).toBeFalsy();
  });
});

describe('Queue functionality', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue;
  });

  it('adds a node to an empty queue', () => {
    queue.enqueue(0);
    expect(queue.front.value).toBe(0);
    expect(queue.back.value).toBe(0);
  });

  it('adds a node to the back of a queue', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    expect(queue.front.value).toBe(0);
    expect(queue.back.value).toBe(1);
  });

  it('removes a node from the front of the queue', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toBe(0);
    expect(queue.back.value).toBe(2);
    queue.dequeue();
    expect(queue.front.value).toBe(1);
    expect(queue.back.value).toBe(2);
  });

  it('returns undefined if trying to remove a node from an empty queues', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  it('returns the value of the front node', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(0);
  });

  it('returns null if peeking into empty queue', () => {
    expect(queue.peek()).toBeNull();
  });

  it('returns true if stack is empty', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('returns false if stack has nodes', () => {
    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy();
  });

});