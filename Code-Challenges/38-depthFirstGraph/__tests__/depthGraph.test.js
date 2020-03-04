'use strict';

const {Graph} = require('../../../Data-Structures/Graph/graph');
const {Vertex} = require('../../../Data-Structures/Graph/graph');
const depthFirst = require('../depthGraph');

describe('graph functionality', () => {

  let graph;

  let vertex1;
  let vertex2;
  let vertex3;
  let vertex4;
  let vertex5;
  let vertex6;
  let vertex7;
  let vertex8;

  beforeEach(() => {
    graph = new Graph();

    vertex1 = new Vertex(1);
    vertex2 = new Vertex(2);
    vertex3 = new Vertex(3);
    vertex4 = new Vertex(4);
    vertex5 = new Vertex(5);
    vertex6 = new Vertex(6);
    vertex7 = new Vertex(7);
    vertex8 = new Vertex(8);


    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);
    graph.addVertex(vertex5);
    graph.addVertex(vertex6);
    graph.addVertex(vertex7);
    graph.addVertex(vertex8);

    graph.addDirectedEdge(vertex1,vertex2);
    // graph.addDirectedEdge(vertex2,vertex1);
    graph.addDirectedEdge(vertex2,vertex3);
    // graph.addDirectedEdge(vertex3,vertex2);
    graph.addDirectedEdge(vertex3,vertex7);
    // graph.addDirectedEdge(vertex7,vertex3);
    graph.addDirectedEdge(vertex2,vertex4);
    // graph.addDirectedEdge(vertex4,vertex2);
    graph.addDirectedEdge(vertex1,vertex4);
    // graph.addDirectedEdge(vertex4,vertex1);
    graph.addDirectedEdge(vertex4,vertex5);
    // graph.addDirectedEdge(vertex5,vertex4);
    graph.addDirectedEdge(vertex4,vertex6);
    // graph.addDirectedEdge(vertex6,vertex4);
    graph.addDirectedEdge(vertex4,vertex8);
    // graph.addDirectedEdge(vertex8,vertex4);
  });

  describe('depth first travel', () => {
    it('should return null if graph is empty', () => {
      graph = new Graph();

      expect(depthFirst(graph)).toBe(null);
    });

    it('returns null if input is not a graph', () => {
      expect(depthFirst('hello')).toBe(null);
    });

    it('should return a list of values in depth first order', () => {
      expect(depthFirst(graph)).toEqual([1,4,8,6,5,2,3,7]);
    });

  });
});