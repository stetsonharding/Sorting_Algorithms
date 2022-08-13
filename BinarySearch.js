/* Binary Search */

/*Binary Search is a searching algorithm for finding an element's position in a sorted array. Binary search compares the target value to the middle element of the array. 
If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element 
to compare to the target value, and repeating this until the target value is found. ONLY WORKS WHEN ARRAY IS SORTED*/

function BinarySearch(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + right / 2);

    console.log(mid);
    left++;
  }
}

BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
