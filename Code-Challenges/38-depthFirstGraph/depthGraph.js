'use strict';

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
    let neighbors = current.getNeighbors(current);
    results.push(current);

    for(let neighbor in neighbors){
      let neighborVertex = neighbor.vertex;
      if(visited.includes(neighborVertex)){
        continue;
      }else {
        visited.add(neighborVertex);
      }
      stack.push(neighbor);
    }
  }
  return results;
}

export default depthFirst;