'use strict';

const leftJoin = require('../leftJoin');
const {Hashmap} = require('../../30-hashTable/hashTable');

let hashA = new Hashmap(10);
let hashB = new Hashmap(10);

hashA.add('fond', 'enamored');
hashA.add('wrath', 'anger');
hashA.add('diligent', 'employed');

hashB.add('fond', 'enamored');
hashB.add('bob', 'anger');
hashB.add('diligent', 'employed');

console.log(leftJoin(hashA, hashB));

