# SELECTION SORT

## PSUEDO CODE

    InsertionSort(int[] arr)

      FOR i = 1 to arr.length
      
        int j <-- i - 1
        int temp <-- arr[i]
        
        WHILE j >= 0 AND temp < arr[j]
          arr[j + 1] <-- arr[j]
          j <-- j - 1
          
        arr[j + 1] <-- temp

## Sample Array

[8, 4, 23, 42, 16, 15]

## Walkthrough

![](./assets/step1.jpg)
In the first pass through we start at index position 1 of the array. We set a j value to be our index value minus 1 and set a temp variable to be equal to the value at the current index position. Then we check to see if our j value is equal or greater than 0 and our temp value is smaller than the value at index j. In this case it is so we set our value at index 1 to be the value at index j. Then we set j to be 1 less than the current value and then set the value at index j + 1 to be the stored temp value.
![](./assets/step2_3.jpg)
The next two passes follow the same steps. Once the i, j, and temp and set we check and see if j is greater than or equal to 0 and temp is less than the value at index position j. For both the second and third steps the temp value is greater than that value so the values are not changed.
![](./assets/step4.jpg)
The 4th pass 16 is stored as the temp value. It is smaller than 42 so the while loop is run and the index position of 16 is changed to 42 and the original index position of 42 (index position j) is changed to the temp value and j is decremented by 1. These same steps are repeated within the while loop until the temp value is no longer smaller than the value of index position j.
![](./assets/step5.jpg)
The final pass follows the same procedure as the previous. 15 is stored as the temp value. In this case that value has to travel 3 positions down from its starting position until it reaches the 2 index position.

## Efficiency
Time: O(n^2)

Space: O(1)
