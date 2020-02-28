'use strict';
/**
 * @param {hashmap} mapA
 * @param {hashmap} mapB
 * @returns {object} returns results of left join of two hashmaps
 */
function leftJoin(mapA, mapB){
  let results = {};

  if(!mapA || !mapB) return null;

  mapA.map.forEach(item => {
    let key = Object.keys(item.head.value);
    results[key] = [item.head.value[key]];
  });
  for(let resultKey of Object.keys(results)){
    if(mapB.contains(resultKey)){
      results[resultKey].push(mapB.get(resultKey));
    }
    else {
      results[resultKey].push(null);
    }
  }
  return results;
}

module.exports = leftJoin;
