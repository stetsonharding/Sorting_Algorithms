/* Binary Search */

/*Binary Search is a searching algorithm for finding an element's position in a sorted array. Binary search compares the target value to the middle element of the array. 
If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element 
to compare to the target value, and repeating this until the target value is found. ONLY WORKS WHEN ARRAY IS SORTED*/

function BinarySearch(arr, target) {
  //pointers to beggining of array and end.
  let start = 0;
  let end = arr.length - 1;

  //While loop to continuously split array into half until value is found or you cant split anymore.
  while (start <= end) {
    //Spit array into half based on middle point.
    let mid = Math.floor((start + end) / 2);

    //If mid index is the target return mid
    if (arr[mid] === target) {
      return mid;
      //look at left half of array and split
    } else if (arr[mid] > target) {
      end = mid - 1;
      //look at right half of the array and split
    } else {
      start = mid + 1;
    }
  }

  //if value is not found return null.
  return null;
}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
