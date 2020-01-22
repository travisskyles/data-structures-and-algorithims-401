'use strict';

const bracketValidation = require('../multiBracketValidation');

describe('bracketValidation functionality', () => {
  let input;

  it('should return undefined if input is not a string', () => {
    input = 1;
    expect(bracketValidation(input)).toBeUndefined();
    input = ['a','b','c'];
    expect(bracketValidation(input)).toBeUndefined();
    input = {test: test};
    expect(bracketValidation(input)).toBeUndefined();
    input = true;
    expect(bracketValidation(input)).toBeUndefined();
  });
  it('should return true when a matching {} are found', () => {
    input = '{}';
    expect(bracketValidation(input)).toBe();
  });
  it('should return true when a matching () are found', () => {
    input = '()';
    expect(bracketValidation(input)).toBe();
  });
  it('should return true when a matching [] are found', () => {
    input = '[]';
    expect(bracketValidation(input)).toBe();
  });
  it('should return true when match is found with extra characters', () => {
    input = '{test}';
    expect(bracketValidation(input)).toBe();
  });
  it('should return true when multiple matches of the same type are found', () => {
    input = '{{}}';
    expect(bracketValidation(input)).toBe();
  });
  it('should return true when multiple matches of different types are found', () => {
    input = '({[]})';
    expect(bracketValidation(input)).toBe();
  });
  it('should return false if only an opening bracket is found', () => {
    input = '[';
    expect(bracketValidation(input)).toBe();
  });
  it('should return false if only a closing bracket is found', () => {
    input = '}';
    expect(bracketValidation(input)).toBe();
  });
  it('should return false if mismatched open and closed are found', () => {
    input = '[}';
    expect(bracketValidation(input)).toBe();
  });
});