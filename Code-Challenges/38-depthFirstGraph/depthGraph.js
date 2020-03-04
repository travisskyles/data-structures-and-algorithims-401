'use strict';
/**
 * @param {object} graph
 * @returns {array} array of value in depth first order
 */
function depthFirst(graph){
  if (typeof graph !== 'object' || graph.listSize === 0) return null;

  const stack = [];
  const visited = new Set();
  const results = [];
  const vertices = graph.getVertices();
  const startVert = vertices[0];

  stack.push(startVert);
  visited.add(startVert);

  while(stack.length){
    let current = stack.pop();
    console.log(current);
    let neighbors = graph.getNeighbors(current);
    results.push(current.value);

    for(let neighbor of neighbors){
      console.log('neighbor', neighbor);
      let neighborVertex = neighbor.vertex;
      if(visited.has(neighborVertex)){
        continue;
      }else {
        visited.add(neighborVertex);
      }
      stack.push(neighborVertex);
    }
  }
  return results;
}

module.exports = depthFirst;