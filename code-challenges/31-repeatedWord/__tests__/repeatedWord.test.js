'use strict';

const {split, repeatedWord} = require('../repeatedWord');

describe('split functionality', () => {
  it('should push the whole string into 1 index if there is no delimiter', () => {
    const string = 'this is a test string';

    expect(split(string)).toEqual(['this is a test string']);
  });
  it('should split a string into an array based on a delimiter', () => {
    const string = 'this is a test string';

    expect(split(string, ' ')).toEqual(['this', 'is', 'a', 'test', 'string']);
  });
});

describe('repeatedWord functionality', () => {
  it('should return null if the string only has 1 word or less', () => {
    const string = 'test';

    expect(repeatedWord(string)).toBe(null);
  });
  it('should return the first repeated word', () => {
    const string = 'this is a test, this is a test';

    expect(repeatedWord(string)).toBe('this');
  });
  it('should return the first repeated word with capitalization differences', () => {
    const string = 'this is a test, tHIs iS A TesT';

    expect(repeatedWord(string)).toBe('this');
  });
});