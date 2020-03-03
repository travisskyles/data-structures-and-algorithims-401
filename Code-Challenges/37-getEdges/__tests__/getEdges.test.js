'use strict';

const {Graph} = require('../../../Data-Structures/Graph/graph');
const {Vertex} = require('../../../Data-Structures/Graph/graph');
const getEdge = require('../getEdges');

describe('graph functionality', () => {

  let graph;

  let vertex1;
  let vertex2;
  let vertex3;
  let vertex4;
  let vertex5;
  let vertex6;

  beforeEach(() => {
    graph = new Graph();

    vertex1 = new Vertex('pandora');
    vertex2 = new Vertex('arendelle');
    vertex3 = new Vertex('metroville');
    vertex4 = new Vertex('monstropolis');
    vertex5 = new Vertex('narnia');
    vertex6 = new Vertex('naboo');

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);
    graph.addVertex(vertex5);
    graph.addVertex(vertex6);

    graph.addDirectedEdge(vertex1, vertex2, 150);
    graph.addDirectedEdge(vertex2, vertex1, 150);

    graph.addDirectedEdge(vertex2, vertex3, 99);
    graph.addDirectedEdge(vertex3, vertex2, 99);

    graph.addDirectedEdge(vertex2, vertex4, 42);
    graph.addDirectedEdge(vertex4, vertex2, 42);

    graph.addDirectedEdge(vertex1, vertex3, 82);
    graph.addDirectedEdge(vertex3, vertex1, 82);

    graph.addDirectedEdge(vertex3, vertex4, 105);
    graph.addDirectedEdge(vertex4, vertex3, 105);

    graph.addDirectedEdge(vertex3, vertex5, 37);
    graph.addDirectedEdge(vertex5, vertex3, 37);

    graph.addDirectedEdge(vertex5, vertex6, 250);
    graph.addDirectedEdge(vertex6, vertex5, 250);

    graph.addDirectedEdge(vertex3, vertex6, 26);
    graph.addDirectedEdge(vertex6, vertex3, 26);

    graph.addDirectedEdge(vertex4, vertex6, 73);
    graph.addDirectedEdge(vertex6, vertex4, 73);
  });

  test('returns true with dollar amount if direct flights are possible', () => {
    let cities = ['metroville', 'pandora'];
    const cities2 = ['arendelle', 'monstropolis', 'naboo'];

    expect(getEdge(graph, cities)).toEqual('true $82');
    expect(getEdge(graph, cities2)).toEqual('true $115');
  });

  test('returns true with dollar amount if direct flights are possible', () => {
    let cities = ['pandora', 'narnia'];

    expect(getEdge(graph, cities)).toEqual('false $0');
  });

  test('returns null if no matching city in graph', () => {
    let cities = ['null', 'pandora'];
    expect(getEdge(graph, cities)).toEqual(null);
  });
});