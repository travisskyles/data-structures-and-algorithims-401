'use strict';

const LinkedList = requre('../linked-list');

describe('testing linked list', () => {
  
  beforeEach( () => {
    let list = new LinkedList();
  });

  it('can successfully instatiate an empty linked list', () => {
    expect(list.head).toBeNull();
  }),

  it('can properly insert into the linked list', () => {
    expect(list.include).toBeTruthy();
  });

  it('the head property will properly point to the first node on the linked list', () => {

  });

  it('can properly insert multiple nodes into the linked list', () => {

  });

  it('will return true when finding a value within the linked list that exists', () => {

  });

  it('will return false when searching for a value in the linked list that does not exist', () = {

  });

  it('can properly return a collection of all the values that exist in the linked list', () => {

  });

});


