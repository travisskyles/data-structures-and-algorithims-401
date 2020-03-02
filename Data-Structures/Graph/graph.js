'use strict' ;
/**
 * @class Vertex
 */
class Vertex {
  constructor(value){
    this.value = value;
    this.visited = false;
  }
}
/**
 * @class Edge
 */
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
/**
 * @class Graph
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.listSize = 0;
  }
  /**
 * @param {*} value
 * @returns Node
 * @memberof Graph
 */
  addNode(value){
    let newNode = new Vertex(value);
    this.addVertex(newNode);

    return newNode;
  }
  /**
 * adds a vertex to the adjacency list
 * @param {VertexObj} vertex
 * @memberof Graph
 */
  addVertex(vertex){
    this.adjacencyList.set(vertex, []);
    this.listSize++;
  }
  /**
 * connects two vertices with an edge
 * @param {VertexObj} startVertex
 * @param {VertexObj} endVertex
 * @param {number} [weight=0]
 * @memberof Graph
 */
  addDirectedEdge( startVertex, endVertex, weight=0) {
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('Invalid vertices');
    }
    let valueArray = this.adjacencyList.get(startVertex);
    valueArray.push(new Edge(endVertex, weight));
  }

  /**
   * returns a list of all the neighbors of a vertex
   * @param {VertexObj} vertex
   * @returns {array}
   * @memberof Graph
   */
  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Vertex does not exist');
    }
    return [...this.adjacencyList.get(vertex)];
  }
  /**
 * returns a list of all vertices in the adjacency list
 * @returns {array}
 * @memberof Graph
 */
  getVertices(){
    if(this.listSize === 0){
      return null;
    }
    else{
      return [...this.adjacencyList.keys()];
    }
  }
  /**
 * returns the number of vertices in the graph
 * @returns {integer}
 * @memberof Graph
 */
  getSize(){
    return this.listSize;
  }

  breadthFirst(startNode){

  }

}

module.exports = {Vertex, Edge, Graph};