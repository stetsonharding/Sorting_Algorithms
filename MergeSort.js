/* Merge Sort */

/*Divide and conquer statergy, array is initially divided into two equal halves and then they are combined in a sorted manner. 
We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. 
This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. 
If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. Finally,
 when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays 
 and combining them to eventually make a larger one. */

//Splitting array into halfs.
function mergeSort(arr) {
  //calculation for middle index, will round down if decimal is calculated.
  let middle = Math.floor(arr.length / 2);

  //breaks out of recurstion call
  //base case
  if (arr.length < 2) {
    return arr;
  }

  //life side of array
  const left = arr.slice(0, middle);
  //right side of array
  const right = arr.splice(middle, arr.length - 1);

  return merge(mergeSort(left), mergeSort(right));
}

//Sorting the array
function merge(leftArr, rightArr) {
  let result = [];

  //condition for checking if arrays have elements
  while (leftArr.length && rightArr.length) {
    //Checks what array at index 0 should be pushed into result array.
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  return [...result, ...leftArr, ...rightArr];
}

console.log(mergeSort([2, 1, 9, 4, 3]));
