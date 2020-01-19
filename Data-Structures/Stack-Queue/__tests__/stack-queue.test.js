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

  it('returns true if stack is empty', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('returns false if stack has nodes in it', () => {
    stack.push(0);
    expect(stack.isEmpty()).toBeFalsy();
  });
});