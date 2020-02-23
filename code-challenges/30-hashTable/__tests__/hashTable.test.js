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
  describe('Hashmap.get(key)', () => {
    it('Given a key, should return the value', () => {
      let Hash = new Hashmap(5);

      Hash.add('test', 'value');

      expect(Hash.get('test')).toBe('value');
    });

    it('Should return null if key does not exist', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('test', 'value');

      expect(HashTable.get('abcdefg')).toBe(null);
    });

    it('Should return the value from a bucket within a HashTable that has a collision', () => {
      let Hash = new Hashmap(5);

      Hash.add('test', 'value');
      Hash.add('tset', 'value2');

      expect(Hash.get('test')).toBe('value');
      expect(Hash.get('tset')).toBe('value2');
    });
  });

  describe('Hashmap.contains(key)', () => {
    test('Should return true if the key exists', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('test', 'value');

      expect(HashTable.contains('test')).toBeTruthy();
    });

    test('Should return false if the key does not exists', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('test', 'value');

      expect(HashTable.contains('gdsahatgdga')).not.toBeTruthy();
    });
  });
});