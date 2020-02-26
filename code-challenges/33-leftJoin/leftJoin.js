'use strict';

function leftJoin(mapA, mapB){
  let results = {};

  mapA.map.forEach(item => {
    let key = Object.keys(item.head.value);
    results[key] = [item.head.value[key]];
  });

  mapB.map.forEach(item => {
    let key = Object.keys(item.head.value);
    if(Object.prototype.hasOwnProperty.call(results, key[0])){
      results[key].push(item.head.value[key]);
    }
  });

  return results;
}

module.exports = leftJoin;
