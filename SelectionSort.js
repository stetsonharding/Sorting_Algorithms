/* 

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

The subarray which is already sorted. 
Remaining subarray which is unsorted.

In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. 

Time Complextiy: O(n2);


Selection Sort is good for checking if everything is already sorted. It's also good to use when memory space is limited. This is beacuse unlike other sorting algorithms, selection sort doesin't 
go around swapping things until the very end, resulting in less temporary storage space used.

*/

function SelectionSort(arr) {
  let index = 0;

  //One bye one move boundary of unsorted subarray
  for (let i = 0; i < arr.length; i++) {
    //find the minimum element in unsorted array
    index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;

        //Swap
        let temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

console.log(SelectionSort([22, 12, 64, 11]));
