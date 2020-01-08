# Array Shift

This is a function that takes in a sorted array and a search key and returns the index of the matching value, or -1.

## Challenge

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach & Efficiency

For this challenge I knew that it would need a left and right value in order to keep track of the position within the array that the function was in as it refined the search. Then the function checks whether the search key is greater than, less than, or equal to the middle index of the current position. It will continue to cycle through this loop until the left position is less than or equal to the right position, or it finds a match.

## Link to code

## Solution

![](../../assets/03-arrayBinarySearch.jpg)
