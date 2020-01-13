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
    list.insert(1);
    expect(list.includes(1)).toBeTruthy();
  });

  it('the head property will properly point to the first node on the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
  });

  it('can properly insert multiple nodes into the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toBe(3);
    expect(list.toString()).toBe('head -> {3} -> {2} -> {1} -> NULL');
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
    expect(list.includes(3)).toBeTruthy();

  });

  it('can properly return a collection of all the values that exist in the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toBe(3);
    expect(list.toString()).toBe('head -> {3} -> {2} -> {1} -> NULL');
  });

  describe('append() method functionality', () => {
    let list;

    beforeEach( () => {
      list = new Linkedlist;
    });

    it('should add new node to the front of the list', () => {
      list.insert(1);
      list.insert(2);
      list.append(10);

      let firstNode = list.head.next.next;

      expect(firstNode.value).toBe(10);
    });
    it('should add new node to empty list', () => {
      list.append(1);
      expect(list.head.value).toBe(1);
    });
  });

  describe('insertBefore() method functionality', () => {
    let list = new Linkedlist();

    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertBefore(3, 0);

    it('should have the proper next value', () => {
      let newNext = (list.head.value);
      let expectedNext = 3;

      expect(newNext).toBe(expectedNext);
    });
    it('previous node should reference new node', () => {
      let referencedValue = (list.head.next.value);
      let expectedValue = (0);

      expect(referencedValue).toBe(expectedValue);
    });

  });

  describe('insertAfter() method functionality', () => {
    let list = new Linkedlist();

    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertAfter(2, 0);

    it('should have the proper next value', () => {
      let newNext = (list.head.value);
      let expectedNext = 3;

      expect(newNext).toBe(expectedNext);
    });
    it('previous node should reference new node', () => {
      let referencedValue = (list.head.next.next.value);
      let expectedValue = (2);

      expect(referencedValue).toBe(expectedValue);
    });
  });
});


