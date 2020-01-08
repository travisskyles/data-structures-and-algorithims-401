'use strict';

const insertShiftArray = require('../arrayShift');

//make sure inputs are the correct type
//ensure value is placed in the correct spot

describe('Make sure that the insertArrayShift function works correctly', () => {
  it('returns an array with the new value in the middle with an even length initial array', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 5, 3, 4]);
    expect(insertShiftArray([1], 0)).toStrictEqual([1,0]);
  });
  it('returns an array with the new value in the middle with an odd length initial array', () => {
    expect(insertShiftArray([1, 2, 3, 4, 5], 0)).toStrictEqual([1,2,3,0,4,5]);
  });
  it('inserts a value to an empty array', () => {
    expect(insertShiftArray([], 1)).toStrictEqual([1]);
  });
  it('should not insert a value in any other index position but the middle', () => {
    expect(insertShiftArray([1, 2, 3, 4], 5)).not.toBe([5,1,2,3,4]);
    expect(insertShiftArray([1, 2, 3, 4], 5)).not.toBe([1,5,2,3,4]);
    expect(insertShiftArray([1, 2, 3, 4], 5)).not.toBe([1,2,3,5,4]);
    expect(insertShiftArray([1, 2, 3, 4], 5)).not.toBe([1,2,3,4,5]);
  });
});
