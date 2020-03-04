'use strict';
/**
 * checks whether a list of nodes are all directly connected and returns the total weight between them
 * @param {graph} graph
 * @param {array} locations
 * @returns {str} returns true of false and the total weigh
 */
function getEdge(graph, locations){
  let total = 0;
  let nodes = graph.getVertices();
  let current = null;
  let isFound = false;

  for(let i = 0; i < nodes.length; i++){
    if(nodes[i].value === locations[0]){
      current = nodes[i];
    }
  }

  for(let i = 0; i < locations.length; i++){
    if(current === null) return null;

    let neighbors = graph.getNeighbors(current);

    for(let k = 1; k < neighbors.length; k++){
      if(neighbors[k].vertex.value === locations[i]){
        total += neighbors[k].weight;
        current = neighbors[k].vertex;
        isFound = true;
        break;
      }
    }
  }
  if(isFound === false) {
    return 'false $0';
  }else{
    return `true $${total}`;
  }
}

module.exports = getEdge;