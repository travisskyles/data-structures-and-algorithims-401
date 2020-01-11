'use strict';

const Linkedlist = require('../linked-list');

describe('testing linked list', () => {
  
  let list;

  beforeEach( () => {
    list = new Linkedlist;
  });

  it('can successfully instatiate an empty linked list', () => {
    expect(list.head).toBeNull();
  }),

  it('can properly insert into the linked list', () => {
    expect(list.include).toBeTruthy();
  });

  it('the head property will properly point to the first node on the linked list', () => {
    list.insert(1);
    let testList = list.includes(1);
    expect(list.head).toBe(testList.next);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head).toBe('3');
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

  it('will return true when finding a value within the linked list that exists', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(3)).toBeTruthy();
  });

  it('will return false when searching for a value in the linked list that does not exist', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(4)).toBeFalsy();
  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head).toBe('3');
    expect(list.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });

});


