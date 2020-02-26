'use strict';

const leftJoin = require('../leftJoin');
const {Hashmap} = require('../../30-hashTable/hashTable');

describe('leftJoin functionality', () => {
  it('returns null if no maps are inputed', () => {
    expect(leftJoin()).toBe(null);
  });
    expect(leftJoin(hashA)).toEqual(result);
  });
  it('outputs an object that has values from matching keys from both inputs', () => {
    let hashA = new Hashmap(10);
    let hashB = new Hashmap(10);
    
    hashA.add('fond', 'enamored');
    hashA.add('wrath', 'anger');
    hashA.add('diligent', 'employed');
    
    hashB.add('fond', 'averse');
    hashB.add('wrath', 'delight');
    hashB.add('diligent', 'idle');

    const result = {
      wrath: ['anger', 'delight'],
      diligent: ['employed', 'idle'],
      fond: ['enamored', 'averse'],
    };
    expect(leftJoin(hashA, hashB)).toEqual(result);
  });
  it('inserts null if mapB does not have the same key as mapA', () => {
    let hashA = new Hashmap(10);
    let hashB = new Hashmap(10);
    
    hashA.add('fond', 'enamored');
    hashA.add('wrath', 'anger');
    hashA.add('diligent', 'employed');
    
    hashB.add('fond', 'averse');
    hashB.add('test', 'delight');
    hashB.add('diligent', 'idle');

    const result = {
      wrath: ['anger', null],
      diligent: ['employed', 'idle'],
      fond: ['enamored', 'averse'],
    };
    expect(leftJoin(hashA, hashB)).toEqual(result);
  });
});


