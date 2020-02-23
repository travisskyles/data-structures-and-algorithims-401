'use strict';

const {LinkedList, Hashmap} = require('../hashTable');


describe('LinkedList', () => {
  it('linked list constructs properly', () => {
    let list = new LinkedList();
  
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
  
    let val = list.values();
  
    expect(val).toEqual([1, 2, 3, 4]);
  });
});
describe('Hashmap', () => {
  it('should create a hash table', () => {
    let size = 10;
    let Hash = new Hashmap(size);

    expect(Hash.size).toBe(size);
    expect(Hash).toBeInstanceOf(Hashmap);
  });

  describe('Hashmap.key(key)', () => {
    it('should hash the key to appropriate value', () => {
      let hashedValue = 2;
      let key = 'test';
      let Hash = new Hashmap(3);
      let hashedKey = Hash.hash(key);

      expect(hashedKey).toBe(hashedValue);
    });
  });

  describe('Hashmap.add(key, value)', () => {
    it('should add the key/value pair', () => {
      let key = 'test';
      let value = 'value';
      let Hash = new Hashmap(5);

      Hash.add(key, value);
      let hashedKey = Hash.hash(key);

      expect(Hash.map[hashedKey].head.value[key]).toBe(value);
    });

    it('can handle collisions', () => {
      let Hash = new Hashmap(5);
      Hash.add('test', 'value');
      Hash.add('test', 'test2');

      let hashedKey = Hash.hash('test');

      expect(Hash.map[hashedKey].head.value['test']).toBe('value');
      expect(Hash.map[hashedKey].head.next.value['test']).toBe('test2');
    });
  });
});