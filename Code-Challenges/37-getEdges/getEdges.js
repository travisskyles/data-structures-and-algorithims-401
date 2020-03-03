'use strict';

function getEdge(graph, locations){
  let total = 0;
  let nodes = graph.getVertices();
  let current;

  for(let i = 0; i < nodes.length; i++){
    if(nodes[i].value === locations[0]){
      current = nodes[i];
    }
  }

  for(let i = 0; i < locations.length; i++){
    let neighbors = graph.getNeighbors(current);
    let isFound = false;

    for(let k = 1; k < neighbors.length; k++){
      if(neighbors[k].vertex.value === locations[i]){
        total += neighbors[k].weight;
        current = neighbors[k].vertex;
        isFound = true;
        break;
      }
    }
    if(isFound === false) return 'false $0';
  }
  return `true $${total}`;
}

module.exports = getEdge;