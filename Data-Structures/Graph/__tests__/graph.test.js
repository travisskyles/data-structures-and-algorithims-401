'use strict';

const {Graph} = require('../graph');
const {Vertex} = require('../graph');
const {Edge} = require('../graph');

describe('graph functionality', () => {

  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    const vertex1 = new Vertex(1);
    graph.addVertex(vertex1);
    expect(graph.adjacencyList.has(vertex1)).toBe(true);

    expect;
  });

  test('An edge can be successfully added to the graph', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2);  
    
    const result = [{'vertex': {'value': 2}, 'weight': 0}];

    expect(graph.adjacencyList.get(vertex1)).toEqual(result);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    let vertex1 = new Vertex('One');
    let vertex2 = new Vertex('Two');
    let vertex3 = new Vertex('Three');
    let vertex4 = new Vertex('Four');
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);

    let result = graph.getVertices();

    expect(result).toEqual([vertex1, vertex2, vertex3, vertex4]);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2); 

    const result = [{'vertex': {'value': 2}, 'weight': 0}];

    expect(graph.getNeighbors(vertex1)).toEqual(result);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    const vertex1 = new Vertex(1);
    const vertex2 = new Vertex(2);

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addDirectedEdge(vertex1, vertex2); 

    expect(graph.getNeighbors(vertex1)[0].weight).toEqual(0);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    let vertex1 = new Vertex('One');
    let vertex2 = new Vertex('Two');
    let vertex3 = new Vertex('Three');
    let vertex4 = new Vertex('Four');
    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);

    expect(graph.getSize()).toEqual(4);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    let vertex1 = new Vertex(1);

    graph.addVertex(vertex1);
    graph.addDirectedEdge(vertex1, vertex1);
    const result = [{'vertex': {'value': 1}, 'weight': 0}];

    expect(graph.adjacencyList.get(vertex1)).toEqual(result);
  });

  test('An empty graph properly returns null', () => {
    expect(graph.getVertices()).toBe(null);
  });

  describe('breadthFirst traversal', () => {
    test('returns a list of values from breathFirst Traversal', () => {
      let vertex1 = new Vertex('One');
      let vertex2 = new Vertex('Two');
      let vertex3 = new Vertex('Three');
      let vertex4 = new Vertex('Four');
      graph.addVertex(vertex1);
      graph.addVertex(vertex2);
      graph.addVertex(vertex3);
      graph.addVertex(vertex4);
      graph.addDirectedEdge(vertex1, vertex2);
      graph.addDirectedEdge(vertex1, vertex3);
      graph.addDirectedEdge(vertex2, vertex3);
      graph.addDirectedEdge(vertex3, vertex4);

      const result =  [
        { value: 'One' },
        { value: 'Two' },
        { value: 'Three' },
        { value: 'Four' },
      ];
      expect(graph.breadthFirst(vertex1)).toEqual(result);
    });

    test('returns null if startVertex is not an object', () => {
      let vertex1 = 1;

      expect(graph.breadthFirst(vertex1)).toEqual(null);
    });
  });
});






