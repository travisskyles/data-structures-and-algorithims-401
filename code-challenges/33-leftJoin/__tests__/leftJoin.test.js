'use strict';

const {Hashmap} = require('../../30-hashTable/hashTable');

let hashA = new Hashmap(10);

hashA.add('fond', 'enamored');
hashA.add('wrath', 'anger');
hashA.add('diligent', 'employed');

console.log(hashA.map[0].head.value);
console.log(Object.keys(hashA.map[0].head.value));