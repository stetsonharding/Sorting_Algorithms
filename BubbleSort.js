

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

