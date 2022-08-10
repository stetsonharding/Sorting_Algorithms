const { ArrowRight } = require("@material-ui/icons");

/* Bubble Sort */
/* Sorts an array by compairing two adjacent elements and swaps them if they are not in the intended order (increasing or decreasing)
/* Bubble sort compares the element from index 0 and if the 0th index is greater than 1st index then the values get swapped and if the 0th index is less than the 1st index then nothing happens.
then, the 1st index compares to the 2nd index then the 2nd index compares to the 3rd, and so on… */

//Time Complexity = O(n^2) best case O(n)
let testArr = [1, 5, 2, 7, 6, 9, 8, 22, 11];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //Check if item at the present iteration
      //Is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        //If condition is true, swap.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  console.log(arr);
}

bubbleSort(testArr);

/* Merge Sort */

/*Divide and conquer statergy, array is initially divided into two equal halves and then they are combined in a sorted manner. 
We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. 
This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. 
If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally,
 when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays 
 and combining them to eventually make a larger one. */
