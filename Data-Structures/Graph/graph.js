'use strict' ;

const util = require('util');

// console.log(util.inspect(myObj));

class Vertex {

  constructor(value){
    this.value = value;
  }

}

class Edge {

  //Edge has vertex and weight
  //Edge in our implementation represents the end Vertex

  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
    //this.startNode = vertex; - we are not doing this
    //this.endNode - we are not doing this.
  }

}

class Graph{

  constructor() {
    //create an instance of a Map object. This map object will keep track of the Edges (neighbors)
    //Map is VERY similar to a regular object, except that its key can be anything (whereas object's key can only be string or symbol)

    this.adjacencyList = new Map();
    this.listSize = 0;
  }

  addNode(value){
    let newNode = new Vertex(value);
    this.addVertex(newNode);

    return newNode;
  }

  addVertex(vertex){
    this.adjacencyList.set(vertex, []);
    this.listSize++;
  }
  //directed edge add
  addDirectedEdge( startVertex, endVertex, weight=0) {
    //make sure vertices exist
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('Invalid vertices');
    }
    //get/retrieve what's currently in my map object at the specified vertex - startVertex.
    let valueArray = this.adjacencyList.get(startVertex);
    //for that startVertex, push into the corresponding array (array is the value in the key:value pair)
    valueArray.push(new Edge(endVertex, weight));

  }
  getNeighbors(vertex) {
    //for given vertex argument, return all of its neighbors
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Vertex does not exist');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  getVertices(){
    //returns all of the vertices in the graph data structure
    return [...this.adjacencyList.entries()];
  }

  size(){
    //count of number of vertices in the graph
    return this.size;
  }

}